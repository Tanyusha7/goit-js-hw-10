import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;

const searchCountry = document.querySelector('#search-box');
// console.dir(searchCountry);

const listCountry = document.querySelector('.country-list');
listCountry.style.listStyle = 'none';
listCountry.style.margin = '0px';
listCountry.style.padding = '10px';

console.log(listCountry.childNodes);
const infoCountry = document.querySelector('.country-info');
// console.log(infoCountry);

const debounceOnInput = debounce(onInput, DEBOUNCE_DELAY);

searchCountry.addEventListener('input', debounceOnInput);

let countryName = '';
function onInput(e) {
  e.preventDefault();
  const contry = e.target;
  countryName = contry.value.trim();
  console.log(countryName);

  fetchCountries(countryName)
    .then(data => {
      console.log(data);
      listCountry.insertAdjacentHTML('beforeend', createMarkupList(data));
    })
    .catch(err => Notify.failure('Oops, there is no country with that name'));
}

function createMarkupList(arr) {
  return arr
    .map(
      ({ flags: { svg, alt }, name: { common } }) =>
        `<li style = 'display: flex; gap: 10px;'>
          <img src="${svg}" alt="${alt}" width='30px', hight ='30px'/>
          <h2 style = 'margin-top: 10px; '>${common}</h2>
        </li>`
    )
    .join('');
}

function createMarkupCountryInfo(arr) {
  return arr
    .map(
      ({
        name: { common },
        capital,
        population,
        languages,
      }) => `<img src="${svg}" alt="${alt}" width='24px'/>
          <h2>${common}</h2>
           <li>
          <h3>Capital:</h3>
          <p>${capital}</p>
          <h3>Population:</h3>
          <p>${population}</p>
          <h3>Languages:</h3>
          <p>${languages}</p>
      </li>`
    )
    .join('');
}
// flags: { svg, alt },
// if (data <= 10) {
//   return Notify.info(
//     'Too many matches found. Please enter a more specific name.'
//   );
// }
