from flask import Flask, request, render_template, redirect, jsonify
from urllib3 import HTTPSConnectionPool, disable_warnings
from json import loads, dumps
from urlparse import parse_qs
from os import urandom

app = Flask(__name__)

FACEBOOK_APP_ID="914763751945990"
FACEBOOK_APP_SECRET="379f575bdc07a89bf0f5adac46c55dcf"
GRAPH_API_VERSION="v2.5"
REDIRECT_URI="http://localhost:8000/callback"

TOKENS = {}
disable_warnings()

# ---------------------------------------------------------------------------------------
# STOLEN (WITH SOME MODIFICATIONS) FROM https://github.com/SensibleWood/facebook-tutorial
# ---------------------------------------------------------------------------------------

class NotAuthorizedException(Exception):
    pass


class FacebookConnection(HTTPSConnectionPool):
    """
    Convenience class to that wraps connection and call to Graph API
    """
    def __init__(self):
        super(FacebookConnection, self).__init__('graph.facebook.com')

    def __call__(self, method, url, token, http_headers, request_body):
        if http_headers is None:
            http_headers = {}

        if token is not None:
            http_headers["Authorization"] = "Bearer %s" % token

        return self.urlopen(method, url, headers=http_headers, body=request_body)

FACEBOOK_CONNECTION=FacebookConnection()


def get_app_token():
    """
    Get an app token based on app ID and secret

    :return:
    """
    try:
        response = FACEBOOK_CONNECTION(
            'GET',
            '/oauth/access_token?client_id=%s&client_secret=%s&grant_type=client_credentials'
            % (FACEBOOK_APP_ID, FACEBOOK_APP_SECRET),
            None, None, None)

        return parse_qs(response.data.decode("utf-8"))["access_token"]
    except KeyError:
        raise NotAuthorizedException("Authorization error", "App access token not found")
    except:
        raise


def get_user_token(code):
    try:
        response = FACEBOOK_CONNECTION(
            'GET',
            '/%s/oauth/access_token?client_id=%s&redirect_uri=%s&client_secret=%s&code=%s'
            % (GRAPH_API_VERSION, FACEBOOK_APP_ID, REDIRECT_URI, FACEBOOK_APP_SECRET, code),
            None, None, None)
        print(response.data.decode("utf-8"))

        return loads(response.data.decode("utf-8"))["access_token"]
    except KeyError:
        raise NotAuthorizedException("Authorization error", "User access token not found")
    except:
        raise


@app.route("/authorize")
def authorize_facebook():
    """
    Redirects the user to the Facebook login page to authorize the app:
    - response_type=code
    - Scope requests is to post updates on behalf of the user and read their stream

    :return: Redirects to the Facebook login page
    """
    return redirect("https://www.facebook.com/dialog/oauth?client_id=%s&redirect_uri=%s&scope=user_friends"
                    % (FACEBOOK_APP_ID, REDIRECT_URI))


@app.route("/callback")
def handle_callback():
    """
    Handles callback after user authorization of app, calling back to exchange code for access token

    :return:
    """
    global TOKENS

    try:
        TOKENS["user_token"] = get_user_token(request.args.get("code"))
        return redirect("/")
    except NotAuthorizedException:
        return 'Access was not granted or authorization failed', 403
    except:
        raise

# ---------------------
# END OF STOLEN SECTION
# ---------------------

@app.route("/")
def home():
    # Check whether the user has authorized the app, if authorized login button will not be displayed
    user_authorized = True if "user_token" in TOKENS else False

    return render_template("index.html", authorized=user_authorized)


@app.route("/getpic")
def get_pic():
    if "user_token" not in TOKENS:
        return 'Not authorized', 401
    
    try:
        response = FACEBOOK_CONNECTION(
            'GET',
            '/%s/me?fields=picture.type(large)' % GRAPH_API_VERSION,
            TOKENS["user_token"], None, None)
        
        if response.status != 200:
            return 'Unexpected HTTP return code from Facebook: %s' % response.status, response.status

    except Exception as e:
        return 'Unknown error calling Graph API', 502
    
    return loads(response.data.decode("utf-8"))['picture']['data']['url'], 200



if __name__ == '__main__':
    # Register an app token at start-up
    TOKENS["app_token"] = get_app_token()
    app.debug = True
    app.secret_key = urandom(24)
    app.run(host="0.0.0.0", port=8000)
