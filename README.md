# Front in Maceió 2012

Esse é o código-fonte do site do evento [Front in Maceió 2002](http://frontinmaceio.com.br)!
Fique à vontade para consertar algo que esteja errado =]

Toda estrutura é baseada no projeto [Conf Boilerplate](http://github.com/braziljs/conf-boilerplate).

---

* [Como funciona?](#como-funciona)
* [Estrutura](#estrutura)
* [Primeiros passos](#primeiros-passos)
* [Customização](#customiza%C3%A7%C3%A3o)
* [Deploy](#deploy)

## Como funciona?

Nós usamos o [DocPad](https://github.com/bevry/docpad), um static generator em NodeJS, para criar esse modelo extremamente simples de customizar. Além disso, a hospedagem é gratuita via [Github Pages](http://pages.github.com) e você ainda pode usar seu próprio domínio *(mais informações sobre isso em [Deploy](#dom%C3%ADnio-personalizado))*.

Por padrão, definimos as seguintes seções:

* *Location* - Para exibir a localização do evento através do Google Maps.
* *Speakers* - Para listar informações sobre os palestrantes.
* *Lightning* - Para listar informações sobre as lightning talks.
* *Schedule* - Para mostrar a agenda do evento.
* *Workshops* - Para mostrar os workshops oferecidos pelo evento.
* *Partners* - Para que você possa fazer propaganda dos seus apoiadores.

*OBS 1: Não há integração com nenhum sistema de inscrição e/ou pagamento. Por conta disso, indicamos o [Eventick](http://eventick.com.br/).*

*OBS 2: Por enquanto ainda não conseguimos desenvolver uma solução altamente automatizada e customizável para formulários de contato. Por conta disso, indicamos o [Wufoo](http://wufoo.com/).*

## Estrutura

A estrutura básica do projeto se dá na seguinte forma:

<pre>
.
|-- out/
|-- src/
|   |-- documents
|   |-- files
|   |-- layouts
|   |-- partials
|-- docpad.cson
|-- package.json
`-- publish.sh
</pre>

### out/

É onde os arquivos gerados são armazenados, uma vez que o DocPad tenha sido rodado. Porém, esse diretório se torna desnecessário no versionamento, por isso está ignorado ([.gitignore](https://github.com/braziljs/conf-boilerplate/blob/master/.gitignore)).

### [src/documents](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents)

Contém o arquivo responsável por importar todas as seções da aplicação.

### [src/files](https://github.com/braziljs/conf-boilerplate/tree/master/src/files)

Possui as imagens, arquivos CSS, JS e o [CNAME](https://github.com/braziljs/conf-boilerplate/blob/master/src/files/CNAME) que indica o domínio personalizado que deve ser usado *(mais informações sobre como usar seu domínio próprio em [Deploy](#dom%C3%ADnio-personalizado))*.

### [src/layouts](https://github.com/braziljs/conf-boilerplate/tree/master/src/layouts)

Contém o template padrão da aplicação.

### [src/partials](https://github.com/braziljs/conf-boilerplate/tree/master/src/partials)

São blocos de código utilizados para gerar a página principal do site ([index.html](https://github.com/braziljs/conf-boilerplate/blob/master/src/documents/index.html.eco)).

### [docpad.cson](https://github.com/braziljs/conf-boilerplate/blob/master/docpad.cson)

Armazena de forma fácil a maior parte das configurações da aplicação.

### [package.json](https://github.com/braziljs/conf-boilerplate/blob/master/package.json)

Lista as dependências de módulos do NodeJS.

### [publish.sh](https://github.com/braziljs/conf-boilerplate/blob/master/publish.sh)

Shell Script responsável pela publicação do site via [Github Pages](http://pages.github.com).

## Primeiros passos

1. Instale o [Git](http://git-scm.com/downloads) e o [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

2. Abra o terminal e baixe o [DocPad](https://github.com/bevry/docpad) através do comando:

    sudo npm install -fg docpad@6.8

3. Instale o [DocPad](https://github.com/bevry/docpad):

    docpad install

4. Agora clone o projeto:

    git clone git@github.com:braziljs/front-in-maceio.git

5. Depois vá para pasta do projeto:

    cd front-in-maceio

6. Instale as dependências:

    sudo npm install .

7. E finalmente rode:

    docpad run

Agora você irá ver o site rodando em `localhost:9778` :D

## Customização

Nós preparamos algo altamente customizável para você, portanto para maioria das alterações do projeto basta ir até o `docpad.cson` e alterar o valor das variáveis.

Caso deseja alterar o CSS, utilize o arquivo `css/main.less` e não esqueça de compilar antes de subir, para maiores informações acesse [lesscss.org](http://lesscss.org/).

### Informações básicas sobre a conferência

Quer alterar o nome, data, endereço, cidade ou preço do evento? É só mudar.

```
conf:
  name: "Front in Maceió 2012"
  description: "O Front in Maceió 2012 tem foco em desenvolvimento Front-end e o evento acontecerá em Maceió no dia 27 de Outubro no auditório principal do CESMAC"
  date: "27 de out"
  studentprice: "R$ 50,00"
  professionalprice: "R$ 65,00"
  address: "Rua Cônego Machado, S/N, Farol"
  venue: "CESMAC - Centro de Estudos Superiores de Maceió"
  city: "Maceió"
  state: "AL"
```

### Informações básicas sobre o site

Quer mudar a imagem de capa, código do Google Analytics ou o favicon? Vá em frente!

```
site:
  url: "http://frontinmaceio.com.br"
  favicon: "http://frontinmaceio.com.br/favicon.ico"
  googleanalytics: "UA-34840693-1"
  images:
    cover: "http://frontinmaceio.com.br/img/bg.jpg"
    facebook: "http://frontinmaceio.com.br/img/fb.png"
```

### Seções ativas

Ainda não definiu a programação completa do evento? Não tem problema, basta alterar a variável `schedule` para `false`.

Ainda não sabe quem irá palestrar? Tudo bem, basta alterar a variável `speakers` para `false`.

E por aí vai.

```
sections:
  location: true
  speakers: true
  lightning: true
  schedule: true
  workshops: true
  partners: true
```

### Lista de Palestrantes

Para incluir/alterar/excluir um palestrante também é igualmente simples, basta recorrer ao `schedule`.

```
schedule: [
  name: "Zeno Rocha"
    alias: "zeno"
    photo: "http://frontinmaceio.com.br/img/speakers/zeno.jpg"
    bio: "Front-end Engineer na Liferay, Inc."
    company: "Liferay, Inc."
    presentation:
      title: "O que eu aprendi em 3 anos de carreira como Front-end"
      description: "Erros, acertos e aprendizados em uma carreira curta, porém bem agitada, como desenvolvedor front-end."
      time: "16h00"
]
```

Quer listar mais algum atributo do palestrante que não está ali? Tudo bem, é só adicionar no `docpad.cson` e depois exibí-lo com `<%= speaker.seuNovoAtributo %>` no [speakers.html.eco](https://github.com/braziljs/conf-boilerplate/blob/master/src/partials/section/speakers.html.eco).

### Lista de outros itens da Agenda

Para alterar os horários de check-in, almoço e coffee-break, é só recorrer as variáveis de `schedule`.

```
schedule: [
  name: "Mesa Redonda (7Masters)"
  time: "17h00"
]
```

Mas se você quiser adicionar mais um coffee-break ou qualquer outro tipo de item na agenda do evento, é só acrescentar mais um item nessa lista.

### Lista de Apoio

Para adicionar qualquer patrocinador ou apoio no evento, é só recorrer as variáveis `sponsors` e `partners`.

```
partners: [
  name: "Opera"
  logo: "http://frontinmaceio.com.br/img/supporters/opera.jpg"
  url: "http://www.opera.com"
]
```

## Deploy

Nós não gostamos de centralizar o poder de deploy em uma pessoa, portanto utilizaremos o recurso de [Github Pages](http://pages.github.com) que ainda é gratuito.

* Dê permissão de execução para o script publish.sh - `chmod +x publish.sh`
* Rode `sh publish.sh` na raíz do projeto.

Espere alguns minutos até que o Github lhe envie um e-mail avisando que tudo ocorreu bem. Depois é só acessar: `http://braziljs.github.com/front-in-maceio`

OBS: Lembre-se de remover o arquivo `CNAME` que está na pasta `src/files` do seu projeto, caso você queira utilizar a URL pré-definida pelo Github.

### Domínio personalizado

Caso você não queira utilizar o domínio do Github, é possível usar seu próprio com alguns passos.

1. Altere o arquivo `CNAME` que está na pasta `src/files` do seu projeto e preencha com o nome do seu domínio: `frontinmaceio.com.br`. [Veja o exemplo](https://github.com/braziljs/conf-boilerplate/blob/master/src/files/CNAME).
2. Altere o DNS do seu domínio seguindo as [instruções do Github](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

### Como fazer sem Deploy utilizar Github Pages

Se você prefere utilizar seu próprio servidor para hospedar o site:

* Rode `docpad generate` na raíz do projeto.

Esse comando irá gerar uma pasta `out` contendo apenas arquivos estáticos, depois é só fazer o upload do conteúdo dessa pasta para sua hospedagem.