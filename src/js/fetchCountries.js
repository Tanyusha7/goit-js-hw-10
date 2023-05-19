export function fetchCountries(countryName) {
  const BASEURL = 'https://restcountries.com/v3.1';
  const ENDPOINT = `/name/${countryName}`;
  return fetch(
    `${BASEURL}${ENDPOINT}?fields=name,capital,population,languages,flags`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
