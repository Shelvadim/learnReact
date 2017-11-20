'use strict';

console.log('app is runing');

//JSX - JavaScript XML
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public
var app = {
  title: 'Hello',
  subtitle: 'jsx'

};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item1'
    ),
    React.createElement(
      'li',
      null,
      'Item2'
    )
  )
);

var user = {
  name: 'Dora',
  age: '24',
  location: 'Rio'
};

/*var userName='Mike';
var age=29;
var loc='Richmond';*/

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Loc: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
