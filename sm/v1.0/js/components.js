/**
 * Components com uso de Props JS PURO
 * @copyright Felipe Oliveira 19.09.2023
 */

const lilooComp = {

    formLogin: function (obj) {
        let el = document.querySelector('form-liloo-login')
        let action = el.getAttribute("action")
        let user = el.getAttribute("user")              
        let html = 
        `<form>
            <input type="hidden" name="action" value="${action}">
            <input type="hidden" name="user" value="${user}">
            <div>
                <div>
                    <label for="nome">Nome</label>
                    <input id="nome" type="text">
                </div>
            </div>
            <div>
                <div>
                    <label>E-mail</label>
                    <input type="text">
                </div>
            </div>
            <div>
                <div>
                    <button>Enviar</button>
                </div>
            </div>
        </form>
        `
        el.innerHTML = obj.before + html + obj.after
    }
}

export default lilooComp
