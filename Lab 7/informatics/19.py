from math import *

x = int(input())

def count_divisors(x):
    cnt = 0
    for i in range(1, int(sqrt(x)) + 1):
        if x % i == 0:
            if i != x // i:
                cnt += 2
            else:
                cnt += 1
                
    return cnt

print(count_divisors(x))