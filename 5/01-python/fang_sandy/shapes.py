#remade the shapes hw from AP in python

def line(c,n):
	s = ""
	for i in range(n):
		s += c;
	return s

def box(c,rs,cs):
	s = ""
	for i in range(rs):
		s += line(c,cs)
		if( (i+1) != rs ):
			s += '\n'
	return s

def tri1(c,h):
	s = ""
	for i in range(1,h+1):
		s += line(c, i)
		if ( i != h ):
			s += '\n'
	return s

def tri2(c,h):
	s = ""
	for i in range(1,h+1):
		s += line(' ', h-i)
		s += line(c, i)
		if ( i != h ):
			s += '\n'
	return s

def tri3(c,h):
	s = ""
	for i in range(1,h+1):
		s += line(' ',h-i)
		s += line(c,(2*i)-1)
		s += line(' ',h-i)
		if ( i != h ):
			s += '\n'
	return s

def diamond(c,h):
	s = ""
	top = (h/2)+1
	bot = h - top
	for i in range(1,top+1):
		s += line(' ',top-i)
	  	s += line(c, (2*i)-1)
	  	s += line(' ',top-i)
	  	s += '\n'
	for i in range(1,bot+1):
	  s += line(' ',i)
	  s += line(c,h-(2*i))
	  s += line(' ',i)
	  if ( i != bot ):
		s += '\n'
	return s;

print diamond('*',5)