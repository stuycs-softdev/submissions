from flask import Flask, render_template, request, session
from flask import redirect, url_for
import utils

redirToLogin = '<center><h1>You must be logged in to view this page!</h1><br>Redirecting to Login Page...</center><META HTTP-EQUIV="refresh" CONTENT="3;url=/login">'

redirToInfo = '<center><h1>You have not filled out all of your information yet!</h1><br>Redirecting to Info Page...</center><META HTTP-EQUIV="refresh" CONTENT="3;url=/login">'

app = Flask(__name__)

def isLoggedIn():
    if "loggedIn" not in session:
        session["loggedIn"] = False
    return session["loggedIn"]

def checkHoroscope():
    month = session["month"]
    day = session["day"]
    if (month == "March" and day >= 21) or (month == "April" and day <= 19):
        return 'Aries'
    if (month == "April" and day >= 20) or (month == "May" and day <= 20):
        return 'Taurus'
    if (month == "May" and day >= 21) or (month == "June" and day <= 20):
        return 'Gemini'
    if (month == "June" and day >= 21) or (month == "July" and day <= 22):
        return 'Cancer'
    if (month == "July" and day >= 23) or (month == "August" and day <= 22):
        return 'Leo'
    if (month == "August" and day >= 23) or (month == "September" and day <= 22):
        return 'Virgo'
    if (month == "September" and day >= 23) or (month == "October" and day <= 22):
        return 'Libra'
    if (month == "October" and day >= 23) or (month == "November" and day <= 21):
        return 'Scorpio'
    if (month == "November" and day >= 22) or (month == "December" and day <= 21):
        return 'Sagittarius'
    if (month == "December" and day >= 22) or (month == "January" and day <= 19):
        return 'Capricorn'
    if (month == "January" and day >= 20) or (month == "February" and day <= 18):
        return 'Aquarius'
    if (month == "February" and day >= 19) or (month == "March" and day <= 20):
        return 'Pisces'

def checkDescript():
    if (session["horoscope"] == "Aries"):
        return "Aries is the first of the zodiac signs. Aries is the sign of the self, people born under this sign strongly project their personalities onto others and can be very self-oriented. Aries tend to venture out into the world and leave impressions on others that they are exciting, vibrant and talkative. Aries tend to live adventurous lives and like to be the center of attention, but rightly so since they are natural, confident leaders. Aries are enthusiastic about their goals and enjoy the thrill of the hunt, \"wanting is always better then getting\" is a good way to sum it up. Aries are very impulsive and usually do not think before they act - or speak. Too often Aries will say whatever pops into their head and usually end up regretting it later!"
    if (session["horoscope"] == "Taurus"):
        return "Taurus is the one who has immense perseverance, even when others have given up, the Taurus rages on. Solid and persistent, just like the bull, which is Taurus' well suited symbol. Taurus's have a well known reputation for being stubborn, which is not necessarily a bad thing. The stubborn streak can cause Taurus to butt heads and conflict with other strong character types. Taurus are not fond of change. They like the familiar and routine comfort of life. Taurus is easy going and not one to pick a fight but should some poor souls attempt to provoke Taurus, the wrath will be known, for they have a temper underneath the calm surface. Taurus are very responsive to their surroundings. They like decorations, color, anything that appeals to all the senses. Taurus like possessions and the Taurus home is nicely decorated with lots of things. Taurus are down to earth, they do not like gaudy, flashy or over the top things. They prefer comfortable and creative settings and objects. Taurus likes security, in every aspect of their lives from home, to love, to career. Taurus can be secretive, opinionated and stingy. Taurus tend to be self-indulgent and lazy, Taurus are master procrastinators of the astrology zodiac! They do however have a strong, persistent drive that comes to life when they chose, and no one would ever know that they are lazy. The secret to this is that their laziness is pushed aside when it comes to themselves."
    if (session["horoscope"] == "Gemini"):
        return "Gemini people are many sided, quick both in the mind and physically. They are brimming with energy and vitality, they are clever with words. They are intelligent and very adaptable to every situation and every person. Gemini are curious and always want to know what's going on in the world around them. They are not one to sit back and watch the world go by, they want to be involved. This can sometimes make Gemini nosy, they do not mind their own business! This is because they really enjoy communicating, more so then most other astrology signs, they are the ultimate social butterfly. Gemini can talk and talk, but they have interesting things to say, their talk is not mindless babble. They have interesting opinions and thoughts on things and are not afraid to speak their mind. They are always in the know and are the one to see for the latest juicy gossip. Lacking perseverance, Gemini easily goes off topic to explore another thought or idea. Gemini are superficial, they will form opinions on matter without diving into them and exploring them fully. This can lead them into thinking they know everything, which they usually do but their mind is too busy to be concerned with fine details. Routine and boredom are Gemini's biggest fears. Gemini would rather be naive then know the depressing truth, they do not want anything putting a damper on their freedom or positive energy."
    if (session["horoscope"] == "Cancer"):
        return "Cancer is a mysterious sign, filled with contradictions. They want security and comfort yet seek new adventure. They are very helpful to others yet sometimes can be cranky and indifferent. Cancer has a driving, forceful personality that can be easily hidden beneath a calm, and cool exterior. The crab is Cancer's ruling animal and it suits them well, they can come out of their shell and fight but they can also hide in their shell of skitter away back into the depths of the ocean. They are very unpredictable. With cancer, there is always something more that meets the eye, for they are always partially hidden behind the shell. They are a have a deep psyche and intuitive mind that is hidden from the world. Cancer is deeply sensitive and easily hurt, this might be why they have their defense shell in place, to avoids being hurt by others. They are nurturers so they surround themselves with people, whom after a while can offend or hurt a cancer without even knowing they did so, therefore Cancer's protective shell keeps them safe from hurt. They are complex, fragile, unpredictable and temperamental and need constant support and encouragement, more then any other astrology signs, Cancer needs to be needed. When cancer gets the support it needs, it has a tremendous amount to offer in return. When cancer gets offended, they tend to sulk instead of confronting the persons face to face. This needlessly prolongs the pain and suffering. Cancer is very possessive, not just with material possessions but with people as well. Cancer will always want to stay in touch with old friends and anyone who has ever been close to them, because it is easier to maintain a friendship then attempt to learn to trust a new person. It is easier this way for them emotionally. If you befriend a Cancer, you will stay friends for a long time. Cancer makes the perfect mother, this is the sign that represents motherhood. They have unconditional love and caring more so then any other astrology sign. Cancer are very intuitive. Most of the psychics of the world are Cancer astrology signs. They have an excellent memory and are very observant and can read people very well. They can usually tell of other people's intentions are good or not. Never dupe a Cancer, they can see your motives. Cancer has a lot of emotional issues to deal with but once they overcome this large hump of shyness and insecurity, there is practically nothing they can't do. With their strong intuition, sensitivity, powers of observation and intelligence, they will have great success in anything they undertake."
    if (session["horoscope"] == "Leo"):
        return "Leo is the lion, this well suited symbol represents Leo very well. They possess a kingdom which they protest and cherish. The are high esteemed, honorable and very devoted to themselves in particular! The kingdom could be anything from work to home to a partner, whatever it is, you rule it. Leo is always center stage and full of flair, they enjoy basking in the spotlight. A Leo always makes their presence known. Leo are full of energy that acts like a magnet for other people. Others are attracted to Leo's wit, charm, and what they have to say for they speak of things grand and very interesting. Leo will never settle for second best. They want only the best which can cause lavish excessive spending habits as they enjoy their life of luxury, which is all to easily justified by the grand and magnificent Leo! Public image is very important to Leo, with luxurious possessions and ways of life, this keeps the public image in high standing. They will do whatever it takes to protect their own reputation. Leos are very generous, kind and openhearted people. If a Leo is crossed, they will strike back with force but they are not one to hold a grudge, they easily forgive, forget and move on. Leos are always trying to make things right in the world, they have larger then life emotions and they need to feel like they have accomplished something at the end of the day. They react to situations with action instead of sitting back and thinking about it, they are not impulsive however because they look at the future and consider consequences of their actions. "
    if (session["horoscope"] == "Virgo"):
        return "Virgo exists in the mind, everything is inside. To the world, Virgo presents a calm and collected exterior but on the inside, nervous uncontrolled intensity in the mind, trying to figure things out, how to improve everything, analyzing and thinking. Virgo can tire itself out without even moving! Virgo has a constant drive to improve and perfect, this can lead to extreme pickiness and finickiest. They are pure, their motives are honest never malicious and they want to accomplish something."
    if (session["horoscope"] == "Libra"):
        return "Libras are the diplomat of the zodiac. They are able to put themselves in other's shoes and see things through another person's point of view. They are the ones that always want to make things right and have balance and harmony in their life, their surroundings and the lives of the people close to them. They have captivating charm, elegant taste and they are easy to like due to their eager-to-please, easygoing nature. In return for a Libra's amazing ability to be a good listener, sooth and calm people, they expect admiration. Libras will gather a group of people, everyone will become friends then the Libra will be in the center of the group. They like the attention and the admiration for the people that they have brought together. Libras are very intelligent, they often hide this inside their easygoing exterior. They express their intelligence through creativity, most are involved in some sort of artistic or creative pursuit. Many people overlook just how intelligent a Libra actually is. When others see a Libras wide range of interests and hobbies, their intelligence and creativity is more then obvious. Libras love variety and different situations. They welcome change. Libras love luxury. They will spend lots of money and surround themselves with beautiful things and they seem to be constantly fussing over their appearance. They love anything upscale and classy. Libras work hard to please others, this they do an others find them incredibly captivating. "
    if (session["horoscope"] == "Scorpio"):
        return "Scorpio is the astrology sign of extremes and intensity. Scorpios are very deep, intense people, there is always more then meets the eye. They present a cool, detached and unemotional air to the world yet lying underneath is tremendous power, extreme strength, intense passion and a strong will and a persistent drive. Scorpios have a very penetrative mind, do not be surprised if they ask questions, they are trying to delve deeper and figure things out and survey the situation. They always want to know why, where and any other possible detail they can possibly know. Scorpio's are very weary of the games that other people try to play and they are very aware of it. Scorpios tend to dominate and control anyone that lets them, or anyone that they find weak. The person that a Scorpio respects and holds close to them is treated with amazing kindness, loyalty and generosity. On the outside, a Scorpio has great secretiveness and mystery. This magnetically draws people to them. They are known to be controlling and too ambitious but only because they need control for this makes them feel safe."
    if (session["horoscope"] == "Sagittarius"):
        return "Sagittarius make excellent friends because of their encouraging, positive nature and their kind heart that will do anything to make sure the friend is happy. They do not expect favors in return, their kindness is selfless. They do not interfere with other people's plans and they are never possessive or jealous. They treat others the way they want to be treated and life life based on a 'live and let live' policy, this makes them so agreeable. Sagittarius are excellent conversationalists with a good sense of humor, sometimes their humor is the raw truth, but these people speak their mind and don't hold anything back. What they say is what they mean, Sagittarius do not like mind games, it holds them back trying to figure out what is meant, they like straightforwardness and expect it in return. Sagittarius are known for saying the 'painful truth', but on the other hand, people know that they can trust what they say because they always say what is real. A Sagittarius never hides anything. Sagittarius are very likeable people. The only people that might not get along with them are people that live by a daily agenda with a highly structured, organized life. They are likely to always be running late and miss a date, but this is only because they are so forward thinking that they forget about the present. Tolerance is required, Sagittarius does not do these things on purpose, this is just who they are. If you understand this and accept this, having a Sagittarius in your life will make the sun shine a lot brighter."
    if (session["horoscope"] == "Capricorn"):
        return "Capricorns are very ambitious people, they always have something they are pursuing and they want their lives to be fulfilled and important. Capricorns are extremely patient and will wait a long time for something they want, when the opportunity arises, they will plan their steps carefully to others, they might appear hesitant but this is not true, they know that there is only one chance to succeed and they are filing together their information to take the proper steps to accomplish their goal with flying colors, not just second rate. Capricorns have a very active mind and strong powers of concentration. Capricorns like being in control of their surroundings and everyone in their life. Capricorns are very cautious but this only to survey the situation before leaping in, they will never make a hasty jump in. They accept change but introduce it slowly so they can get used to it and incorporate it into their life. Capricorns tend to see life in black or white, definitive's only. There are no gray areas for these are areas that are not understood and this makes Capricorn feel uncomfortable. They tend to be in control in a romantic relationship that way they are never vulnerable to another person."
    if (session["horoscope"] == "Aquarius"):
        return "Aquarius is the sign of visionaries, unconventionality and intellectual independence. Aquarius are the people who deviate from the crowd and go their own way. They are always after intellectual stimulation, constantly discovering something new, forming new opinions and stubbornly traveling their way regardless of what other people think. Aquarius are filled with paradoxes, they are interested in the opposite ends of the spectrum, they like to be alone yet are social butterflies, they like to experience both sides and see both opinions as they formulate new ideas with their forward thinking, active mind. Aquarius have a 'live and let live' policy where everyone is free to be themselves, an Aquarius never judges others because as human beings, we are all equal and entitled to our own opinions. They are verbally skilled and very witty, they observe people and learn how to interact with others through observation. They can be masters of manipulation justifying anything they do or think. As a result, they can deal with any type of personality and adapt to any situation. They welcome change because boredom is their enemy. Anything new is an opportunity to Aquarius. Aquarius can act as an expert on any topic, they are very good at inflating their own importance, they feel it is deserved because their eccentricity makes them unique. Conventional people beware, Aquarius likes to shock and deviate from the norm, this is how they live. Aquarius is known to pick at anyone they find weak or dull-minded. It is simply an easy target for verbal exercise for them, no harm is meant but it might be taken from the other person. Deep inside, Aquarius would never intentionally hurt anyone, they have respect for every human, even thought this might not seem apparent to the more emotional types."
    if (session["horoscope"] == "Pisces"):
        return "Pisces is the sign of mysticism, mystery and the spiritual unknown. Pisces live in two worlds, the real world and the spiritual or mystical world where they interpret what they see into what they want. They do this to avoid all the realities of pain and suffering in the world. They have extremes of emotions and feel both good and bad intensively. Pisces have formidable intuitive ability. Most Pisces are somehow involved with occult or spiritualism. Pisces are very good at understanding people for they have the ability to delve into the psyche and see behind a person's motivations. Pisces are prone to drug addiction and indulging lifestyles because of their eternal search for themselves and their fear of confrontation and having to change a situation, also they justify drug use by allowing it to get closer with their 'spiritual selves'. Once they aware this is why they are doing it, it will be easier to kick the habit. Pisces are not the pushovers that they may seem, in fact they have strength of character and will stand up for what they believe in and and they can do hard work for something they believe in. They can be very lazy but only in matters that they do not care about. Pisces is the most sensitive of all zodiac signs."


def checkPic():
    if (session["horoscope"] == "Aries"):
        return "/static/aries.png"
    if (session["horoscope"] == "Taurus"):
        return "/static/tarius.png"
    if (session["horoscope"] == "Gemini"):
        return "/static/gemini.png"
    if (session["horoscope"] == "Cancer"):
        return "/static/cancer.png"
    if (session["horoscope"] == "Leo"):
        return "/static/leo.png"
    if (session["horoscope"] == "Virgo"):
        return "/static/virgo.png"
    if (session["horoscope"] == "Libra"):
        return "/static/virgo.png"
    if (session["horoscope"] == "Scorpio"):
        return "/static/scorpio.png"
    if (session["horoscope"] == "Sagittarius"):
        return "/static/sagittarius.png"
    if (session["horoscope"] == "Capricorn"):
        return "/static/capricorn.png"
    if (session["horoscope"] == "Aquarius"):
        return "/static/aquarius.png"
    if (session["horoscope"] == "Pisces"):
        return "/static/pisces.png"


@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html", session=session)

@app.route("/login",methods=["GET","POST"])
def login():
    if isLoggedIn():
        return '<center><h1>You are already logged in!</h1><br>Press the logout link in order to log out. Redirecting to horoscope...</center><META HTTP-EQUIV="refresh" CONTENT="3;url=/info">'
    elif request.method=="GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button == "cancel":
            return render_template("login.html")
        if utils.authenticate(uname,pword):
            session["loggedIn"] = True
            session["uname"] = uname
            session["pass"] = pword
            return redirect(url_for("enterInfo"))
        else:
            session["loggedIn"] = False
            error = "Bad username or password"
            return render_template("login.html",err=error)

@app.route("/info", methods=["GET", "POST"])
def enterInfo():
    if isLoggedIn():
        if request.method=="GET":
            return render_template("info.html")
        else:
            name = request.form['name']
            month = request.form['month']
            day = request.form['day']
            favCol = request.form['color']
            button = request.form['button']
            infoList = [month, day, favCol]
            error = ''
            if '' in infoList:
                error = "You have not filled out all of your information!"
                return render_template("/info", err = error)
            if button == 'cancel':
                return render_template("/info")
            else:
                session["name"] = name
                session["month"] = month
                session["day"] = day
                session["color"] = favCol
                session["allReady"] = True
                return redirect(url_for("horoscope"))
    else:
        return redirToLogin

@app.route("/horoscope")
def horoscope():
    session["horoscope"] = checkHoroscope()
    session["descript"] = checkDescript()
    session["pic"] = checkPic()
    month = session['month']
    day = session['day']
    color = session['color']
    if isLoggedIn() and session['allReady'] == False:
        return redirToInfo
    elif isLoggedIn() and session['allReady'] == True:
        return render_template("horoscope.html",horoscope = session["horoscope"], name=session["name"], descript = session["descript"], pic = session["pic"], month=month, day=day, color=color, s = session)
    else:
        return redirToLogin

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
