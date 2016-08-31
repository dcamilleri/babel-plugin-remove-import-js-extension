# babel-plugin-remove-import-js-extension

This [Babel](https://babeljs.io/) plugin allows you to remove `.js` and `.jsx` extensions from JavaScript `import` statements.

## Why this plugin ? 

If you too are using the [Google Closure Compiler](https://developers.google.com/closure/compiler/) to transpile ES5 to ES6, you should have noticed that it requires you to leave off the `.js` entension for modules. (Sources: [Here](https://github.com/google/closure-compiler/issues/1956)). For instance,

```sh
$ java -jar closure-compiler-v20160822.jar --language_in=ECMASCRIPT6 --js main.js --language_out=ES5
```

```javascript
import Mylib from './myLib.js' // Will throw "ERROR - namespace never provided"
import Mylib from './myLib' // Won't throw 🕶
```

## Installation

```sh
$ npm install babel-plugin-remove-import-js-extension
```

## Example

**Input**

```javascript
import Mylib from './myLib.js'
import MyFancyComponent from './MyFancyComponent.jsx'
```

**Out**

```javascript
import Mylib from './myLib'
import MyFancyComponent from './MyFancyComponent'
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-remove-import-js-extension"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-remove-import-js-extension script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-remove-import-js-extension"]
});
```
