export { createMarkupCountryInfo };

function createMarkupCountryInfo(arr) {
  return arr
    .map(
      ({
        flags: { svg, alt },
        name: { common },
        capital,
        population,
        languages,
      }) => {
        const valueEl = Object.values(languages);

        return `<div class='country-title'>
        <img src="${svg}" alt="${alt}" width='30px' height ='24px'/>
          <h2>${common}</h2>
          </div>
          <p class='country-desc'>Capital:  <span>${capital}</span></p>
          <p class='country-desc'>Population:  <span>${population}</span></p>   
          <p class='country-desc'>Languages:  <span>${valueEl.join(
            ',  '
          )}</span></p>
          `;
      }
    )
    .join('');
}
