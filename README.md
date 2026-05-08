# bot-script

## Japanese

### 概要

チャットBot作成に活用できる、JavaScriptベースのDSLです。
複数行に対応しています。(１行でも実行できますが、ac,ucともにセットで使う意図があります。)
MITライセンスを使用しています。

### 構文

***bs();以外は文字列で記入してください。また、textは、１行のみですが、スペースは有効になります。***

***Bot側***
`bs("ac text");`

***ユーザー側***
`bs("uc text");`

***ログ***
`bs("log");`

***コードの返り値は、オブジェクトとなります。***

### 使い方

htmlファイルに、以下を記述してください。
`<script src=https://shisakankoy.github.io/bot-script/bs.js>`

## English

### Overview

This is a JavaScript-based DSL that can be used to create chatbots.

It supports multiple lines. (It can be executed with a single line, but it is intended to be used with both ac and uc.)
It uses the MIT license.

### Syntax

***Please enter everything except bs(); as a string. Also, text is limited to one line, but spaces are allowed.***

***Bot side***
`bs("ac text");`

***User side***
`bs("uc text");`

***Log***
`bs("log");`

***The return value of the code is an object.***

### How to use

Add the following to your HTML file:
`<script src=https://shisakankoy.github.io/bot-script/bs.js>`
