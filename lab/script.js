// first we set up our global variables to track initial state of our filter parameters
let isChecked = false;
let sliderValue = 1000;
let instrumentType = 'all';
let sortBy = 'popularity';

// update checkbox
function handleCheckbox() {
  isChecked = event.target.checked ? true : false;
  generateContent();
}

// update dropdown
function handleDropdown() {
  instrumentType = event.target.value;
  generateContent();
}

// these html elements represent our interactive elements
const reset = document.querySelector('.reset');
const dropdown = document.querySelector('.dropdown-container select');
const checkbox = document.querySelector('.checkbox-container input');
const slider = document.querySelector('.range-slider-container input');
const radio = document.querySelector('.radio-container #popularity');

// content
const content = document.querySelector('.content'); // empty placeholder div in our HTML for our data-driven content
function generateContent() {
  content.innerHTML = ''; // important! we want to delete all content on the screen each time we re-run to capture new filter and sorting parameters
  data
    .filter(item => {
      return item.price <= sliderValue; // this filter only returns items that are priced less than slider value
    })
    .filter(item => {
      return isChecked ? item.isInStock : item; // if our checkbox is checked, only return items that are in stock
    })
    .filter(item => {
      return instrumentType === 'all' ? item : item.type === instrumentType; // if our dropdown is set to all, return evey item, otherwise only return items that match selected instrument type
    })
    .sort((a, b) => a[sortBy] - b[sortBy]) // sort by value from radio buttons
    .forEach(item => {
      // eveything in this forEach is the same as your project 3 Airtable examples
      content.innerHTML += `
      <div class="card">
       <p>Popularity Ranking: ${item.popularity}</p>
        <h4>${item.name}</h4>
        <p>${item.type}</p>
        <p class="price">$${item.price}</p>
        <p class="${item.isInStock ? 'in-stock' : 'out-of-stock'}">${
        item.isInStock ? 'In stock' : 'Out of stock'
      }</p>
      </div>
    `;
    });
}
generateContent();

// utility function to display numnbers with commas if they are 1,000+
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}