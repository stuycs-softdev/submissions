# This is a math expression parser that I intended to write within one hour.
# However, writing a math parser is harder than I thought,
# so it took me over three hours.
# After looking up how to actually make a math parser, I realized how bad
# mine is, so, to anyone reading this, my apologies for the ugly code.
digits = ['1','2','3','4','5','6','7','8','9','0','.']

def isValid(e):
	i = 0
	while i < len(e):
		if e[i] in digits:
			i = i+1
			continue
		if e[i] in ['+','*','/','^']:
			if (
				i > 0 and (e[i-1] in digits or e[i-1] == ')') and
				i < len(e)-1 and (e[i+1] in digits or e[i+1] == '(')
				):
				i = i+1
				continue
		# '-' can be used for negative numbers or subtraction
		if e[i] == '-':
			if (
				(i == 0 and
				i < len(e)-1 and (e[i+1] in digits or e[i+1] == '(')) or
				(i > 0 and e[i-1] == '(' and
				i < len(e)-1 and (e[i+1] in digits or e[i+1] == '(')) or
				(i > 0 and (e[i-1] in digits or e[i-1] == ')') and
				i < len(e)-1 and (e[i+1] in digits or e[i+1] == '('))
				):
				i = i+1
				continue
		if e[i] == '(':
			if i < len(e)-1:
				i = i+1
				continue
		if e[i] == ')':
			if i > 0:
				i = i+1
				continue
		print("Whoops, invalid expression!")
		return False
	i = 0
	while i < len(e):
		if e[i] in digits:
			pointCount = 0
			j = i
			while j < len(e):
				if e[j] in ['+','-','*','/','^','(',')']:
					i = j
					break
				if e[j] == '.':
					pointCount = pointCount+1
				j = j+1
			if pointCount > 1:
				print("Whoops, invalid expression!")
				return False
		i = i+1
	return True

def findClosing(e,i):
	# find the closing parenthesis in e for the parenthesis at index i
	pos = i
	counter = 1
	while counter > 0:
		pos = pos+1
		if pos == len(e):
			return -1
		if e[pos] == '(':
			counter = counter+1
		elif e[pos] == ')':
			counter = counter-1
	return pos

def endOfNum(e,i):
	# find the ending position in e of the number starting at position i
	pos = i
	while pos < len(e)-1 and e[pos+1] in digits:
		pos = pos+1
	return pos

def evaluate(e):
	# the first number could be negative and not have parentheses around it
	if e[0] == '-':
		e = '0' + e
	lookup = {}
	index = 128
	# replace parenthetical expressions
	i = 0
	while i < len(e):
		if e[i] == '(':
			if findClosing(e,i) > -1:
				lookup[chr(index)] = evaluate(e[i+1:findClosing(e,i)])
				e = e.replace('('+e[i+1:findClosing(e,i)]+')', chr(index))
				index = index+1
			else:
				return "Whoops, missing closing parenthesis! (position %d)" % i
		i = i+1
	# replace numbers
	i = 0
	while i < len(e):
		if e[i] in digits:
			if e[i:endOfNum(e,i)+1].isdigit():
				lookup[chr(index)] = int(e[i:endOfNum(e,i)+1])
			else:
				lookup[chr(index)] = float(e[i:endOfNum(e,i)+1])
			e = e.replace(e[i:endOfNum(e,i)+1], chr(index), 1)
			index = index+1
		i = i+1
	# evaluate exponents
	i = 0
	while i < len(e):
		if e[i] == '^':
			lookup[chr(index)] = pow(lookup[e[i-1]], lookup[e[i+1]])
			e = e.replace(e[i-1:i+2], chr(index))
			index = index+1
			i = i-1
		i = i+1
	# evaluate multiplication and division
	i = 0
	while i < len(e):
		if e[i] == '*':
			lookup[chr(index)] = lookup[e[i-1]] * lookup[e[i+1]]
			e = e.replace(e[i-1:i+2], chr(index))
			index = index+1
			i = i-1
		elif e[i] == '/':
			if lookup[e[i+1]] == 0:
				return "Whoops, division by 0!"
			lookup[chr(index)] = lookup[e[i-1]] / lookup[e[i+1]]
			e = e.replace(e[i-1:i+2], chr(index))
			index = index+1
			i = i-1
		i = i+1
	# evaluate addition and subtraction
	i = 0
	while i < len(e):
		if e[i] == '+':
			lookup[chr(index)] = lookup[e[i-1]] + lookup[e[i+1]]
			e = e.replace(e[i-1:i+2], chr(index))
			index = index+1
			i = i-1
		elif e[i] == '-':
			lookup[chr(index)] = lookup[e[i-1]] - lookup[e[i+1]]
			e = e.replace(e[i-1:i+2], chr(index))
			index = index+1
			i = i-1
		i = i+1
	return lookup[chr(index-1)]

on = True
print("Allowed operations: +,-,*,/,^")
while on:
	expression = raw_input("Please enter a mathematical expression:")
	if isValid(expression):
		print(evaluate(expression))
	gotIt = False
	while not gotIt:
		repeat = raw_input("Would you like to have another expression evaluated?")
		if repeat in ["No","Nah","Nope","N","no","nah","nope","n"]:
			on = False
			gotIt = True;
		elif repeat in ["Yeah","Yes","Yas","Sure","Y","yeah","yes","yas","sure","y"]:
			gotIt = True;
		else:
			print("Sorry, I didn't quite understand that.")
