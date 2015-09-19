#!/usr/bin/env python

from random import choice

adjectiveList = []
sNounList = []
pluralNounList = []
adjectiveList = []
nameList = []
pastVerbList = []
presentVerbList = []
presentProgressiveVerbList = []
adverbList = []
jobList = []

def madlibify(story):
    words = story.split(" ")
    for placeholder in placeholders:
        while placeholder in words:
            pos = words.index(placeholder)
            which = words.pop(pos)
            if which == "<NOUN-SINGULAR>":
                words.insert(pos,choice(sNounList))
            elif which == "<NOUN-PLURAL>":
                words.insert(pos,choice(pluralNounList))
            elif which == "<ADJECTIVE>":
                words.insert(pos,choice(adjectiveList))
            elif which == "<NAME>":
                words.insert(pos,choice(nameList))
            elif which == "<VERB-PAST>":
                words.insert(pos,choice(pastVerbList))
            elif which == "<VERB-PRESENT>":
                words.insert(pos,choice(presentVerbList))
            elif which == "<VERB-PRESENT-PROGRESSIVE>":
                words.insert(pos,choice(presentProgressiveVerbList))
            elif which == "<ADVERB>":
                words.insert(pos,choice(adverbList))
            elif which == "<JOB>":
                words.insert(pos,choice(jobList))                                                                                                                      
    return " ".join(words)
#Test Cases   
print "========================"
print "\nMAD LIBS!!!\n"
print "========================\n"
story1 = """My <ADJECTIVE> <NOUN-SINGULAR> called <NAME> works as a <JOB> .\n
This morning it <VERB-PAST> <ADVERB> with\n 
 <NOUN-PLURAL> while <VERB-PRESENT-PROGRESSIVE> <ADVERB> ."""
print "================================================================================"

for x in range(0,3):
    adjectiveList.insert(x,raw_input("Enter adjective #" + str(x+1) + ": " ))
for x in range(0,3):
    sNounList.insert(x,raw_input("Enter singular noun #" + str(x+1) + ": " ))
for x in range(0,3):
    nameList.insert(x,raw_input("Enter name #" + str(x+1) + ": " ))
for x in range(0,3):
    jobList.insert(x,raw_input("Enter job #" + str(x+1) + ": " ))
for x in range(0,3):
    pastVerbList.insert(x,raw_input("Enter past-tense verb #" + str(x+1) + ": " ))
for x in range(0,3):
    adverbList.insert(x,raw_input("Enter adverb #" + str(x+1) + ": " ))
for x in range(0,3):
    pluralNounList.insert(x,raw_input("Enter plural noun #" + str(x+1) + ": " ))
for x in range(0,3):
    presentProgressiveVerbList.insert(x,raw_input("Enter present-progressive verb #" + str(x+1) + ": " ))
for x in range(0,3):
    presentVerbList.insert(x,raw_input("Enter present-tense verb #" + str(x+1) + ": " ))

print """Story #1 : \nMy <ADJECTIVE> <NOUN-SINGULAR> called <NAME>\n
         works as a <JOB> . This morning it <VERB-PAST> <ADVERB>\n
         with <NOUN-PLURAL> while <VERB-PRESENT-PROGRESSIVE> <ADVERB> .'"""
print "================================================================================"
print "Three madlibs with story 1:"
print "================================================================================"
print madlibify(story1)
print "--------------------------------------------------------------------------------"
print madlibify(story1)
print "--------------------------------------------------------------------------------"
print madlibify(story1)
print "--------------------------------------------------------------------------------"

story2 = """The <NOUN-PLURAL> yelled at the <NOUN-SINGULAR> called <NAME> .\n
It then used its <ADJECTIVE> arm to <VERB-PRESENT> them <ADVERB> .\n
It then became a <JOB> and began <VERB-PRESENT-PROGRESSIVE> a \n 
 <NOUN-SINGULAR> . Afterwards it <VERB-PAST> into the sunset."""

print "================================================================================"
print "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"
print "================================================================================"
print """story2 = 'The <NOUN-PLURAL> yelled at the <NOUN-SINGULAR>\n
         called <NAME> . It then used its <ADJECTIVE> arm to <VERB-PRESENT>\n
         them <ADVERB> . It then became a <JOB> and began\n
         <VERB-PRESENT-PROGRESSIVE> a <NOUN-SINGULAR> . Afterwards it\n 
         <VERB-PAST> into the sunset.'"""
print "================================================================================"
print "Three madlibs with story 2:"
print "================================================================================"
print madlibify(story2)
print "--------------------------------------------------------------------------------"
print madlibify(story2)
print "--------------------------------------------------------------------------------"
print madlibify(story2)
print "--------------------------------------------------------------------------------"

