import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
<<<<<<< HEAD
//test
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

=======

//tettytytyty
const Page1=()=>(
    <div>
        Page1 component!
    </div>
);

const Page2=()=>(
    <div>
        Page2 component!!!!
    </div>
);

const Page3=()=>(
    <div>
        Page3 component!
    </div>
);

const Page4=()=>(
    <div>
        Page4 component!
    </div>
);


const routes=(
    <BrowserRouter>
    <div>
        <Route path="/" component={Page1} exact={true}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
        <Route path="/page4" component={Page4}/>
    </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
>>>>>>> 2070f106bf2ff96eb3f1a3cd6767d0c5a7026583
