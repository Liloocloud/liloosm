/*!
  * Liloo JS v3.0 (https://cdn.liloo.com.br/)
  * Copyright Felipe Oliveira Lourenço - 26.04.2022
  * @version 3.0.2
  * @update 12.05.2022
  */

const lilooRequest = {

    /**
     * Base URL
     */
    Root: () => {
        return document.querySelector('body').getAttribute('root')
    },

    /**
     * Realiza requisições simples sem data "Body" (sem enviar dados)
     * apenas espera o retorno
     */
    Simple: async (Obj) => {
        return fetch(lilooV3.Root() + Obj.path + '.php', {
            method: "POST",
            mode: "cors",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(Obj)
        })
        .then( response => response.json() )
        .then( data => Obj.success(data) )
        .catch( error => console.error('Error: ', error) )
    },

    /**
     * Prepa os valores para a requisição
     */
    Event: async (Obj) => {
        $('[liloo-loader]').show()
        let Path = Obj.path
        return fetch(lilooV3.Root() + Path + '.php', {
            method: "POST",
            // mode: "cors",
            // cache: "no-store",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                // "Cache-Control": "public, max-age=31536000"
                'Access-Control-Allow-Origin': "*",
                // 'Access-Control-Max-Age': '86400'
            },
            // headers: { 'Content-Type': "application/json; charset=UTF-8" },
            body: JSON.stringify(Obj)
        })
            // Tratando a Promise (Requisição)
            .then(function (response) {
                if (!response.ok) {
                    throw Error('Erro ao executar requisição ' + response.statusText)
                }
                return response.json()
            })

            // Mostrando os Resultados
            .then(data => {  
                if (typeof data == 'string') {
                    data = JSON.parse(data)
                }
                // RETORNO PADRÃO CALLBACK
                if (data.callback) {
                    switch (data.type) {
                        case 'append': $('.callback').append(data.callback); break;
                        case 'prepend': $('.callback').prepend(data.callback); break;
                        default: $('.callback').html(data.callback); break;
                    }
                }
                // RETORNA POR ELEMENTO ID, CLASSE OU TAG
                if (data.element) {
                    switch (data.type) {
                        case 'append': $(data.element).append(data.content); break;
                        case 'prepend': $(data.element).prepend(data.content); break;
                        default: $(data.element).html(data.content); break;
                    }
                }
                // RETORNO EM ARRAY 
                if (data.array) {
                    $.each(data.array, function (key, value) {
                        switch (value.type) {
                            case 'append': $(value.element).append(value.content); break;
                            case 'prepend': $(value.element).prepend(value.content); break;
                            case 'input': $(value.element).val(value.content); break;
                            default: $(value.element).html(value.content); break;
                        }
                    });
                }
                // RETORNO NO SCRIPT_QUEUE
                if (data.script) {
                    $('.script_queue').html(data.script);
                }

                // RETORNO COM A NOTIFICAÇÃO PADRÃO DA PLATAFORMA
                if (data.notify) {
                    $('.callback').html(data.notify);
                }

                // RETORNO NO CONSOLE.LOG
                if (data.console) {
                    console.log(data.console)
                }

                // // Callback function
                if (typeof Obj.success != 'undefined') {
                    Obj.success(data)
                }

                return data
            })

            // Mostrando as Exceções
            .catch(error => {
                console.error(error)
            })
    },

    /**
     * Envia e formulários serializando os dados e 
     * retornando em callback function
     */
    Form: (Obj) => {
        $('[liloo-loader]').show()
        let serializeFormToObject = function (form) {
            var objForm = {};
            var formData = new FormData(form);
            for (var key of formData.keys()) {
                objForm[key] = formData.get(key);
            }
            return objForm;
        };
        lilooV3.Event({
            action: Obj.form.querySelector('input[name="action"]').value,
            path: Obj.form.querySelector('input[name="path"]').value,
            data: JSON.stringify(serializeFormToObject(Obj.form)),
            success: function(res){
                Obj.success(res)
            }
        })
        return false
    }

}


/**
 * Faz a leitura do formalário e prepara
 * para enviar a requisição por ajax
 * por padrão aceita POST
 */
$('[data-liloo-v3]').on('submit', function (e) {
    e.preventDefault()
    let form = $(this)
    var serializeFormToObject = function (form) {
        var objForm = {};
        var formData = new FormData(form);
        for (var key of formData.keys()) {
            objForm[key] = formData.get(key);
        }
        return objForm;
    };
    lilooV3.Event({
        action: form.find('input[name="action"]').val(),
        path: form.find('input[name="path"]').val(),
        data: JSON.stringify(serializeFormToObject(e.target)),
        success: function(res){
            console.log(res)
            Sweet.fire({
                title: (res.bool) ? 'Show!' : 'Ops!',
                text: res.message,
                icon: res.type,
            })
            return
        }
    })
    $('[liloo-loader]').hide()
    return false
})