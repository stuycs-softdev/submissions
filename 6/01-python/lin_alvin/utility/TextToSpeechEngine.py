#!/usr/bin/python

import pyttsx
import sys

SPEECH_RATE = 175
SPEECH_VOICE = "english-wmids"

class TextToSpeechEngine():
  def __init__(self):
    self.engine = pyttsx.init()
    self.engine.setProperty("rate", SPEECH_RATE)
    self.engine.setProperty("voice", SPEECH_VOICE)

  def say(self, text):
    self.engine.say(text)
    self.engine.runAndWait()

def main():
  tts = TextToSpeechEngine()
  if len(sys.argv) != 1:
    tts.say(" ".join(sys.argv[1:]))

if __name__ == "__main__":
  main()
