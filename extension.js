// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "shutheblanksup" is now active!');
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {

		// vscode.window.showInformationMessage('cpp的format蛮好用的，不过有时不太喜爱那么多空格呢 ~');


		// const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
		// vscode.window.document.context='de';
		// textEditor.edit(editBuilder => editBuilder.replace(textEditor.selection, code));


		// https://github.com/microsoft/vscode-extension-samples/blob/master/document-editing-sample/src/extension.ts
		let editor = vscode.window.activeTextEditor;
		vscode.window.showInformationMessage('cpp的format蛮好用的，不过有时不太喜爱那么多空格呢 ~');
		if (editor) {
			let document = editor.document;
			let str = document.getText();
			// str;
			// str;
			// vscode.window.showInformationMessage(''+str);
			const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
			var str_ = str;
			while (1 == 1) {
				str = str.replace(' <', '<').replace(' = ', '=').replace(' =', '=').replace('= ', '=');
				str = str.replace(' (', '(').replace(' *', '*').replace('* ', '*').replace(' >', '>').replace('> ', '>');
				str = str.replace(' %', '%').replace('% ', '%');
				str = str.replace(' +', '+').replace('+ ', '+');
				str = str.replace(' -', '-').replace('- ', '-');
				// str = str.replace(' /', '/').replace('/ ', '/');
				str = str.replace(' /', '/').replace(' / ','/');
				str = str.replace(' >> ', '>>').replace('< ', '<');
				str = str.replace(' ,', ',').replace(', ', ',');
				str = str.replace('; ', ';').replace(' ;', ';');
				str = str.replace(' :', ':').replace(': ', ':').replace(' : ', ':');
				str = str.replace(' & ', '&').replace(' &', '&').replace('& ', '&');
				str = str.replace(' && ', '&&').replace(' || ', '||').replace(' | ', '|').replace(' |', '|').replace('| ', '|');
				// str=str.replace('}\n\n','}\n');
				str=str.replace(')\n',')');
				if (str_ != str) {
					str_ = str;
					continue;
				}
				else break;
			}


			editor.edit(editBuilder => {
				editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), str);
			});
		}



	});


	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
