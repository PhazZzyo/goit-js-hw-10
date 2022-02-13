import { apiService } from './apiService';

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = name => {
  return apiService(`${BASE_URL}${name}`);
};
