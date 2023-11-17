"""
Descobrir se um número é primo

"""

print(30*"-")
numero = int(input("Insira um número"))

if numero > 1:
    for x in range(2, numero):
        if (numero % x) == 0:
            print(f"Esse numero não é primo")
