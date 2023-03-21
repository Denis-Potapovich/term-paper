var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

  const hits = document.querySelectorAll(".hit__block")
  

  hits.forEach((el, idx) => {
    console.dir(el)
    const btn = el.childNodes[11]
    const price = el.childNodes[3].innerText
    const title = el.childNodes[7].innerText


    btn.addEventListener("click", () => {
      const hitsStorage = localStorage.getItem("hit") || "[]"
      const hit = JSON.parse(hitsStorage)
      const hitr = {price,title}
      localStorage.setItem("hit", JSON.stringify([...hit , hitr]))
    })
  })

  