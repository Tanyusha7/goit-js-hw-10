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

        return `<div style = 'display: flex; gap: 15px; align-items: center; font-size: 30px; '>
        <img src="${svg}" alt="${alt}" width='30px' height ='24px'/>
          <h2 style='margin-top: 10px; margin-bottom: 10px'>${common}</h2>
          </div>
          <div style = 'display: flex; gap: 15px; align-items: center;'>
          <p style ='font-weight: 600; font-size: 24px; margin: 0'>Capital:</p>
         <p style ='font-size: 18px; margin: 0'>${capital}</p></div>
         <div style = 'display: flex; gap: 15px; align-items: center;'>
          <p style ='font-weight: 600; font-size: 24px; margin: 0'>Population:</p>   
          <p style ='font-size: 18px; margin: 0'>${population}</p></div>
          <div style = 'display: flex; gap: 15px; align-items: center;'>
          <p style ='font-weight: 600; font-size: 24px; margin: 0px; '>Languages:</p>
          <p style ='font-size: 18px; margin: 0'>${valueEl.join(
            ',  '
          )}</p></div>
          `;
      }
    )
    .join('');
}
