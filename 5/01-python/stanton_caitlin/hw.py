loop = True
choice = 0
 
while loop == True:
    
    print "Welcome to Caitlin's Calculator"
 
    print "your options are:"
    print " "
    print "1) Addition"
    print "2) Subtraction"
    print "3) Multiplication"
    print "4) Division"
    print "5) Modulo"
    print "6) Exponents"
    print "7) Exit Caitlin's Calculator"
    print " "
   
    choice = int(raw_input("Choose your option: "))
    if choice == 1:
        add1 = input("Add this: ")
        add2 = input("to this: ")
        print add1, "+", add2, "=", add1 + add2
    elif choice == 2:
        sub2 = input("Subtract this: ")
        sub1 = input("from this: ")
        print sub1, "-", sub2, "=", sub1 - sub2
    elif choice == 3:
        mul1 = input("Multiply this: ")
        mul2 = input("with this: ")
        print mul1, "*", mul2, "=", mul1 * mul2
    elif choice == 4:
        div1 = input("Divide this: ")
        div2 = input("by this: ")
        print div1, "/", div2, "=", div1 / div2
    elif choice == 5:
	    mod1 = input("Modulo this: ")
	    mod2 = input("by this: ")
	    print mod1, "/", mod2, "=", mod1 % mod2
    elif choice == 6:
	    exp1 = input("Raise this: ")
	    exp2 = input("by this: ")
	    print exp1, "^", exp2, "=", exp1**exp2
    elif choice == 7:
        loop = False
	
print "Thanks for using Caitlin's Calculator!"