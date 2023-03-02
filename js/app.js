const fetchAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((response) => response.json())
        .then((data) => showAllData(data.data));
};

fetchAllData();

const showAllData = (data) => {
    console.log(data);
    const cardContainer = document.getElementById("card-container");
    data.tools.forEach((singleData) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col");
        cardDiv.innerHTML = `
        <div class="card">
                    <img src="${singleData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    });
};
