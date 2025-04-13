# 🤖 Minecraft Agent AI - Bot Autônomo para Minecraft

Um bot inteligente para Minecraft que usa Mineflayer e Pathfinding para interagir com os players, minerar recursos e interagir com o mundo.

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18 ou superior)
- Servidor Minecraft Java Edition (local ou online)

### Instalação
```bash
git clone https://github.com/IgorLucassDev/minecraft-agent-ai.git
cd minecraft-agent-ai
npm install
```

### Configuração
Edite o arquivo main.js para definir:

* host: IP do servidor (use 'localhost' para singleplayer)

* username: Nome do bot no jogo

* version: Versão do Minecraft (ex: '1.20.1')

### Configurando Gemini

* Renomeie o arquivo *.env-exemple para .env e adicione sua API_KEY do Gemini

Para usar a API do Gemini, obtenha uma chave no [Google AI Studio](https://ai.google.dev/gemini-api/docs/api-key).

### Execução
```bash
node main.js
```
