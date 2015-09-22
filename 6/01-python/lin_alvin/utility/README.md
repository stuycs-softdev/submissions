Python Speech Recognition Utility
========
Dependencies:
```
  sudo apt-get install python-pyaudio flac multimedia-jack
  sudo adduser $(whoami) audio
  sudo pip install pyttsx SpeechRecognition
```

Setup:
  - (Optional?) add ```"pulseaudio --kill"``` and ```"jack_control start"``` to ```.bashrc``` or startup script
  - This utility requires a working Internet connection.
