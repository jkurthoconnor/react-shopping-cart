import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Shop from './components/Shop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Shop />, document.getElementById('root'));
registerServiceWorker();
