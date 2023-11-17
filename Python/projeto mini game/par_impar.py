"""
Como descobrir se um numero é impar ou par
"""

print(30 * "-")

numero = int(input("Insira um numero para saber se é par ou impar :"))

if (numero % 2) == 0:
    print(f'{numero} é par')
else:
    print(f'{numero} é impar')
