"""
do while

código para adivinhar um numero
"""

palpite = 5
numero = 9


# while bool(palpite) is True:
while True:  # execução do while sem verificação
    print("Adivinhe qual o número correto : ")
    palpite = int(input())
    if palpite == numero:
        print("Parabéns! Voce acertou")
        break
    else:
        print("Voce errou")
else:
    print("Erro na aplicação")
    print(bool(palpite))
