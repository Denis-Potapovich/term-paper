const hitsSide = document.querySelector(".hits")

const hitsStorage = JSON.parse(localStorage.getItem("hit") || "[]")

if (hitsStorage.length) {
    hitsStorage.forEach(el => {
        const {title,price} = el
        const newHits = document.createElement("div")
        newHits.innerHTML = `<h3 class="hitsProductText">${price}</h3> <p class="hitsProductText">${title}</p> <button class="btnBlockHits">Удалить</button>`
        hitsSide.appendChild(newHits)
    });
}