# CursoNodeJS

## Tecnologias

- Node
- Npm
- Express
- Nodemon
 
Criando o package.json:

### `npm init -y`

Instalando biblioteca para construir aplicações web

### `npm install express`

Instalando biblioteca para ambiente de desenvolvimento(-D) para automatizar mudanças no código

### `npm install -D nodemon`

Rodar a aplicação pelo scripts configurado no package.json

### `npm run dev`

Erro ao executar npm run dev:**[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch '/home/silbert/Projetos/Node/node-api'**. Executar comando abaixo para resolver 

### `sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p`
