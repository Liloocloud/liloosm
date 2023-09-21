/**
 * Liloo Extreme Minimals (XM)
 * copyright 08.09.2023
 */

const lilooSM = {

    // Accordion
    accordicon: function () {
        const allHeaders = document.querySelectorAll('[accordion] > div > [header]')
        allHeaders.forEach(header => {
            header.addEventListener('click', function () {
                const content = this.nextElementSibling;
                const allContents = document.querySelectorAll('[accordion] > div > [content]')
                allContents.forEach(otherContent => {
                    if (otherContent !== content) {
                        otherContent.style.display = 'none'
                    }
                })
                if (content.style.display === 'block') {
                    content.style.display = 'none'
                } else {
                    content.style.display = 'block'
                }
            })
        })
    },

    // Header
    header: function () {
        const header = document.querySelectorAll("header > [data-src], [header] > [data-src]")
        header.forEach(function (banner) {
            let imgSrc = banner.getAttribute("data-src")
            if (imgSrc) {
                banner.style.backgroundImage = `url(${imgSrc})`
                banner.style.loading = 'lazy';
            }
        })
    },

    // navbar: function () {
    //     const menuIcon = document.querySelector(".menu-icon");
    //     const menu = document.querySelector(".menu");

    //     menuIcon.addEventListener("click", function () {
    //         menu.classList.toggle("menu-open"); // Alternar classe para exibir/ocultar o menu offcanvas
    //     });

    //     // Fixar o menu no topo quando o usuário rolar para baixo
    //     window.addEventListener("scroll", function () {
    //         const navbar = document.querySelector(".navbar");
    //         if (window.scrollY > 100) {
    //             navbar.classList.add("navbar-fixed");
    //         } else {
    //             navbar.classList.remove("navbar-fixed");
    //         }
    //     });
    // }

}

lilooSM.accordicon()
lilooSM.header()

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const offcanvas = document.getElementById("offcanvas");
    const dropdownToggle = document.querySelectorAll(".dropdown-toggle");

    menuIcon.addEventListener("click", function() {
        offcanvas.classList.toggle("open");
    });

    // Evitar o fechamento do menu offcanvas quando um link é clicado
    offcanvas.addEventListener("click", function(e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
        }
    });

    // Abrir e fechar dropdowns individualmente
    dropdownToggle.forEach(toggle => {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle("open");
        });
    });
});





