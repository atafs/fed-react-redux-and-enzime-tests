import React from 'react';
import ReactDOM from 'react-dom';

import App, { color, number } from './components/App';

console.log('export variables color and number:', color, number);

ReactDOM.render(<App />, document.getElementById('root'));