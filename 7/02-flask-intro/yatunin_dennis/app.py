from flask import Flask, render_template

app = Flask(__name__)

html = '''
<script>
function magic() {
	var expression = document.getElementById("user_input").value;
	document.getElementById("link").href = "/" + expression;
}
</script>
<h1>Math Parser</h1>
<hr>
Please enter a valid mathematical expression:
<input type="text" id="user_input" value="%s" onchange="magic()">
<button><a id="link" href="/%s">Evaluate</a></button>
'''
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
	if not isValid(e):
		return ("Whoops, invalid expression! (Remember that the only allowed only" +
			"allowed operations are  +,-,*,/, and ^")
	# the first number could be negative and not have parentheses around it
	if e[0] == '-':
		e = '0' + e
	lookup = {}
	index = 0
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

@app.route("/")
@app.route("/home")
def home():
	return html % ("0","0")

@app.route("/<e>")
def result(e):
	return html % (e,e) + "<h2>%s</h2>" % str(evaluate(e))

if __name__ == "__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
