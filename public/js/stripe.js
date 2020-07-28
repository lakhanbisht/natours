/* eslint-disable */
import axios from 'axios';
import {
  showAlert
} from './alerts';
const stripe = Stripe('pk_test_51H9Uu5Bg4M4srGrhiJFncLdDdqVu8nSP94iZunr2E35mZ87VSOqpHGNsZntixT7cF7xvNs6g13h9dHK1GeDfDOU900cS59NDjI');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};