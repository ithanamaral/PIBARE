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


//BARRA DE COOKIES
/* Selecionar os elementos */
const acceptButton = document.getElementById('accept-cookies');
const cookieBar = document.getElementById('cookie-bar');

/* Função para verificar o consentimento no localStorage */
function checkCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');
  if (consent) {
    cookieBar.style.display = 'none'; /* Esconde a barra se o consentimento já foi dado */
  }
}

/* Função para salvar o consentimento no localStorage */
function setCookieConsent(consent) {
  localStorage.setItem('cookieConsent', consent);
  cookieBar.style.display = 'none'; /* Esconde a barra após o consentimento */
  console.log(`Consentimento salvo: ${consent}`);
}

/* Adicionar evento de clique ao botão */
acceptButton.addEventListener('click', () => setCookieConsent('accepted'));

/* Verificar o consentimento ao carregar a página */
checkCookieConsent();




//PDF
// Adiciona o evento de clique ao botão
document.getElementById('download-btn').addEventListener('click', function () {
    // Link do PDF no diretório local do projeto
    const pdfUrl = '/pdf/Boletim Nº 14(05.01.25).pdf'; // Caminho relativo ao arquivo PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Boletim_05/01/25.pdf'; // Nome sugerido para o arquivo
    link.click();
});













