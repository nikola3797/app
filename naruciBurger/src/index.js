import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import userReducer from './store/reducer/user';
import burgerBuilderReducer from './store/reducer/burgerBuilder';
import orderReducer from './store/reducer/order';
import newAuthReducer from './store/reducer/newAuth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    user: userReducer,
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    newAuth: newAuthReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
