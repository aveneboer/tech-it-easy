const tvTypes = inventory.map((tvType) => {
    return tvType.type;
})
console.log(tvTypes);

const tvsSoldOut = inventory.filter((tvSoldOut) => {
    if (tvSoldOut.sold - tvSoldOut.originalStock === 0)
        return tvSoldOut;
})
console.log(tvsSoldOut);

const tvsWithAmbiLight = inventory.filter((tvWithAmbiLight) => {
    return tvWithAmbiLight.options.ambiLight === true;
})
console.log(tvsWithAmbiLight);

inventory.sort((a, b) => a.price - b.price);
console.log(inventory);