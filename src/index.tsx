import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

const GlobalStyle = createGlobalStyle`
	html {
	margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);
