##ShellLocker

ShellLocker is a Python3 script that provides an extra layer of security on your terminal.

To install:

```
git clone https://github.com/elc1798/shell-locker ~/.shelllocker
```

### Add to .zshrc or .bashrc:

At some point in your .bashrc or .zshrc file, put:

```
~/.shelllocker/main.py
```

### Aliasing

If you are using `.bash_aliases` then put the following in `.bash_aliases`. If you are only using `.bashrc` or `.zshrc`, then put the following in your respective `.rc` file:

```
alias shellLock='python3 ~/.shelllocker/main.py'
```

It is also recommended that you do:

```
chmod +x ~/.shelllocker/main.py
```

### Setting Up:

Run `python3 ~/.shelllocker/main.py --setup`

Run `python3 ~/.shelllocker/main.py --help` for more options

(Note if you are using the `shellLock` alias, you can do `shellLock -h` instead)

### Issues:

You should edit main.py and change the first line of the program to

```
#!/path/to/python3/executable
```

If you do not know the path of your python3 executable, run

```
type python3
```

in your Terminal. If the above command does not return anything or gives an
error, you should install Python3 and then run the setup and change the lines.

