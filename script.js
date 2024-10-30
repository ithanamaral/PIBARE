const btn = document.querySelector("#btn");
const menu = document.querySelector(".menu");

// Eventos
btn.addEventListener("click", handleButtonClick);
btn.addEventListener("touchstart", handleButtonClick); // Para um detalhe mais responsivo

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    menu.classList.toggle("active");
    setAria();

    if (menu.classList.contains("active")) {
        document.addEventListener("click", outsideClickListener);
    } else {
        document.removeEventListener("click", outsideClickListener);
    }
}

function setAria() {
    const isActive = menu.classList.contains("active");
    btn.setAttribute("aria-expanded", isActive);
}

function outsideClickListener(event) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove("active");
        setAria();
        document.removeEventListener("click", outsideClickListener);
    }
}




// Para efeitos do texto
const elements = document.querySelectorAll(".js")
const myObserver = new IntersectionObserver( (entries) =>{
    entries.forEach( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

elements.forEach( (element) => myObserver.observe(element))



//Para o Carrosel
$('.carousel').carousel({
    interval: 3000
  })





















