# remote

Thenable wrapper around XMLHttpRequest.

Usage:

Install dependencies: `npm install`

```
var R = window['remote'];
R.get('./README.md').then(console.log.bind(console));
```
