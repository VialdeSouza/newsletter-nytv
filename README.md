<h1 align="center">
    :newspaper: News Letter
</h1>
<p align="center">🚀 Aplicação mobile que lista artigos atuais de uma seção especificada do The New York Times</p>

![Sem título](https://user-images.githubusercontent.com/38055818/122083276-ba732f00-cdce-11eb-878a-b1e3e6be0ff2.png)


Guia
=================
<!--ts-->
   * [Sobre](#Sobre)
      * [Navegação](#Navegação)
      * [WebView](#WebView)
      * [React Native Paper](#Paper)
   * [API](#API)
   * [Instalação](#Instalação)
   * [Sobre testes](#Testes)
<!--te-->

Sobre
=====
Neste projeto, utilizei recursos que já tenho familiaridade. Abaixo escrevo um pouco sobre a motivação da escolha de alguns os recursos e como foram utilizados. 
:warning: Esse projeto foi emulado apenas no sistema Android.


Navegação
-----

Utilizei o pacote  <a href="https://reactnavigation.org/">React Navigation</a> para lidar com as rotas e navegação. Implementei uma navegação aninhada utilizando @react-navigation/material-bottom-tabs e @react-navigation/stack. Dessa forma posso personalizar a navegação de cada tela.


Web View
-----

Utilizei o pacote  <a href="https://github.com/react-native-webview/react-native-webview">React Native Webview</a> para exibir a página da noticia dentro do aplicativo. 

React Native Paper
-----

O <a href="https://callstack.github.io/react-native-paper/">React Native Paper</a> é muito útil para criação de interfaces básicas e possui uma documentação completa. Neste projeto, utilizei  o Provider para customizar o tema, List.Iem para listagem das notícias e um Card para o destaque de uma notícia. 

API
=====
Para consumir a api utilizei o <a href="https://github.com/axios/axios">Axios</a> e fiz uma simples requisição disparada na montagem do componente.
:warning: A key da da api não está no repositório, use o arquivo apiKey.exemplo.js para criar seu arquivo apiKey.js


Instalação
=====
Instale as denpendências:

```shell
$ npm install
```

Crie o arquivo apiKey.js na raiz do projeto:

```js
const keyNyTimes = 'sua key';
export default keyNyTimes;
```
Há um arquivo apiKey.exemplo.js para você utilizar como exemplo. 

Feito isto, execute o projeto com:

```shell
$ npx react-native run-android
```

Testes
=====
Usando como guia a documentação as seguintes documentações: 
- <a href="https://reactnative.dev/docs/testing-overview">Teste React Native</a>
- <a href="https://jestjs.io/docs/pt-BR/tutorial-react-native">Jest</a>
- <a href="https://callstack.github.io/react-native-testing-library/">React Native Testing Library</a>

Escrevi testes unitário dos componentes essenciais para aplicação, que são: ListItem e Card. Testei a renderezição dos components e as props.


Para executar os testes use:

```shell
$ npm test
```


<p align="center">=)</p>
