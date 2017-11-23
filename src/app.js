console.log('app is runing');


//JSX - JavaScript XML
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public
var app ={
title:'Hello',
subtitle:'jsx',
opt:['11', '222']
};

var template =(
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.opt.lenght>0 ? 'rrrrrr' : 'no'}</p>
  <ol>
    <li>Item1</li>
    <li>Item2</li>
  </ol>
</div>
);

var user= {
    name:'Dora',
    age:'20',
    location:'www'
};

/*var userName='Mike';
var age=29;
var loc='Richmond';*/
function getLoc(location){
  if(location){
    return <p>Loc: {location}</p>;
  }else{
    return undefined;
  }
}

var template2 =(
<div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>

  {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
  {getLoc(user.location)}
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
