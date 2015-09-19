#!/usr/bin/python

import os
import time

from SpeechToTextEngine import SpeechToTextEngine
from TextToSpeechEngine import TextToSpeechEngine

"""
This Python executable is for alpha-laptop.
The trigger word is alpha.
"""

TRIGGER_WORD = "alpha"

class VoiceControl():
  def __init__(self):
    self.stt = SpeechToTextEngine()
    self.tts = TextToSpeechEngine()

  def doAction(self, input):
    if input.find("studio") != -1:
      self.tts.say("starting android studio")
      os.system("studio.sh &")
    elif input.find("brackets") != -1:
      self.tts.say("starting brackets")
      os.system("brackets &")
    elif input.find("test") != -1:
      self.tts.say("voice command utility functioning")
    else:
      self.tts.say("unrecognized action")

  def run(self):
    input = self.stt.listen()
    while True:
      print "Received: " + input
      if input.find(TRIGGER_WORD) != -1:
        self.doAction(input)
      input = self.stt.listen()

def main():
  control = VoiceControl()
  control.run()

if __name__ == "__main__":
  main()
