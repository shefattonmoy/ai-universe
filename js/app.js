const fetchAllData = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const response = await fetch(url);
    const data = await response.json();
    showAllData(data.data);
}



const showAllData = (data) => {
    const cardContainer = document.getElementById("card-container");
    data.tools.slice(0, 6).forEach((singleData) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card p-4 h-100">
                    <img src="${singleData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <p class="card-text">${singleData.features}</p>
                    </div>
                    <div class="card-footer">
                    <h5 class="card-title">${singleData.name}</h5>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    });
}


fetchAllData();

// Spinner Section

const spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>{
  spinnerWrapper.style.opacity = '0';

  setTimeout(() =>{
    spinnerWrapper.style.display = 'none';
  }, 200);
})