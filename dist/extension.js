module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1)(n(2))},function(t,e){t.exports=function(t){function e(t){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",t)}try{"undefined"!=typeof execScript&&"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener?execScript(t):"undefined"!=typeof eval?eval.call(null,t):e("EvalError: No eval function available")}catch(t){e(t)}}},function(t,e){t.exports="// The module 'vscode' contains the VS Code extensibility API\n// Import the module and reference it with the alias vscode in your code below\nconst vscode = require('vscode');\n\n// this method is called when your extension is activated\n// your extension is activated the very first time the command is executed\n\n/**\n * @param {vscode.ExtensionContext} context\n */\nfunction activate(context) {\n\tconsole.log('Congratulations, your extension \"shutheblanksup\" is now active!');\n\tlet disposable = vscode.commands.registerCommand('extension.helloWorld', function () {\n\n\t\t// vscode.window.showInformationMessage('cpp的format蛮好用的，不过有时不太喜爱那么多空格呢 ~');\n\n\n\t\t// const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);\n\t\t// vscode.window.document.context='de';\n\t\t// textEditor.edit(editBuilder => editBuilder.replace(textEditor.selection, code));\n\n\n\t\t// https://github.com/microsoft/vscode-extension-samples/blob/master/document-editing-sample/src/extension.ts\n\t\tlet editor = vscode.window.activeTextEditor;\n\t\tvscode.window.showInformationMessage('cpp的format蛮好用的，不过有时不太喜爱那么多空格呢 ~');\n\t\tif (editor) {\n\t\t\tlet document = editor.document;\n\t\t\tlet str = document.getText();\n\t\t\t// str;\n\t\t\t// str;\n\t\t\t// vscode.window.showInformationMessage(''+str);\n\t\t\tconst end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);\n\t\t\tvar str_ = str;\n\t\t\twhile (1==1) {\n\t\t\t\tstr = str.replace(' <', '<').replace(' = ', '=').replace(' =', '=').replace('= ', '=');\n\t\t\t\tstr = str.replace(' (', '(').replace(' *', '*').replace('* ', '*').replace(' >', '>').replace('> ', '>');\n\t\t\t\tstr = str.replace(' %', '%').replace('% ', '%');\n\t\t\t\tstr = str.replace(' +', '+').replace('+ ', '+');\n\t\t\t\tstr = str.replace(' -', '-').replace('- ', '-');\n\t\t\t\tstr = str.replace(' /', '/').replace('/ ', '/');\n\t\t\t\tstr = str.replace(' >> ', '>>').replace('< ', '<');\n\t\t\t\tstr = str.replace(' ,', ',').replace(', ', ',');\n\t\t\t\tstr=str.replace('; ',';').replace(' ;',';');\n\t\t\t\tstr=str.replace(' :',':').replace(': ',':').replace(' : ',':');\n\t\t\t\tstr=str.replace(' & ','&').replace(' &','&').replace('& ','&');\n\t\t\t\tstr=str.replace(' && ','&&').replace(' || ','||').replace(' | ','|').replace(' |','|').replace('| ','|');\n\t\t\t\t// str=str.replace('}\\n\\n','}\\n');\n\t\t\t\tif(str_!=str){\n\t\t\t\t\tstr_=str;\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\telse break;\n\t\t\t}\n\n\n\t\t\teditor.edit(editBuilder => {\n\t\t\t\teditBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), str);\n\t\t\t});\n\t\t}\n\n\n\n\t});\n\n\n\tcontext.subscriptions.push(disposable);\n}\nexports.activate = activate;\n\n// this method is called when your extension is deactivated\nfunction deactivate() { }\n\nmodule.exports = {\n\tactivate,\n\tdeactivate\n}\n"}]);
//# sourceMappingURL=extension.js.map