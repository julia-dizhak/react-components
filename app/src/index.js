import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import Letter from './UI/Letter';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <div>
        <Letter backgroundColor="#58B3FF">r</Letter>
        <Letter>e</Letter>
        <Letter>a</Letter>
        <Letter>c</Letter>
        <Letter>t</Letter>
    </div>, 
document.getElementById('letter') )

registerServiceWorker();
