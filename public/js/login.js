/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

// export const logout = async () => {
//   try {
//     const res = await axios({
//       method: 'GET',
//       url: '/api/v1/users/logout',
//     });
//     if (res.data.status === 'success') {
//       showAlert('success', 'Logged out successfully !');
//       window.setTimeout(() => {
//         location.assign('/');
//     }, 1500);
//     }
//   } catch (err) {
//     console.log(err.response);
//     showAlert('error', 'Error logging out! Try again.');
//   }
// };

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
      headers: {
        'Cache-Control': 'no-cache',  // Ensure no caching
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

    if (res.data.status === 'success') {
      // Force remove the cookie in the client-side for safety
      document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      showAlert('success', 'Logged out successfully!');

      // Redirect to the home page after a short delay
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log('Logout error:', err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};