import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from "./store.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ChatProvider } from "./ContextApi/chatcontext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChatProvider>
    <Provider store={store}>
      <App />
      <ToastContainer theme="dark" pauseOnFocusLoss draggable pauseOnHover />
    </Provider>
  </ChatProvider>
);
