import { FormEvent } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { showNotification } from '../../../../utils/notification-utils';
import { Button, BUTTON_STYLE_CLASSES } from '../../../common/Button/Button';
import { Title } from '../../../common/Title/Title';
import * as S from './PaymentForm.styles';
import { useTotalPrice } from '../../../../hooks/useTotalPrice';

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useTotalPrice();

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalPrice + '00' }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: 'Levon Dalakyan',
          },
        },
      });

      if (paymentResult.error) {
        showNotification('error', paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          showNotification('success', 'Payment Successful');
        }
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={paymentHandler}>
        <Title>Credit Card Payment:</Title>
        <CardElement />
        <Button
          type="default"
          htmlType="submit"
          buttonStyle={BUTTON_STYLE_CLASSES.inverted}
        >
          Pay Now
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};
