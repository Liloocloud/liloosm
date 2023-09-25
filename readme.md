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
- [Accordion](#accordion)
- [Modal](#modal)
- [Buttons](#buttons)
- [Container](#container)
- [Grid](#grid)
- [Totop](#to-top)
- [Dark Mode](#dark-mode)


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
- A largura das div's filhas serão automáticas ```<div grid>```
```html
<div grid>
    <div>
        <div card>
            <h2>Novo Modelo</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem tenetur, quidem, dolorem explicabo quo eaque illum rem nisi, placeat error repellendus natus iste quos libero delectus. Possimus iure ab modi!</p>
            <button>Show de bola</button>
        </div>
    </div>
    <div>
        <div card>
            <h2>Novo Modelo</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem tenetur, quidem, dolorem explicabo quo eaque illum rem nisi, placeat error repellendus natus iste quos libero delectus. Possimus iure ab modi!</p>
            <button>Show de bola</button>
        </div>
    </div>   
    <div>
        <div card>
            <h2>Novo Modelo</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem tenetur, quidem, dolorem explicabo quo eaque illum rem nisi, placeat error repellendus natus iste quos libero delectus. Possimus iure ab modi!</p>
            <button>Show de bola</button>
        </div>
    </div>
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




