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

let count=0;
//const someId="my-id"; id={someId} className="button"
const addOne = () => {
  console.log('+One');
};

const subOne = () => {
  console.log('-One');
};

const res = () => {
  console.log('res');
};


const template2 =(
<div>
  <h1> Count: {count}</h1>  
  <button onClick={addOne}>+1</button>
  <button onClick={subOne}>-1</button>
  <button onClick={res}>Res</button>
</div>
  
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
