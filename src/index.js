import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/api/fetchCountries';
import { createCountriesList } from './js/api/countriesList';

const DEBOUNCE_DELAY = 300;

const inputSearchRef = document.querySelector('#search-box');
inputSearchRef.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

const renderCountries = template => {
  const countriesListRef = document.querySelector('.country-list');
  countriesListRef.innerHTML = template;
};

function handleInput() {
  let countryName = inputSearchRef.value.trim();
  if (countryName.length < 2) {
    return (
      renderCountries(''),
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
    );
  } else {
    fetchCountries(countryName)
      .then(countries => {
        const countriesTemplate = createCountriesList(countries);
        renderCountries(countriesTemplate);
      })
      .catch(error => {
        if (error.status === 404)
          Notiflix.Notify.failure('Oops, there is no country with that name');
        console.log(error);
      });
  }
}
