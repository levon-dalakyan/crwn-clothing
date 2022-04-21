import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import GlobalStyle from './styles/GlobalStyle';
import { stripePromise } from './utils/stripe-utils';
import { store } from './store/store';
import App from './App';

let persistor = persistStore(store);

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
