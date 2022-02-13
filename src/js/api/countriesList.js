const countryBigCard = country => {
  const { name, flags, capital, population, languages } = country;

  return `
    <div class="country-card">
      <img src=${flags.svg} class="country-card_img">
      <h2>${name.official}</h2>
      </div>
      <div class="country-card_big">
      <h3>Capital: <span class="country-card_desc">${capital}</span></h3>
      <h3>Population: <span class="country-card_desc">${population}</span></h3>
      <h3>Language: <span class="country-card_desc">${Object.values(languages)}</span></h3>
    </>
  `;
};

const countrySmallCard = country => {
  const { name, flags } = country;

  return `
    <div class="country-card">
    <img src=${flags.svg} class="country-card_img">
    <h2>${name.official}</h2>    
    </div>
  `;
};

export const createCountriesList = countries => {
  if (countries.length === 1) {
    return countries.map(country => countryBigCard(country)).join('');
  }
  return countries.map(country => countrySmallCard(country)).join('');
};
