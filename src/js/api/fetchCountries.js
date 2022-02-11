import { apiService } from './apiService';

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = name => {
  return apiService(`${BASE_URL}${name}`);
};

// export const getHeroById = id => {
//   return apiService(`${BASE_URL}/heroes/${id}`);
// };

// export const fetchCountries = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       geoCode => {
//         resolve(geoCode);
//       },
//       error => {
//         reject(error);
//       },
//     );
//   });
// };

// getUserGeoLocation()
//   .then(geoCode => {
//     const { coords } = geoCode;
//     const { latitude, longitude } = coords;

//     const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
//     console.log(googleMapsLink);
//   })
//   .catch(error => console.warn(error));
