'use strict';

console.log('app is runing');

//JSX - JavaScript XML
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public
var app = {
  title: 'Hello',
  subtitle: 'jsx',
  opt: ['11', '222']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.opt.lenght > 0 ? 'rrrrrr' : 'no'
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
  age: '20',
  location: 'www'
};

/*var userName='Mike';
var age=29;
var loc='Richmond';*/
function getLoc(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Loc: ',
      location
    );
  } else {
    return undefined;
  }
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLoc(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
