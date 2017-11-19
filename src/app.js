console.log('app is runing');


//JSX - JavaScript XML
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public

var template = <p>this is JSX change</p>;

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
