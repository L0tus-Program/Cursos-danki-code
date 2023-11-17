"""
Como achar o fatorial de um número

"""

fatorial = 1


numero = int(input("Insira um número : "))
if numero < 0:
    print("Não existe fatorial de numero negativo")
elif numero == 0:
    print("Fatorial de 0 é 1")
else:
    for x in range(1, numero+1):
        fatorial *= x

    print(f"O fatorial de {numero} é {fatorial}")
