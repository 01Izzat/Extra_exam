const zBox = document.querySelector('.lists')
      zSelect = document.querySelector('#select');
      zInput = document.querySelector('.input');


 function renderProductsData (data) {
   zBox.innerHTML = null
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

 
 //*******************FILTER PRODUCTS*****************/
 let filterCategory = [] 
    
  products.forEach((element, index, array) => {
    if(!filterCategory.includes(element.category.name)){
      filterCategory.push(element.category.name)
    }
 })

 filterCategory.forEach((value) => {
   let newOption =`
    <option value=${value}>${value}</option>
   `

   zSelect.insertAdjacentHTML('beforeend', newOption)
  })



 zSelect.addEventListener('change', (e) => {
  let newProductArr = products.filter(item => item.category.name == e.target.value) 
      renderProductsData(newProductArr)
})

//**************************SEARCH**************************/
zInput.addEventListener('keyup', () => {
  e.target.value
})