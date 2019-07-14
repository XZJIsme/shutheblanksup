// /*---------------------------------------------------------------------------------------------
//  *  Copyright (c) Microsoft Corporation. All rights reserved.
//  *  Licensed under the MIT License. See License.txt in the project root for license information.
//  *--------------------------------------------------------------------------------------------*/

// //@ts-check

// 'use strict';

// const path = require('path');

// /**@type {import('webpack').Configuration}*/
// const config = {
//   target: 'node', // vscode插件运行在Node.js环境中 📖 -> https://webpack.js.org/configuration/node/

//   entry: 'extension.js', // 插件的入口文件 📖 -> https://webpack.js.org/configuration/entry-context/
//   output: {
//     // 打包好的文件储存在'dist'文件夹中 (请参考package.json), 📖 -> https://webpack.js.org/configuration/output/
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'extension.js',
//     libraryTarget: 'commonjs2',
//     devtoolModuleFilenameTemplate: '../[resource-path]'
//   },
//   devtool: 'source-map',
//   externals: {
//     vscode: 'commonjs vscode' // vscode-module是热更新的临时目录，所以要排除掉。 在这里添加其他不应该被webpack打包的文件, 📖 -> https://webpack.js.org/configuration/externals/
//   },
//   resolve: {
//     // 支持读取TypeScript和JavaScript文件, 📖 -> https://github.com/TypeStrong/ts-loader
//     // extensions: ['.ts', '.js']
//     extensions: ['.js'] // ......
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'js-loader'
//           }
//         ]
//       }
//     ]
//   }
// };
// module.exports = config;










/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check

'use strict';

const path = require('path');

/**@type {import('webpack').Configuration}*/
const config = {
    target: 'node', // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/

    entry: './extension.js', // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
    output: { // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js',
        libraryTarget: "commonjs2",
        devtoolModuleFilenameTemplate: "../[resource-path]",
    },
    devtool: 'source-map',
    externals: {
        vscode: "commonjs vscode" // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
    },
    resolve: { // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'script-loader',
                options: {
                    compilerOptions: {
                        "module": "es6" // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
                    }
                }
            }]
        }]
    },
}

module.exports = config;