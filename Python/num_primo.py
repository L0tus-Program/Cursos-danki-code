
"""
Descobrir se um numero é primo


Divisivel por 1 e por ele mesmo
Numero natural
Maior do que 1
"""


print(30*"_")

numero = int(input("Insira um numero para descobrir se o mesmo é primo: "))


if numero>1:
    for x in range(2,numero):
        