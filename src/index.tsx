import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';

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
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
