const el = function(selector) {
    const elements = document.querySelectorAll(selector);
  
    const api = {
      elements: elements,
      addClass: function(className) {
        elements.forEach(function(element) {
          element.classList.add(className);
        });
        return api;
      },
      removeClass: function(className) {
        elements.forEach(function(element) {
          element.classList.remove(className);
        });
        return api;
      },
      attr: function(attribute, value) {
        if (typeof value === 'undefined') {
          return elements[0].getAttribute(attribute);
        } else {
          elements.forEach(function(element) {
            element.setAttribute(attribute, value);
          });
          return api;
        }
      },
      on: function(event, callback) {
        elements.forEach(function(element) {
          element.addEventListener(event, callback);
        });
        return api;
      },
      // Outros métodos conforme necessário
    };
  
    if (elements.length === 1) {
      return elements[0]; // Se houver apenas um elemento, retorne-o diretamente
    } else {
      return api; // Caso contrário, retorne o objeto com métodos encadeados
    }
  };