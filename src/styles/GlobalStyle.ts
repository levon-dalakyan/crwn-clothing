import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
