// 
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

	function assertFormatter(content: string, expected: string, done) {
		vscode.workspace.openTextDocument(vscode.Uri.parse("untitled:/foo/new.js")).then(document => {
			vscode.window.showTextDocument(document).then(textEditor => {
				textEditor.edit(editBuilder => {
					var lastLineLength = document.lineAt(document.lineCount - 1).text.length;
					editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(textEditor.document.lineCount - 1, lastLineLength)), content);
				}).then(() => {
					try {
						var result = myExtension.format(document, null, { insertSpaces: true, tabSize: 4 });
						assert.equal(result.length, 1);
						assert.equal(result[0].newText, expected);
						done();				
					} catch (e) {
						done(e);
					}

				}, err => done(err))
			}, err => done(err))
		}, err => done(err))
	}

	test("Simple declaration", (done) => {
		var content = "var a=5;";
		var expected = "var a = 5\n";
		assertFormatter(content, expected, done);
	});
    test('Function declaration', (done) => {
        var content = 'function name() {}';
        var expected = 'function name () {}\n';
		assertFormatter(content, expected, done);        
    })
});