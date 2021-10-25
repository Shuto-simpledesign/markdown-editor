// //log という関数は message という「数値型」の引数を取り void、 つまり何も返却されない、という定義しています。

// const log = (message: string): void => {
//     console.log(message)
// }

// log("Hello, Webpack + TypeScript!")

// //TypeScript はビルド時に型検査を行い、型定義と異なる値のやり取りを検出してエラーにしてくれます。 意図しない値が入ってくることをある程度ビルド時に検出できるので、うっかりミスを防止し、開発効率を上げることができます。


import * as React from 'react'
import { render } from 'react-dom'

const Main = (<h1>Markdown Editor</h1>)

render(Main, document.getElementById('app'))