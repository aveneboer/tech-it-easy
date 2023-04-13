function displayTv(tv) {
    const tvDescription = `${tv.brand} ${tv.type} - ${tv.name}`;
        return tvDescription;
    }

function displayPrice(tv) {
    const tvPrice = `€${tv.price},-`;
        return tvPrice;
}
function createSizes(tv) {
let sizeString = '';
const tvSizes = tv.availableSizes;
const numSizes = tvSizes.length

    if (numSizes.length === 1) {
        sizeString = `${tvSizes[0]} inch (${tvSizes[0] * 2.54} cm)`;
    } else {
        for (let i = 0; i < numSizes; i++) {
            const tvSize = tvSizes[i];
            const sizeInCm = Math.round(tvSize * 2.54);
            sizeString += `${tvSize} inch (${sizeInCm} cm)`;
            if (i < numSizes - 1) {
                sizeString += ' | ';
            }

        }

    }
    return sizeString;
}
function displayInventory(inventory) {
    const tvList = inventory.map((tv) => {
        const tvDescription = displayTv(tv);
        const tvPrice = displayPrice(tv);
        const tvSizes = createSizes(tv);

        return `<div class="tv-item">
              <div class="tv-description">${tvDescription}</div>
              <div class="tv-price">${tvPrice}</div>
              <div class="tv-sizes">${tvSizes}</div>
            </div>`;
    });

    document.getElementById("tv-container").innerHTML = tvList.join("");
}

displayInventory(inventory);
