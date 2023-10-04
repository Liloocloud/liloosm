/**
 * Liloo Extreme Simplista e Minimals (XM)
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

    // Back to top
    toTop: function () {
        let btn = document.querySelector("[totop]")
        if (btn != null) {
            window.addEventListener("scroll", function () {
                if (document.documentElement.scrollTop > 300) {
                    btn.classList.add("active")
                } else {
                    btn.classList.remove("active")
                }
            })
            btn.addEventListener("click", function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            })
        }
    },

    // Dark mode
    moon: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`,

    sun: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>`,

    toggleDarkMode: function () {
        let body = document.body
        let darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
        let logoDark = document.querySelector('[logo] > [dark]')
        let logoLight = document.querySelector('[logo] > [light]')
        let btn = document.querySelector('[darkmode]')
        if (darkModeEnabled) {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkModeEnabled", "false");
            if (btn != null) { btn.innerHTML = lilooSM.moon }
            logoDark.style.display = "none";
            logoLight.style.display = "block";

        } else {
            body.classList.add("dark-mode")
            localStorage.setItem("darkModeEnabled", "true")
            if (btn != null) { btn.innerHTML = lilooSM.sun }
            logoDark.style.display = "block";
            logoLight.style.display = "none";
        }
    },

    // Check darkModeCurrent
    checkDarkMode: function () {
        let darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true"
        let logoDark = document.querySelector('[logo] > [dark]')
        let logoLight = document.querySelector('[logo] > [light]')
        let btn = document.querySelector('[darkmode]')
        if (darkModeEnabled) {
            document.body.classList.add("dark-mode");
            if (btn != null) { btn.innerHTML = lilooSM.sun }
            logoDark.style.display = "block";
            logoLight.style.display = "none";
        } else {
            if (btn != null) { btn.innerHTML = lilooSM.moon }
            logoDark.style.display = "none";
            logoLight.style.display = "block";
        }
    },

    // Read Buttons Modal
    modalSelect: document.querySelectorAll("[data-modal]"),

    // Open Modal
    openModal: function (element = '') {
        lilooSM.modalSelect.forEach(function (el) {
            el.addEventListener("click", function () {
                let item = el.getAttribute("data-modal")
                let modal = document.querySelector(`[modal="${item}"]`)
                modal.classList.add("show")

                let close = document.querySelector(`[modal="${item}"] [close]`)
                close.addEventListener("click", () => {
                    modal.classList.remove("show")
                })

                document.addEventListener("keydown", (event) => {
                    if (event.key === "Escape" && modal.classList.contains("show")) {
                        modal.classList.remove("show")
                    }
                });

                window.addEventListener("click", (event) => {
                    if (event.target == modal) {
                        modal.classList.remove("show")
                    }
                });

            })
        })
    },

    // Close Modal
    // closeModal: function(){
    //     lilooSM.modalSelect.forEach(function(el) {
    //         el.addEventListener("click", function() {
    //             let item = el.getAttribute("data-modal")   
    //             let modal = document.querySelector(`[modal="${item}"]`)
    //             let close = document.querySelector(`[modal="${item}"] [close]`)
    //             close.addEventListener("click", () => {
    //                 modal.classList.remove("show")
    //             })        
    //         })
    //     })
    // }

    // sendWhatsappForm1: function(){
    //     let button = document.querySelector('[whatsapp]')
    //     let tpl = `
    //     <div modal="whatsapp" class="show">
    //         <div>
    //             <span close>&times;</span>
    //             <h2>Modal do whatsapp</h2>
    //             <p>Este é um exemplo de modal simples.</p>
    //         </div>
    //     </div>
    //     `
    //     let modal = document.createElement('div');
    //     modal.textContent = tpl;
    //     button.parentNode.insertBefore(modal, button.nextSibling);
    //     return 
    // },

    sendWhatsapp: function () {
        let button = document.querySelector('[whatsapp]')
        if (button != null) {
            let form = button.getAttribute('form') != null ? true : false

            // Envia o form
            if (form) {
                let modal = document.querySelector(`[modal="whatsapp"]`)
                modal.classList.add("show")
                let close = document.querySelector(`[modal="whatsapp"] [close]`)
                close.addEventListener("click", () => {
                    modal.classList.remove("show")
                })

            // Envia apenas o whatsapp
            } else {
                // redirecionar para o URL
            }
        }
        return
    },

    // Gerenciamento da janela modal do whatsapp
    modalWhatsapp: function () {
        const modal = document.querySelector('[modal="whatsapp"]')
        modal.addEventListener('submit', function (e) {
            modal.querySelector('[loader]').classList.add('show')
            e.preventDefault()
            lilooRequest.Form({
                form: this.querySelector('form'),
                path: 'https://liloo.com.br/liloosm/smbin/index',
                action: '',
                success: function (res) {
                    modal.querySelector('[loader]').classList.remove('show')
                    if (res.bool) {

                        
                        modal.querySelector('[alert]').classList.add('show', 'success')
                        modal.querySelector('[alert] [message]').innerHTML = res.message

                        // Redireciona para URL passada pelo button
                        let button = document.querySelector('button[whatsapp]')
                        // let tel = button.getAttribute('tel') != null ? button.getAttribute('tel') : false
                        // let msg = button.getAttribute('msg') != null ? button.getAttribute('msg') : false
                        let url = button.getAttribute('url') != null ? button.getAttribute('url') : false
                        
                        // console.log(tel, msg, url)
                        window.open(url, "_blank")
                        setTimeout(function () {
                            modal.classList.remove("show")
                        }, 2000)
                        return false
                    } else {
                        modal.querySelector('[alert]').classList.add('show', 'danger')
                        modal.querySelector('[alert] [message]').innerHTML = res.message
                        return false
                    }
                }
            })
            // modal.querySelector('[alert]').classList.add('show', 'danger')
            // modal.querySelector('[alert] [message]').innerHTML = 'Não foi possivel enviar. Tente novamente.'
            return false
        })
        modal.querySelector('[alert] [close]').addEventListener('click', function (e) {
            modal.querySelector('[alert]').classList.remove("show")
        })
        return false
    },

    // Mask Input
    maskInput: function (campos, formato) {
        campos.forEach(function (campo) {
            campo.addEventListener('input', function () {
                var valor = this.value.replace(/\D/g, '')
                var valorFormatado = ''
                var mascaraIndex = 0
                for (var i = 0; i < valor.length && mascaraIndex < formato.length; i++) {
                    var caractereMascara = formato.charAt(mascaraIndex)
                    var caractereValor = valor.charAt(i)
                    while (!/\d/.test(caractereMascara) && mascaraIndex < formato.length) {
                        valorFormatado += caractereMascara
                        mascaraIndex++
                        caractereMascara = formato.charAt(mascaraIndex)
                    }
                    if (/\d/.test(caractereMascara)) {
                        valorFormatado += caractereValor
                    } else {
                        valorFormatado += caractereMascara
                    }
                    mascaraIndex++
                }
                this.value = valorFormatado
            })
        })
    },

    // Maskinput para telefone em dois formatos
    maskInputPhone: function () {
        var camposTelefone = document.querySelectorAll('[mask-phone]')
        camposTelefone.forEach(function (campo) {
            campo.addEventListener('input', function () {
                var telefone = this.value.replace(/\D/g, '')
                if (telefone.length > 11) {
                    telefone = telefone.slice(0, 11)
                }
                var formattedTelefone = ''
                for (var i = 0; i < telefone.length; i++) {
                    if (i === 0) {
                        formattedTelefone += '(' + telefone[i]
                    } else if (i === 2) {
                        formattedTelefone += ') ' + telefone[i]
                    } else if ((i === 6 && telefone.length === 10) || (i === 7 && telefone.length === 11)) {
                        formattedTelefone += '-' + telefone[i]
                    } else {
                        formattedTelefone += telefone[i]
                    }
                }
                this.value = formattedTelefone
            })
        })
    },

}

// Load default
lilooSM.accordicon()
lilooSM.header()
lilooSM.checkDarkMode()
lilooSM.toTop()
lilooSM.openModal()

// Darkmode
const btnMode = document.querySelector('[darkmode]')
if (btnMode != null) {
    btnMode.addEventListener("click", lilooSM.toggleDarkMode)
}
// Button Whatsapp
lilooSM.modalWhatsapp()
const whatsapp = document.querySelector('[whatsapp]')
if (whatsapp != null) {
    whatsapp.addEventListener("click", lilooSM.sendWhatsapp)
}

/**
 * Maskinputs
 */
lilooSM.maskInputPhone()
lilooSM.maskInput(document.querySelectorAll('[mask-cpf]'), '999.999.999-99')
lilooSM.maskInput(document.querySelectorAll('[mask-cnpj]'), '99.999.999/9999-99')
lilooSM.maskInput(document.querySelectorAll('[mask-rg]'), '99.999.999-9')
lilooSM.maskInput(document.querySelectorAll('[mask-cep]'), '99999-999')


// offcanvas
// document.addEventListener("DOMContentLoaded", function () {
//     const menuIcon = document.getElementById("menu-icon");
//     const offcanvas = document.getElementById("offcanvas");
//     const dropdownToggle = document.querySelectorAll(".dropdown-toggle");

//     menuIcon.addEventListener("click", function () {
//         offcanvas.classList.toggle("open");
//     });

//     // Evitar o fechamento do menu offcanvas quando um link é clicado
//     offcanvas.addEventListener("click", function (e) {
//         if (e.target.tagName === "A") {
//             e.preventDefault();
//         }
//     });

//     // Abrir e fechar dropdowns individualmente
//     dropdownToggle.forEach(toggle => {
//         toggle.addEventListener("click", function (e) {
//             e.preventDefault();
//             const dropdownMenu = this.nextElementSibling;
//             dropdownMenu.classList.toggle("open");
//         });
//     });
// });

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



