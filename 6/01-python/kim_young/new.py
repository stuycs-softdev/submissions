a = []
for i in range(100):
    a.append(i)
    print("Who Likes Semicolons???????????")

b = 99
while b > -100:
    print(a[b])
    b-=1;

for i in range(len(a)):
    c = []
    for j in range(i):
        c.append(i)
    a[i] = c

for i in a:
    print i
