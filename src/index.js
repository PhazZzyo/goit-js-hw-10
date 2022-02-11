import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/api/fetchCountries';
import { createCountriesList } from './js/api/countriesList';

const DEBOUNCE_DELAY = 300;

const inputSearchRef = document.querySelector('#search-box');
inputSearchRef.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput() {
  if (inputSearchRef.value.length < 2) {
    return console.log('Too many maches found, please enter more specific name');
  } else {
    fetchCountries(inputSearchRef.value)
      .then(countries => {
        const countriesTemplate = createCountriesList(countries);
        console.log(countries);
        renderCountries(countriesTemplate);
      })
      .catch(error => console.log(error));
  }

  const renderCountries = template => {
    const countriesListRef = document.querySelector('.country-list');
    countriesListRef.innerHTML = template;
  };

  // function handleInput() {
  //   if (inputSearchRef.value.length < 2) {
  //     return console.log('Too many maches found, please enter more specific name');
  //   } else {
  //     fetchCountries(inputSearchRef.value)
  //       .then(countries => console.log(countries))
  //       .catch(error => console.log(error));
  //     // console.log(inputSearchRef.value);
  //   }

  //   const email = form.email.value;
  //   const message = form.message.value;

  //   console.log(`Email: ${email}, message: ${message}`);

  //   localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, message },
//   } = event.currentTarget;

//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   console.log(`Email: ${email.value}, message: ${message.value}`);
//   event.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }
