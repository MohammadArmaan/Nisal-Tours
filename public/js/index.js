/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { signup } from './signup';
import { forgotPassword } from './forgotPassword';
import { resetPassword } from './resetPassword';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';
import { showAlert } from './alerts';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const forgotPasswordForm = document.querySelector('.form--forgotPassword');
const resetPasswordForm = document.querySelector('.form--resetPassword');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');

// FOOTER 
const year = document.querySelector('.copyright__year')
year.textContent = new Date().getFullYear();

// MOBILE NAV
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const header = document.querySelector('.header');
const navTours = document.querySelector('.nav__el__tours');

menuBtn.addEventListener('click', () => {
  header.classList.add('open');
  navTours.classList.remove('hidden');
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  header.classList.remove('open');
  navTours.classList.add('hidden');
  setTimeout(() => {
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }, 10); 
});


document.querySelectorAll('.nav__el').forEach(el => {
  el.addEventListener('click', () => {
    header.classList.remove('open');
    navTours.classList.add('hidden');
    setTimeout(() => {
      menuBtn.style.display = 'block';
      menuBtn.style.vissibility = 'hidden';
      menuBtn.style.opacity = 0;
      
      closeBtn.style.display = 'none';
    }, 300); 
  });
});

document.querySelector('.nav__all__tours').addEventListener('click', () => {
  header.classList.remove('open');
  navTours.classList.add('hidden');
  setTimeout(() => {
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }, 1000); 
});



window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const placeholder = document.querySelector('.placeholder');

  if (window.scrollY > 0) {
    header.classList.add('sticky');
    placeholder.style.display = 'block';
  } else {
    header.classList.remove('sticky');
    placeholder.style.display = 'none';
  }
});


// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    await signup(name, email, password, passwordConfirm);
  });
}

if (forgotPasswordForm) {
  forgotPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    await forgotPassword(email);
  });
}


if (resetPasswordForm) {
  resetPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const token = document.getElementById('reset-token').value;
    resetPassword(password, passwordConfirm, token);
  });
}

if (userDataForm) {
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'data');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password',
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}

if (bookBtn)
  bookBtn.addEventListener('click', e => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });


  // const alertMessage = document.querySelector('body').dataset.alert;
  // if(alertMessage){
  //   showAlert('success', alertMessage);
  // }