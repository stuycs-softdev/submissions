# This is an upgrade of an irc chat bot I wrote a while ago.
# I pretty much scrapped the entire thing and started from the
# beginning.

# The major difference is the config file to make configring the
# bot easier.

import socket
import random
import sys

HOST = "HOST"
PORT = "PORT"
NICK = "NICK"
CHANNEL = "CHANNEL"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    print "Loading config.pbc..."
    with open('config.pbc') as f:
        d = dict(line.strip().split(None, 1) for line in f)
    HOST = d[HOST]
    PORT = int(d[PORT])
    NICK = d[NICK]
    CHANNEL = d[CHANNEL]
except:
    print "It looks like this is the first time you're using photonBot"
    print "Here are some simple setup instructions:"
    HOST = raw_input("Please enter the hostname of the irc service you want to connect to: ")
    try:
        PORT = int(raw_input("And the port number: "))
    except:
        print "... you cannot not try to break this eh?"
        exit()
    NICK = raw_input("Please enter the nickname of the bot: ")
    CHANNEL = raw_input("And the channel to which the bot will be connected to: ")
    configs = "HOST %s\nPORT %d\nNICK %s\nCHANNEL %s\n" % (HOST, PORT, NICK, CHANNEL)
    f = open("config.pbc", 'w')
    f.write(configs)
    f.close()
    print "These configs are saved at \'config.pbc\'"

s.connect((HOST, PORT))
#print "recv 1", s.recv(512)
s.send("NICK %s\r\n" % NICK)
s.send("USER %s 8 * :%s\r\n" % (NICK, NICK))
pingPong = s.recv(512)
#print "recv 2", pingPong
pingPong = pingPong[5:]
s.send('PONG %s\r\n' % pingPong)
s.send("JOIN %s\r\n" % CHANNEL)

def parse(line):
    result = ""
    if line.find("JOIN") != -1:
        username = line.split(":")[1].split("!")[0]
        if username != NICK:
            result = "hi, %s" % username
    # TODO add more commands lol
    if len(line.split(":")) == 3:
        username = line.split(":")[1].split("!")[0]
        message = line.split(":")[2]
        #print username
        #print message

        if message.find("`") == 0:
            actual = message[1:].split(" ")
            commands = ['help', 'roll', 'md5', 'hex', 'ascii']
            command = actual[0]
            #print command
            if command.find('help') != -1: # help
                result = "Commands: "
                for i in commands:
                    result = result + i + ", "
                result = result[:-2]
    return result


while True:
    line = s.recv(1024)
    if len(sys.argv) > 1:
        if sys.argv[1] == "-d":
            print line
    if line.find("PRIVMSG %s" % CHANNEL) != 1:
        answer = parse(line)
        if answer != "":
            s.send("PRIVMSG %s :%s\r\n" % (CHANNEL, answer))
    if line.find("PING :") != -1:
        s.send("PONG :Pong\r\n")
