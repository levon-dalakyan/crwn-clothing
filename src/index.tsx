import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const GlobalStyle = createGlobalStyle`

	html {
	margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	}

	body { 
		font-family: 'Open Sans Condensed';
		font-size: 16px;
		padding: 20px 60px;
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
