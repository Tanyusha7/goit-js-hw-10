export { fetchCountries };

function fetchCountries(countryName) {
  const BASEURL = 'https://restcountries.com/v3.1';
  const ENDPOINT = `/name/${countryName}`;
  return fetch(
    `${BASEURL}${ENDPOINT}?fields=name,capital,population,languages,flags`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
  // .then(data => console.log(data));
  // .catch(err => console.error('Error'));
}
