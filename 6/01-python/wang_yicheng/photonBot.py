# This is an upgrade of an irc chat bot I wrote a while ago.
# I pretty much scrapped the entire thing and started from the
# beginning except for the 'how irc commands work' part.

# The major difference is the config file to make configring the
# bot easier.

import socket
import random

HOST = "HOST"
PORT = "PORT"
NICK = "NICK"
CHANNEL = "CHANNEL"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

def loadConfig():
    global HOST, PORT, NICK, CHANNEL
    try:
        print "Loading config files..."
        with open('config.pbc') as f:
            d = dict(line.strip().split(None, 1) for line in f)
        HOST = d[HOST]
        PORT = int(d[PORT])
        NICK = d[NICK]
        CHANNEL = d[CHANNEL]
        return 0
    except:
        raise
        print "It looks like this is the first time you're using photonBot"
        print "Here are some simple setup instructions:"
        setup()
        return 1

def setup():
    global HOST, PORT, NICK, CHANNEL
    HOST = raw_input("Please enter the hostname of the irc service you want to connect to: ")
    try:
        PORT = int(raw_input("And the port number: "))
    except:
        print "... you cannot not try to break this eh?"
        exit()
    NICK = raw_input("Please enter the nickname of the bot: ")
    CHANNEL = raw_input("And the channel to which the bot will be connected to: ")
    configs = "HOST %s\nPORT %d\nNICK %s\nINDENT %s\nCHANNEL %s\n" % (HOST,
            PORT, NICK, INDENT, CHANNEL)
    f = open("config.pbc", 'w')
    f.write(configs)
    f.close()
    print "These configs are saved at \'config.pbc\'"

def connect():
    global HOST, PORT, NICK, CHANNEL, s
    s.connect((HOST, PORT))
    s.send("NICK %s\r\n" % NICK)
    s.send("USER %s 8 * :%s\r\n" % (NICK, NICK))
    pingPong = s.recv(512)
    pingPong = pingPong[5:]
    s.send('PONG %s\r\n' % pingPong)
    s.send("JOIN %s\r\n" % CHANNEL)

def parse(line):
    result = ""
    if line.find("JOIN") != -1:
        username = line.split(":")[1].split("!")[0]
        result = "hi, %s" % username
    return result

def main():
    global CHANNEL, s
    retVal = loadConfig()
    if retVal == 0:
        choice = raw_input("Do you want to change the values in your config file? [y/n] " )
        if choice == 'y':
            setup()
    connect()
    while True:
        line = s.recv(1024)
        if line.find("PRIVMSG %s" % CHANNEL) != 1:
            s.send("PRIVMSG %s :%s\r\n" % (CHANNEL, parse(line)))
        if line.find("PING :") != -1:
            s.send("PONG :Pong\r\n")

main()
