To run the project use:

	./node_modules/webpack/bin/webpack.js --entry ./src/entry.js --output-path ./dist/ --output-filename bundle.js --module-bind "js=babel-loader?presets=es2015

Serve `index.html` as you wish, for instance using [node static](https://www.npmjs.com/package/node-static)