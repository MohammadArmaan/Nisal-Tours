// /* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51PSsUt2KjubrlOfSyLtJlYiDKdBWXvNEIet8WSmg6NOna8xoslYWa3pXILQY3ed1jh8zJJTWrGXkPA1T6ZPygLnn00HsyEuLlk');

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
