import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
//引入本地的css文件要在index.js下import,不要在index.html进行
import './static/bootstrap/css/bootstrap.css';
import store from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
