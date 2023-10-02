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
        return fetch(lilooRequest.Root() + Obj.path + '.php', {
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
        let Path = Obj.path
        // return fetch(lilooRequest.Root() + Path + '.php', {
        return fetch(Path + '.php', {
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

                // RETORNO EM ARRAY 
                // if (data.array) {
                //     $.each(data.array, function (key, value) {
                //         switch (value.type) {
                //             case 'append': $(value.element).append(value.content); break;
                //             case 'prepend': $(value.element).prepend(value.content); break;
                //             case 'input': $(value.element).val(value.content); break;
                //             default: $(value.element).html(value.content); break;
                //         }
                //     });
                // }


                // RETORNO COM A NOTIFICAÇÃO PADRÃO DA PLATAFORMA
                if (data.notify) {
                    document.querySelector('.callback').innerHTML = data.notify;
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
     * Envia e formulários serializando os dados e retornando em callback function
     */
    Form: (Obj) => {       
        lilooRequest.Event({
            action: Obj.action,
            path: Obj.path, 
            data: JSON.stringify(lilooRequest.serializeFormToObject(Obj.form)),
            success: function(res){
                Obj.success(res)
            }
        })
        return false
    },

    /**
     * Serializa as informações do forma para o envio
     */
    serializeFormToObject: function (form) {
        let objForm = {};
        let formData = new FormData(form);
        for (let key of formData.keys()) {
            objForm[key] = formData.get(key);
        }
        return objForm;
    }  

}