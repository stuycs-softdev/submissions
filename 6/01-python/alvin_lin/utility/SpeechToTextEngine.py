#!/usr/bin/python

import speech_recognition

class SpeechToTextEngine():
  def __init__(self):
    self.recognizer = speech_recognition.Recognizer()

  def listen(self):
    audio = None
    with speech_recognition.Microphone() as source:
      self.recognizer.adjust_for_ambient_noise(source)
      audio = self.recognizer.listen(source)

    try:
      return self.recognizer.recognize(audio).lower()
    except LookupError:
      return "Error"

def main():
  engine = SpeechToTextEngine()

  speech = engine.listen()
  while speech != "exit" and speech != "quit":
    print speech
    speech = engine.listen()

if __name__ == "__main__":
  main()
