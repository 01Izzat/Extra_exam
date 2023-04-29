const zBox = document.querySelector('.lists')
{/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
// zSelect = document.querySelector('#select');


 function renderProductsData (data) {
  data.forEach((element, index, array) => {
        let newCard = `
      <div class="card" style="width: 18rem;">
        <img src=${element.images[0]} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <strong>$${element.price}</strong>
          </div>
      </div>
        `
        zBox.insertAdjacentHTML('beforeend', newCard)
    })
 }

 renderProductsData(products)