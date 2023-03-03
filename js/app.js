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
    if(allData.length > 6){
        showAll.classList.add('d-none');
    }
    else{
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

const toggleSpinner = isLoading =>{
  const spinnerSection = document.getElementById('spinner');
  if(isLoading){
    spinnerSection.classList.remove('d-none');
  }
  else{
    spinnerSection.classList.add('d-none');
  }
}

document.getElementById('btn-see-more').addEventListener('click', function(){
  toggleSpinner(true);
  showData(data.data.tools);

})


// See More Section JS
const seeAllData = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const response = await fetch(url);
  const data = await response.json();
  showData(data.data.tools);
}

// 
const fetchSingleData = (id) =>{
  const url_02 = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url_02)
  .then(response => response.json())
  .then(data => console.log(data.data))
}

const showSingleData = singleDataDetails =>{

}