digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
# characters that can appear in a number
biOperators = {'+':1, '-':1, '*':2, '/':2, '%':2, '^':3}
# allowed binary operators and their respective precedences
rightAssOperators = {'^'}
# operators that are right-associative (as opposed to left-associative)
unOperators = {'!'}
# allowed unary operators
leftParens = {'(':1, '[':2, '{':3}
# allowed variations of the '(' character and their id's
rightParens = {')':1, ']':2, '}':3}
# allowed variations of the ')' character and their id's

def updateNegatives(e):
	# Replace all instances of "-x" with "0-x"
	if e[0] == '-':
		e = '0' + e
	pos = 0
	while pos < len(e) - 1:
		if e[pos] in leftParens and e[pos+1] == '-':
			e = e[:pos+1] + '0' + e[pos+1:]
			pos = pos + 1
		pos = pos + 1
	return e

def operate(operator, operand1, operand2 = None):
	if operator == '+':
		return operand1 + operand2
	elif operator == '-':
		return operand1 - operand2
	elif operator == '*':
		return operand1 * operand2
	elif operator == '/':
		if operand2 == 0:
			return 'Error: Division by 0'
		return operand1 / operand2
	elif operator == '%':
		return operand1 % operand2
	elif operator == '^':
		if operand1 < 0 and operand2 % 1 != 0:
			return 'Error: Raising negaitve number to a fractional power'
		try:
			return pow(operand1, operand2)
		except OverflowError:
			return 'Error: Result too large'
	elif operator == '!':
		if operand1 < 0 or operand1 % 1 != 0:
			return 'Error: Invalid use of factorial'
		if operand1 > 100000:
			return 'Error: Result too large'
		result = 1
		while operand1 > 1:
			result = result * operand1
			operand1 = operand1 - 1
		return result

def removeTopOperator(outputQueue, operatorStack):
	operatorHere = operatorStack.pop()
	# Make sure that the binary operator can be applied to the output.
	if len(outputQueue) < 2:
		return 'Error: Not enough operands for %s' % operatorHere
	# If the operator being removed is right-associative, remove all right-
	# associative operators with the same precedence as it before simplifying
	# the output queue.
	if operatorHere in rightAssOperators:
		# Create a new stack of all right-associative operators with the same
		# precedences as the one being removed.
		rightAssOpStack = [operatorHere]
		while len(operatorStack) > 0 and operatorStack[-1] in biOperators and (
			biOperators[operatorStack[-1]] == biOperators[operatorHere] and
			operatorStack[-1] in rightAssOperators
			):
			rightAssOpStack.append(operatorStack.pop())
		# Apply the operators on the right-associative operator stack to numbers
		# in the output queue.
		while len(rightAssOpStack) > 0:
			outputQueue[-1] = operate(
				rightAssOpStack.pop(), outputQueue[-2], outputQueue.pop()
				)
			# If operate() returned an error, return that same error from here.
			if isinstance(outputQueue[-1], basestring):
				return outputQueue[-1]
	# If the operator being removed is left-associative, immediately apply it
	# to the last two numbers in the output queue.
	else:
		outputQueue[-1] = operate(
			operatorHere, outputQueue[-2], outputQueue.pop()
			)
		# If operate() returned an error, return that same error from here.
		if isinstance(outputQueue[-1], basestring):
			return outputQueue[-1]
	# If there were no errors, return None.
	return None

def parse(e):
	e = updateNegatives(e)
	outputQueue = [] # queue containing the results of each operation
	operatorStack = [] # stack containing unused operators (in order of precedence)
	# The operatorStack can only contain binary operators and opening parentheses,
	# as unary operators and closing parentheses are instantly used to update the
	# output queue.
	pos = 0
	# Read each character of the expression one by one.
	while pos < len(e):
		if e[pos] in digits:
			startPos = pos # starting position in e of the number
			numDecimalPoints = 0 # number of decimal points in the number
			pos = pos + 1
			# Move to the end of the number.
			while pos < len(e) and e[pos] in digits:
				# Make sure that the number has either zero or one decimal points.
				if e[pos] == '.':
					numDecimalPoints = numDecimalPoints + 1
					if numDecimalPoints > 1:
						return 'Error: Found second decimal point after %s' % e[startPos:pos]
				pos = pos + 1
			# Add the number to the output queue.
			if numDecimalPoints == 0:
				outputQueue.append(int(e[startPos:pos]))
			else:
				outputQueue.append(float(e[startPos:pos]))
			continue
		if e[pos] in biOperators:
			# If this operator is right-associative, remove all operators from the stack
			# with a precedence strictly greater than that of this one.
			# If this operator is left-associative, remove all operators from the stack
			# with a precedence greater than or equal to that of this one.
			while len(operatorStack) > 0 and operatorStack[-1] in biOperators and (
				biOperators[operatorStack[-1]] > biOperators[e[pos]] or
				(e[pos] not in rightAssOperators and
				biOperators[operatorStack[-1]] == biOperators[e[pos]])
				):
				error = removeTopOperator(outputQueue, operatorStack)
				if error != None:
					return error
			operatorStack.append(e[pos])
			pos = pos + 1
			continue
		if e[pos] in unOperators:
			# Make sure that the unary operator can be applied to the output.
			if len(outputQueue) < 1:
				return 'Error: Not enough operands for %s' % e[pos]
			outputQueue[-1] = operate(
				e[pos], outputQueue[-1]
				)
			# If operate() returned an error, parse() should return that same error.
			if isinstance(outputQueue[-1], basestring):
				return outputQueue[-1]
			pos = pos + 1
			continue
		if e[pos] in leftParens:
			operatorStack.append(e[pos])
			pos = pos + 1
			continue
		if e[pos] in rightParens:
			# Remove operators from the operator stack until the opening parenthesis
			# that matches this one is reached.
			while len(operatorStack) > 0 and operatorStack[-1] not in leftParens:
				error = removeTopOperator(outputQueue, operatorStack)
				if error != None:
					return error
			if len(operatorStack) == 0:
				return ('Error: Missing opening symbol for the %s at position %d' %
					(e[pos], pos))
			if rightParens[e[pos]] != leftParens[operatorStack[-1]]:
				return ('Error: Closing %s does not match the opening %s' %
					(e[pos], operatorStack[-1]))
			operatorStack.pop()
			pos = pos + 1
			continue
		return 'Error: Invalid character at position %d' % pos
	# When there are no more characters to read, empty the operator stack.
	while len(operatorStack) > 0:
		# Make sure there are no unclosed parentheses in the stack.
		if operatorStack[-1] in leftParens:
			return 'Error: Missing closing parenthesis'
		error = removeTopOperator(outputQueue, operatorStack)
		if error != None:
			return error
	if len(outputQueue) > 1:
		return 'Error: Missing operator'
	return outputQueue[0]
