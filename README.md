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

Baixando a máquina virtual do mongo através do docker

### `docker pull mongo`

Subindo o mongodb 

### `sudo docker run --name mongodb -p 27017:27017 -d mongo`

Instalar o robomongo 3t como gerenciador do mongodb

Instalando a dependência do mongodb na aplicação

### `npm install mongoose`

Instalando biblioteca para pepel de diretório para models

### `npm install require-dir`
