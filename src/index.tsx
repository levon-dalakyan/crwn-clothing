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

	a { 
		text-decoration: none;
		color: #000;
		&:hover {
			color: #000;
		}
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
