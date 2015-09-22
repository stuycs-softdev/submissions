#!/usr/bin/python

class HelloWorlder():
  def __init__(self):
    print 'Initialized some stuff'
    
  def do_some_stuff(self):
    print 'Hello World'

def main():
  q = HelloWorlder()
  q.do_some_stuff()
    
if __name__ == '__main__':
  main()