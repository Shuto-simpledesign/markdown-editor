const path = require('path')

module.exports = {
    mode: "production",
    //読み込みファイルの拡張子を .ts から .tsx に変更します。 React は JSX という独自の構文を使いビューを定義します。 その際は .tsx というファイル拡張子を使います。
    entry: './src/index.tsx',
    //次に ts-loader（TypeScript の変換）の対象を .tsx ファイルにも適用します。 正規表現なので x? =「x の有無は任意」という意味合いになります。 つまり .ts .tsx のどちらも適用されるようになります。
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    //resolve セクションへ .js と .tsx を追加します。 モジュールとして解決する、つまり外部ファイルやライブラリ（node_modules 以下のファイル）を使うファイルの拡張子なので .tsx と .js の両方を指定します。
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    },
    devServer: {
        hot: true,
        open: true,
    }
    //hot: ファイルを変更すると自動的にブラウザに反映させるフラグ
    //open: 起動時にブラウザで開くフラグ
}

//module の rules セクションで、webpack に対してビルド時に追加で行う処理を記述します。 以下の記述は .ts で終わるファイルに対して、ts-loader を実行する、というような意味を持ちます。
// exclude は除外するファイルを正規表現で指定します。 node_modules 配下のファイル（＝外部ライブラリ）は特にビルドする必要がないので除外します。
