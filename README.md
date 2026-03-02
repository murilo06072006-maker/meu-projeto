============================================================
MEU-PROJETO  |  LAYOUT RESPONSIVO (MOBILE-FIRST) + GIT/GITHUB
=============================================================

## VISÃO GERAL

Este projeto é um exercício de HTML + CSS com foco em:

* Estrutura semântica (header, nav, main, aside, footer)
* Layout com Flexbox
* Responsividade Mobile-First com media queries
* Boas práticas de repositório (Git + .gitignore)
* Publicação no GitHub (e opcionalmente GitHub Pages)

A proposta é entender o “porquê” por trás de cada parte, e não apenas fazer funcionar.

## COMO ABRIR O PROJETO

Opção 1 (mais simples):

1. Abra o arquivo index.html no navegador (duplo clique).

Opção 2 (melhor para estudar):

1. Abra a pasta do projeto no VS Code.
2. Use a extensão “Live Server”.
3. Clique com o botão direito no index.html e escolha “Open with Live Server”.
4. A página atualiza automaticamente a cada salvamento.

## ESTRUTURA DE PASTAS

meu-projeto
index.html
css
style.css
.gitignore

Observação:
A pasta “css” existe para separar estilo (CSS) da estrutura (HTML). Isso deixa o projeto mais organizado e escalável.

## O QUE O SITE TEM (ESTRUTURA HTML)

HEADER:

* Área do topo do site.
* Normalmente contém identidade do site e navegação principal.

NAV:

* Área de navegação (links principais).
* Ajuda acessibilidade e organização.

CONTEÚDO CENTRAL:

* Um container principal (“conteudo”) agrupa:
  ASIDE: área lateral (menu/links de apoio)
  MAIN: conteúdo principal da página

FOOTER:

* Rodapé com informações finais (ex.: copyright).

## COMO O LAYOUT FUNCIONA (IDEIA DO CSS)

Este projeto usa Flexbox como motor de layout.

1. O BODY é um flex container em coluna:

* Header em cima
* Conteúdo no meio
* Footer em baixo
* O conteúdo do meio cresce para ocupar o espaço disponível

2. O container “conteudo” também é flex:

* No mobile: direção em coluna (aside em cima, main embaixo)
* No tablet/desktop: direção em linha (aside à esquerda, main à direita)

3. O MAIN usa “flex: 1”:

* Isso faz o main ocupar automaticamente o espaço que sobra ao lado do aside.

## RESPONSIVIDADE (BREAKPOINTS)

O projeto é Mobile-First. Isso significa:

* As regras base do CSS são para telas pequenas.
* As melhorias são aplicadas quando a tela cresce.

Breakpoints usados:

* A partir de 768px: layout vira duas colunas (aside ao lado do main)
* A partir de 1024px: o aside fica mais largo (melhor leitura e navegação)
* A partir de 1440px: garante largura total (comportamento consistente)

Como testar:

* No Chrome: F12 > ícone de dispositivo (modo responsivo)
* Mude a largura da tela e observe as mudanças nos breakpoints

## POR QUE EXISTE UM .GITIGNORE

Alguns editores/IDE criam pastas de cache e índices (ex.: .vs).
Esses arquivos:

* não são parte do seu código
* mudam o tempo todo
* podem estar travados pelo sistema (Permission denied)
* poluem o repositório

O .gitignore impede que o Git tente rastrear essas pastas/arquivos.

## GIT: FLUXO BÁSICO USADO NESTE PROJETO

Conceitos:

* Git é o controle de versão local (histórico do projeto).
* GitHub é o repositório remoto (na nuvem).

Comandos essenciais (executar na pasta do projeto):

git init
git add .
git commit -m "Projeto inicial: HTML + CSS (mobile-first)"

Conectar com o GitHub (exemplo):
git branch -M main
git remote add origin [https://github.com/SEU_USUARIO/SEU_REPO.git](https://github.com/SEU_USUARIO/SEU_REPO.git)
git push -u origin main

## PUBLICAR COMO SITE (GITHUB PAGES) - OPCIONAL

1. No repositório do GitHub: Settings
2. Pages
3. Deploy from a branch
4. Branch: main  |  Folder: /(root)
5. Salvar

O GitHub gera um link público do site.

## ESTUDO GUIADO (COMO APRENDER MAIS COM ESTE PROJETO)

1. Entenda a estrutura:

* Por que header/nav?
* Por que main/aside?
* O que a class “conteudo” permite no CSS?

2. Entenda Flexbox:

* O que muda quando você troca flex-direction de column para row?
* Por que flex: 1 no main “resolve” o tamanho automaticamente?

3. Entenda media queries:

* Por que min-width combina com mobile-first?
* Em que largura o layout começa a “pedir” duas colunas?

4. Entenda Git:

* git status mostra o que foi alterado
* git add escolhe o que entra no commit
* git commit salva um ponto na história
* git push envia para o GitHub