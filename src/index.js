import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createMarkupList } from './js/templates/createMarkupList';
import { createMarkupCountryInfo } from './js/templates/createMarkupCountryInfo';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const searchCountry = document.querySelector('#search-box');
const listCountry = document.querySelector('.country-list');
listCountry.style.listStyle = 'none';
listCountry.style.margin = '0px';
listCountry.style.padding = '10px';

const infoCountry = document.querySelector('.country-info');

const debounceOnInput = debounce(onInput, DEBOUNCE_DELAY);

searchCountry.addEventListener('input', debounceOnInput);

let countryName = '';
function onInput(e) {
  e.preventDefault();
  const contry = e.target;
  countryName = contry.value.trim();

  fetchCountries(countryName)
    .then(data => {
      console.log(data);
      if (data.length > 10) {
        listCountry.innerHTML = '';
        return Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      listCountry.innerHTML = createMarkupList(data);
      infoCountry.innerHTML = '';

      if (data.length === 1) {
        infoCountry.innerHTML = createMarkupCountryInfo(data);
        listCountry.innerHTML = '';
      }
    })
    .catch(err => {
      Notify.failure('Oops, there is no country with that name');
      listCountry.innerHTML = '';
      infoCountry.innerHTML = '';
    });
}
