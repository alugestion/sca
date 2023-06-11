addEventListener("DOMContentLoaded", () => {
    const menu_oculto = document.querySelector(".menu_oculto")
    if(menu_oculto) {
        menu_oculto.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }
})

addEventListener("DOMContentLoaded", () => {
    const inicio = document.querySelector(".inicio")
    const nosotros = document.querySelector(".nosotros")
    const areas = document.querySelector(".areas")
    const contacto = document.querySelector(".contacto")
    
    
    if(inicio) {
        inicio.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(nosotros) {
        nosotros.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(areas) {
        areas.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(contacto) {
        contacto.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
        
})

// volver //

window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".volver_container")
        .classList.add("show");

    }
    else{
        document.querySelector(".volver_container")
        .classList.remove("show");

    }
}

addEventListener("DOMContentLoaded", () => {
    const leer_mas = document.querySelector(".leer_mas")
    if(leer_mas) {
        leer_mas.addEventListener("click", () => {
            const fisico_oculto = document.querySelector(".fisico_oculto")
            fisico_oculto.classList.toggle("aparece")
        })
    }
})

addEventListener("DOMContentLoaded", () => {
    const salir = document.querySelector(".salir")
    if(salir) {
        salir.addEventListener("click", () => {
            const fisico_oculto = document.querySelector(".fisico_oculto")
            fisico_oculto.classList.toggle("aparece")
        })
    }
})