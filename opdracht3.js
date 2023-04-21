const tvBrands = inventory.map((tvBrand)=> {
    return tvBrand.brand;
})
console.log(tvBrands);

const tvBrandsList = document.getElementById('tvBrands');

const brandsList = tvBrands.map((tvBrand) =>{
tvBrandsList.innerHTML += `
<li>${ tvBrand }</li>
`})

/* opdracht 3b
function displayTvBrands(inventory) {
    const tvBrands = inventory.map((tvBrand) => {
        return tvBrand.brand;
    });
    console.log(tvBrands);

    const tvBrandsList = document.getElementById('tvBrands');

    const brandsList = tvBrands.map((tvBrand) => {
        tvBrandsList.innerHTML += `
      <li>${ tvBrand }</li>
    `;
    });
}

// Roep de functie aan en geef de inventory-array mee als argument
displayTvBrands(inventory);
*/
