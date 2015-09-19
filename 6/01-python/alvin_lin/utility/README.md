Python Speech Recognition Utility
========
Dependencies:
<code>
  sudo apt-get install python-pyaudio flac multimedia-jack
  sudo adduser $(whoami) audio
  sudo pip install pyttsx SpeechRecognition
</code>

Setup:
  - (Optional?) add <code>"pulseaudio --kill"</code> and <code>"jack_control start"</code> to .bashrc or startup script
  - This utility requires a working Internet connection.
