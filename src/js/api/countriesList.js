const countryCard = country => {
  const { name, flags, capital, population, languages } = country;
  //   const timeZones = timezones.join(', ');

  return `
    <div class="country">
      <img src=${flags.png}>
      <h2>${name}</h2>
      <div>Capital: ${capital}</div>
      <h3>Population: ${population}</h3>
      <h3>Language: ${languages}</h3>
    </div>
  `;
};

export const createCountriesList = countries => {
  return countries.map(country => countryCard(country)).join('');
};
