export { createMarkupList };

function createMarkupList(arr) {
  return arr
    .map(
      ({ flags: { svg, alt }, name: { common } }) =>
        `<li style = 'display: flex; gap: 15px; align-items: center;'>
          <img src="${svg}" alt="${alt}" width='30px' height ='24px'/>
          <h2 style = 'margin-top: 10px; margin-bottom: 10px;'>${common}</h2>
        </li>`
    )
    .join('');
}
