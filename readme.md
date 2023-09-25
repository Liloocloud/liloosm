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
- [Buttons](#buttons)
- [Container](#container)
- [Grid](#grid)
- [Totop](#to-top)
- [Dark Mode](#dark-mode)


<table>
  <tr>
    <th>Coluna 1</th>
    <th>Coluna 2</th>
    <th>Coluna 3</th>
  </tr>
  <tr>
    <td>Valor 1A</td>
    <td>Valor 2A</td>
    <td>Valor 3A</td>
  </tr>
  <tr>
    <td>Valor 1B</td>
    <td>Valor 2B</td>
    <td>Valor 3B</td>
  </tr>
</table>




#### Accordion
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

#### Buttons
```html
<button xsm>button xsm</button>
<button sm>button sm</button>
<button teal-100>button sm</button>
<button md>button sm</button>
<button lg>button sm</button>
<button xlg>button sm</button>
```

#### Container
```html
<div container xsm blue-100>
    <h2>container xsm blue-100</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti sequi cum distinctio earum? Magnam numquam, quam praesentium tempore optio nam a culpa fuga similique pariatur aspernatur architecto, eos cumque.</p>   
</div>
```

#### Grid
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

#### To Top
Basta colocar o elemento abaixo e já estará funcionando
```html
<button totop></button>
```

#### Dark mode
Basta colocar o elemento abaixo e já estará funcionando incluindo os ícones "moon" e "sun" do framework fontawesome
```html
<button darkmode></button>
```




