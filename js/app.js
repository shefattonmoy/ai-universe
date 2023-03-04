const loadData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const response = await fetch(url);
  const data = await response.json();
  showData(data.data.tools.slice(0, 6));
}

const showData = allData => {
  const allDataContainer = document.getElementById('card-container');
  allDataContainer.innerHTML = '';

  // Display 6 data conditional statement
  const showAll = document.getElementById('see-more');
  if (allData.length > 6) {
    showAll.classList.add('d-none');
  }
  else {
    showAll.classList.remove('d-none');
  }

  // Display all data
  allData.forEach(singleData => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML = `
    <div class="card p-4 h-100 mt-4">
      <img src="${singleData.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-text">
          <ol>
          <li class="${singleData.features[0] === undefined ? 'd-none' : ''}">${singleData.features[0]}</li>
          <li class="${singleData.features[1] === undefined ? 'd-none' : ''}">${singleData.features[1]}</li>
          <li class="${singleData.features[2] === undefined ? 'd-none' : ''}">${singleData.features[2]}</li>
          <li class="${singleData.features[3] === undefined ? 'd-none' : ''}">${singleData.features[3]}</li>
          </ol>
          </p>
          <hr>
          <p class="card-text fs-5 fw-semibold">${singleData.name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
            <i class="fa-sharp fa-solid fa-calendar-days"></i>
            <p class="card-text">${singleData.published_in}</p>
            </div>
            <div>
            <i class="fa-solid fa-arrow-right" onclick="fetchSingleData('${singleData.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </div>
          </div>  
        </div>
      </div>
    `;
    allDataContainer.appendChild(cardDiv);
  })
  toggleSpinner(false);
}

loadData();


// Spinner Section JS

const toggleSpinner = isLoading => {
  const spinnerSection = document.getElementById('spinner');
  if (isLoading) {
    spinnerSection.classList.remove('d-none');
  }
  else {
    spinnerSection.classList.add('d-none');
  }
}

document.getElementById('btn-see-more').addEventListener('click', function () {
  toggleSpinner(true);
  showData(data.data.tools);
})


// See More Section JS
const seeAllData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const response = await fetch(url);
  const data = await response.json();
  showData(data.data.tools);
}

// Fetching Single Data & Displaying Them 
const fetchSingleData = (id) => {
  const url_02 = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url_02)
    .then(response => response.json())
    .then(data => showSingleData(data.data))
}

const showSingleData = singleDataDetails => {
  document.getElementById('modal-body').innerHTML = `
  <div class="card-body col d-flex container gap-4">
     <div class="rounded-3" style="background-color: rgba(235, 87, 87, 0.05)";>
         <p class="container text-bold text-center fs-6 card-text mt-4">${singleDataDetails.description? singleDataDetails.description : 'No data found'}</p>
         <div class="d-lg-flex flex-row justify-content-center container gap-4">
         <div class="text-center fw-bold fs-5 bg-body-secondary rounded-3 p-4 text-primary"><small>${singleDataDetails.pricing[0].price? singleDataDetails.pricing[0].price: 'Free'}<br><br>${singleDataDetails.pricing[0].plan}</small></div>
         <div class="text-center fw-bold fs-5 bg-body-secondary rounded-3 p-4 text-primary"><small>${singleDataDetails.pricing[1].price? singleDataDetails.pricing[1].price: 'Free'}<br><br>${singleDataDetails.pricing[1].plan}</small></div>
         <div class="text-center fw-bold fs-5 bg-body-secondary rounded-3 p-4 text-primary"><small>${singleDataDetails.pricing[2].price? singleDataDetails.pricing[2].price: 'Free'}<br><br>${singleDataDetails.pricing[2].plan}</small></div>
         
         </div>
         
         <div class="d-flex gap-4 container mt-4">
            <div>
              <h5 class="card-title">Features</h5>
              <p>
                 <ul>
                     <li>${singleDataDetails.features['1'].feature_name? singleDataDetails.features['1'].feature_name : 'No data found'}</li>
                     <li>${singleDataDetails.features['2'].feature_name? singleDataDetails.features['2'].feature_name : 'No data found'}</li>
                     <li>${singleDataDetails.features['3'].feature_name? singleDataDetails.features['3'].feature_name : 'No data found'}</li>
                  </ul>
              </p>
            </div>
            <div>
            <h5 class="card-title">Integrations</h5>
            <p>
                <ul>
                    <li>${singleDataDetails.integrations? singleDataDetails.integrations : 'No data found'}</li>
                </ul>
              </p>
            </div>
          </div>
      </div>
  <div>
    <img src="${singleDataDetails.image_link[0] ? singleDataDetails.image_link[0] : 'No data found'}" class="card-img-top w-100 rounded mx-auto">
    <p class="fw-bold fs-4 text-center">${singleDataDetails.input_output_examples[0].input? singleDataDetails.input_output_examples[0].input : 'No data found'}</p>
    <p class="text-center fw-semibold fs-5">${singleDataDetails.input_output_examples[0].output? singleDataDetails.input_output_examples[0].output : 'No data found'}</p>
    <button id="accuracy" class="btn btn-danger px-4 py-1 mt-3 text-white font-semibold fs-5" style="position: absolute; transform: translate(600%, -1100%);">${singleDataDetails.accuracy.score ? singleDataDetails.accuracy.score * (100) : 'No data found'}</button>
  </div>
  </div>
  `;
}

/*

<div class="container card p-4 mt-4">
  
    <div class="card-body">
      <h5 class="card-title">Features</h5>
      <p class="card-text">
      <ol>
      <li class="${singleDataDetails.features[0] === undefined ? 'd-none' : ''}">${singleDataDetails.features.feature_name}</li>
      <li class="${singleDataDetails.features[1] === undefined ? 'd-none' : ''}">${singleDataDetails.features[1]}</li>
      <li class="${singleDataDetails.features[2] === undefined ? 'd-none' : ''}">${singleDataDetails.features[2]}</li>
      <li class="${singleDataDetails.features[3] === undefined ? 'd-none' : ''}">${singleDataDetails.features[3]}</li>
      </ol>
      </p>
      <hr>
      <p class="card-text fs-5 fw-semibold">${singleDataDetails.description}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex">
        <i class="fa-sharp fa-solid fa-calendar-days"></i>
        <p class="card-text">${singleDataDetails.published_in}</p>
        </div>
        <div>
        <i class="fa-solid fa-arrow-right" onclick="fetchSingleData('${singleDataDetails.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        </div>
      </div>  
    </div>
  </div> */

