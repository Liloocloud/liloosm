# Liloo SM

HTML, CSS e JS framework simplista e minimalista (SM) para auxiliar na construção de estruturas HTML de forma absurdamente rápida

## Instalação
Acesse <a href="https://liloo.com.br/liloosm/" target="_blank">Liloo SM Site Oficial</a>

Cole o link CSS antes do fechamento da tag ```<head>```
<code>https://liloo.com.br/liloosm/sm/v1.0/css/style.css</code>

Cole o link JS antes do fechamento da tag ```<body>```
<code>https://liloo.com.br/liloosm/sm/v1.0/js/lxm.js</code>

## Exemplo

## Componentes
- [Logotipo](#logo)
- [Accordion](#accordion)
- [Modal](#modal)
- [Header](#header)
- [Buttons](#buttons)
- [Container](#container)
- [Grid](#grid)
- [Totop](#to-top)
- [Dark Mode](#dark-mode)

### Logo
- Escolha os logotipos para cada modo
```html
<div logo>
    <img light src="logo-light.png" alt="" width="50%" style="display: none;">
    <img dark src="logo-dark.png" alt="" width="50%" style="display: none;">
</div>
```

### Accordion
```html
<div accordion>
    <div>
        <h4 header blue-100>Seção 1</h4>
        <div content>
            <h4>Conteúdo</h4>
            <p>Conteúdo da Seção 1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugit nisi
                accusamus, assumenda alias doloribus ipsum cum. Iste, odit deleniti vitae laudantium illum
                laboriosam fugit est? Officiis veniam nam exercitationem.</p>
            <button>Show de bola</button>
        </div>
    </div>
    <div>
        <h4 header>Seção 2</h4>
        <div content>
            <p>Conteúdo da Seção 2 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugit nisi
                accusamus, assumenda alias doloribus ipsum cum. Iste, odit deleniti vitae laudantium illum
                laboriosam fugit est? Officiis veniam nam exercitationem.</p>
        </div>
    </div>
    <div>
        <h4 header>Seção 3</h4>
        <div content>
            <p>Conteúdo da Seção 3 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugit nisi
                accusamus, assumenda alias doloribus ipsum cum. Iste, odit deleniti vitae laudantium illum
                laboriosam fugit est? Officiis veniam nam exercitationem.</p>
        </div>
    </div>
</div>
```

### Modal
Temos duas formas diferentes de fazer isso. A primeira possui cabaçalho, conteúdo e rodapé. Já a segunda opção é direta e mais simples

- Primeiro exemplo
```html
<button data-modal="primeira">Abrir Modal</button>
<div modal="primeira">
    <div>
        <span close>&times;</span>
        <div header>
            <h2>Primeira</h2>
        </div>
        <div content>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero ad facilis? Vitae odit quo illum reprehenderit, ducimus earum tempore suscipit tempora, sapiente sed nam repellat et commodi, ex maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi veniam quis atque hic labore quia eius sit, nam iure dolores cupiditate facere cum quidem repudiandae fugiat odit ducimus sunt quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi pariatur necessitatibus! Enim, ullam commodi voluptates neque adipisci praesentium quisquam voluptatibus illum facilis consectetur consequuntur earum nobis? Repudiandae, fuga aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus reiciendis accusamus minima molestiae, voluptatem aperiam tenetur veniam veritatis, voluptatum iure, illum molestias quidem sapiente! Iure numquam illum praesentium ut!
            </p>
        </div>
        <div footer>
            <button>Salvar</button>
        </div>  
    </div>
</div>
```
- Segundo exemplo
```html
<button data-modal="segunda">Abrir Modal</button>
<div modal="segunda">
    <div>
        <span close>&times;</span>
        <h2>Meu Modal 2</h2>
        <p>Este é um exemplo de modal simples.</p>
    </div>
</div>
```
### Header
```html
<header id="topo">
    <div data-src="{{ BASE_UPLOADS }}site/future.jpg"></div>
    <div container xsm>
        <div logo>
            <img light src="logo-light.png" alt="" width="50%" style="display: none;">
            <img dark src="logo-dark.png" alt="" width="50%" style="display: none;">
        </div>
        <h1>Seu site completo com a LilooSM</h1>
        <p>Desempenho e qualidade com regras SEO implementadas. Você foca no resultado e nós na solução. Entre em contato conosco para maiores detalhes</p>
        <div>
            <a button lg href="#" button>Fale Conosco</a>
            <a button lg out href="#" button>Mais informações</a>
        </div>
    </div>
</header>
```

### Buttons
```html
<button xsm>button xsm</button>
<button sm>button sm</button>
<button teal-100>button sm</button>
<button md>button sm</button>
<button lg>button sm</button>
<button xlg>button sm</button>
```

### Container
```html
<div container xsm blue-100>
    <h2>container xsm blue-100</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti sequi cum distinctio earum? Magnam numquam, quam praesentium tempore optio nam a culpa fuga similique pariatur aspernatur architecto, eos cumque.</p>   
</div>
```

### Grid
- Você pode usar ```<div grid>```,```<div grid1>```, ```<div grid2>```, ```<div grid3>```, ```<div grid4>``` ou ```<div grid5>```
- A largura das div's filhas de ```<div grid>``` serão automáticas  
- Se você precisa de apenas uma coluna use ```<div grid1>```
- Para duas ou mais colunas com larguras automaticas use ```<div grid2>``` ao ```<div grid5>```
- Obs.: você pode usar qualquer elemento filho podendo ser ```<a>```, ```<p>```, ```<div>```, ```<button>``` e etc., que todos os elementos serão ajustados de igual modo o tela. 
```html
<div grid5>
    <a href="#" button>
        <h3>Pipeline / Matriz</h3>
        <p>Follow Up</p>
    </a>
    <div>
        <h3>Oportunidades</h3>
        <p>Novos Negócios</p>
    </div>
    <button>
        <h3>Agendamento</h3>
        <p>Reuniões de venda</p>
    </button>
    <a href="#" button>
        <h3>Agendamento</h3>
        <p>Reuniões de venda</p>
    </a>
    <a href="#" button>
        <h3>Pipeline / Matriz</h3>
        <p>Follow Up</p>
    </a>
    <a href="#" button>
        <h3>Oportunidades</h3>
        <p>Novos Negócios</p>
    </a>
    <a href="#" button>
        <h3>Agendamento</h3>
        <p>Reuniões de venda</p>
    </a>
    <a href="#" button>
        <h3>Agendamento</h3>
        <p>Reuniões de venda</p>
    </a>
</div>
```

### To Top
Basta colocar o elemento abaixo e já estará funcionando
```html
<button totop></button>
```
### Dark mode
Basta colocar o elemento abaixo e já estará funcionando incluindo os ícones "moon" e "sun" do framework fontawesome
```html
<button darkmode></button>
```




