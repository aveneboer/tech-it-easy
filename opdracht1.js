const tvTypes = inventory.map((tvType) => {
    return tvType.type;
})
console.log(tvTypes);

const tvsSoldOut = inventory.filter((tvSoldOut) => {
    return tvSoldOut.sold === tvSoldOut.originalStock
})
console.log(tvsSoldOut);

const tvsWithAmbiLight = inventory.filter((tvWithAmbiLight) => {
    return tvWithAmbiLight.options.ambiLight;
})
console.log(tvsWithAmbiLight);

inventory.sort((a, b) => a.price - b.price);
console.log(inventory);