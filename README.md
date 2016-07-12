# VS Code Semistandard Format

This extension adds [semistandard format](https://github.com/ricardofbarros/semistandard-format) function to JS files.

Please only use it when you are ok with [standardjs](http://standardjs.com/), but still want your semi-colons.

Available on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=homerjam.vscode-semistandard-format).

## Changes

### 0.0.9 (2016-07-12)

1. Updated `semistandard` to 3.0.0

### 0.0.8 (2016-03-13)

1. Optimized code
2. Fixed readme

### 0.0.7 (2016-03-12)

1. Added keybindings notes.

### 0.0.6 (2016-03-12)

1. Added a new command to workaround the [problem](https://github.com/chenxsan/vscode-standard-format/issues/1) with the latest Visual Studio Code 0.10.10


## Usage

Use via the command pallette or add keybinding as shown below.


## Keybinding

You can also configurate keybinding in `keybindings.json`, for example:

```
[
  {
    "key": "shift+cmd+f",
    "command": "format.semistandard",
    "when": "editorTextFocus"
  }
]
```
or
```
[
    {
        "key": "shift+alt+f",
        "command": "format.semistandard",
        "when": "editorTextFocus && editorLangId == 'javascript'"
    }
]
```

## License

MIT

## Thanks!

Major thanks to the original author of semistandard

[Flet](https://github.com/Flet)

