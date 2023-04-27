const zBox = document.querySelector('.lists')
// zSelect = document.querySelector('#select');


  localData.forEach((element, index, array) => {
  let newLi = document.createElement("li")
      newImg = document.createElement("img")
      newHeading = document.createElement("h2")
      newDesc = document.createElement("p")
      newPrice = document.createElement("p")

  newImg.setAttribute('src', element.images)
  newHeading.textContent = element.title
  newDesc.textContent = element.description
  newPrice.textContent = element.price


  newLi.style.cssText = 'border:1px solid; padding:0; width:250px; list-style-type:none; margin:1rem; align-items: center;';
  

  newLi.appendChild(newImg);
  newLi.appendChild(newHeading)
  newLi.appendChild(newDesc)
  newLi.appendChild(newPrice)
  zBox.appendChild(newLi)
})

/***************FILTER TYPE**********************/
// let filterBox = []

// localData.forEach(value => {
//   value.category.name.forEach(item => {
//     if(!filterBox.includes(item)) {
//       filterBox.push(item)
//     }
//   })
// })


// filterBox.forEach(item => {
//   let zOption = document.createElement('option')
  
//   zOption.setAttribute('value', item)
//   zOption.textContent = item

//   zSelect.appendChild(zOption)
// })

//   const changeSelect = (e) => {
//     zBox.innerHTML = null;
//     localData.map((value) => {
//       if(value.category.name.includes(e.target.value)) {
//         let newLi = document.createElement("li")
//       newImg = document.createElement("img")
//       newHeading = document.createElement("h2")
//       newDesc = document.createElement("p")
//       newPrice = document.createElement("p")

//       newImg.setAttribute('src', value.images)
//       newHeading.textContent = value.title
//       newDesc.textContent = value.description
//       newPrice.textContent = value.price


//       newLi.style.cssText = 'border:1px solid; padding:20px'
      
//       newLi.appendChild(newImg);
//       newLi.appendChild(newHeading)
//       newLi.appendChild(newDesc)
//       newLi.appendChild(newPrice)
//       zBox.appendChild(newLi)
//       }
//     })
//   }

//   zSelect.addEventListener('change', changeSelect)