
                               EXPLICAÇÃO DE ALGUNS ARQUIVOS  CRIADOS

1 - O arquivo manifest.json
Serve par dizer ao navegador que, esta pagina pode funcionar como aplicação instalada no telefone ou computador. Ele transforma o site numa PAW (Progressive Web App) 
O que ele permite:

#O utilizador pode instalar a App
#A App abre em tela cheia
#Pode ter icones proprios
#Pode ter nome proprio
#Pode funcionar Offline (com o sw.js)
#Pode aparecer um app real

2 - O arquivo sw.js(Service Worker)
É um script que corre em segundo plano no navegadro, ele controla

#Cache
#Pedidos de rede
#Funcionamento Offline

2.1 - Ele tem 3 eventos principais

#Install - quando o app é isntalada
#Activate - limpa caches antigos
#Fetch - intercepta pedidos



