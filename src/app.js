console.log('app is runing');


//JSX - JavaScript XML
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public
var app ={
title:'Hello',
subtitle:'jsx'

};

var template =(
<div>
  <h1>{app.title}</h1>
  <p>{app.subtitle}</p>
  <ol>
    <li>Item1</li>
    <li>Item2</li>
  </ol>
</div>
);

var user= {
  name:'Dora',
  age:'24',
  location:'Rio'
};

/*var userName='Mike';
var age=29;
var loc='Richmond';*/

var template2 =(
<div>
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>Loc: {user.location}</p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
