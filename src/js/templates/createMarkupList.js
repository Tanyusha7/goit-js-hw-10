export { createMarkupList };

function createMarkupList(arr) {
  return arr
    .map(
      ({ flags: { svg, alt }, name: { common } }) =>
        `<li class='country-items'>
          <img src="${svg}" alt="${alt}" width='30px' height ='24px'/>
          <h2 >${common}</h2>
        </li>`
    )
    .join('');
}
