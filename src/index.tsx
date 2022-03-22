import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

import App from './App';
import { store } from './store';

const GlobalStyle = createGlobalStyle`
	html {
	box-sizing: border-box;
	margin: 0;
  padding: 0;		
	}

	body { 
		padding: 20px 60px;
	}

	.input {
		border: none;
  	border-bottom: 1px solid #000;
		border-radius: 0;
  	padding: 10px;
	}
`;

let persistor = persistStore(store);

ReactDOM.render(
  <>
    <GlobalStyle />

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('root')
);
