import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html {
	box-sizing: border-box;
	margin: 0;
  padding: 0;		
	}

	body { 
		padding: 20px 60px;

		@media screen and (max-width: 1400px) {
			padding: 20px 40px;
		}

		@media screen and (max-width: 1200px) {
			padding: 20px;
		}

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}
`;
