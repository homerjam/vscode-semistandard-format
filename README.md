# VS Code JavaScript Semi-Standard Format

This extension adds [Semi-Standard format](https://github.com/ricardofbarros/semistandard-format) function to JavaScript.

Please only use it when you are ok with [JavaScript Standard Style](http://standardjs.com/), but still want your semi-colons.

## Changes

### 0.0.8 (2016-03-13)

1. Optimized code
2. Fixed readme

### 0.0.7 (2016-03-12)

1. Added keybindings notes.

### 0.0.6 (2016-03-12)

1. Added a new command to workaround the [problem](https://github.com/chenxsan/vscode-standard-format/issues/1) with the latest Visual Studio Code 0.10.10


## Installation

1. Press `F1` or `cmd+shift+P` to bring up Command Palette
2. Find `Extensions: Install Extension` and hit enter, VS Code will load all available extensions
    ![Extensions: Install Extension](install-extension.png)
3. Find `JavaScript Semi-Standard Format`, click or hit enter to install it


## Usage

1. Press `shift+alt+P`

or

1. Press `F1` or `cmd+shift+P` to bring up Command Palette
2. Search for `Format Code` and click or hit enter
1. Press `F1` to bring up Command Palette
2. Search for `Format code with semistandard-format` and click it
3. It will format the whole document

You can also format only those you selects.

## Keybinding

You can also configurate keybinding in `keybindings.json`, for example:

```
[
  {"key": "shift+cmd+f", "command": "format.semistandard",
  "when": "editorTextFocus"}
]
```

## License

MIT
