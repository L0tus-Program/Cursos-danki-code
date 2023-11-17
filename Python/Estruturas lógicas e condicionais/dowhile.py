"""
do while

Código para adivinha um numero

"""

palpite = 0
numero = 9

while palpite != numero:
    print("Qual o numero correto: ")
    palpite = int(input())
    if palpite == numero:
        print("Parabéns voce acertou")
    else:
        print("Voce errou")
