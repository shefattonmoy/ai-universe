const loadData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const response = await fetch(url);
  const data = await response.json();
  showData(data.data.tools);
}

const showData = allData => {
  const allDataContainer = document.getElementById('card-container');
  // allData = allData.slice(0, 6);
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
            <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>  
        </div>
      </div>
    `;
    allDataContainer.appendChild(cardDiv);
  })
}

loadData();



// Spinner Section

const spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
  spinnerWrapper.style.opacity = '0';

  setTimeout(() => {
    spinnerWrapper.style.display = 'none';
  }, 200);
})