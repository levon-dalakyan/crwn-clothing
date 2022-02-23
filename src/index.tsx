import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

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
  	padding: 10px;
	}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
