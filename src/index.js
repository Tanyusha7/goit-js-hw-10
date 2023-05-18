import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const searchCountry = document.querySelector('#search-box');
// console.dir(searchCountry);

const listCountry = document.querySelector('.country-list');
// console.log(listCountry);
const infoCountry = document.querySelector('.country-info');
// console.log(infoCountry);

const debounceOnInput = debounce(onInput, DEBOUNCE_DELAY);

searchCountry.addEventListener('input', debounceOnInput);
let countryName = '';
function onInput(e) {
  e.preventDefault();

  countryName = e.target.value;
  console.log(countryName);

  fetchCountries(countryName).then(data => {
    listCountry.insertAdjacentHTML('beforeend', createMarkupList(data));
  });
}

function createMarkupList(arr) {
  return arr
    .map(
      ({ flags: { svg, alt }, name: { common } }) =>
        `<li>
          <img src="${svg}" alt="${alt}" width='24px'/>
          <h2>${common}</h2>
        </li>`
    )
    .join('');
}

// flags: { svg, alt },
