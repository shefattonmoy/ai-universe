const loadData = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const response = await fetch(url);
  const data = await response.json();
  showData(data.data.tools);
}

const showData = allData =>{
  const allDataContainer = document.getElementById('card-container');
  allData = allData.slice(0, 6);
  allData.forEach(singleData =>{
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML = `
    <div class="card p-4 h-100 mt-4">
                        <img src="${singleData.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Features</h5>
                          <p class="card-text">${singleData.features}</p>
                          <hr>
                          <p class="card-text fs-5 fw-semibold">${singleData.name}</p>
                        </div>
                      </div>
    `;
    allDataContainer.appendChild(cardDiv);
  })
}

loadData();



// Spinner Section

const spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>{
  spinnerWrapper.style.opacity = '0';

  setTimeout(() =>{
    spinnerWrapper.style.display = 'none';
  }, 200);
})