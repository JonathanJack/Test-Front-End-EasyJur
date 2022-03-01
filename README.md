# vue-easyjur

Acessar Site: https://easyjurtest.netlify.app/

## Funcionalidades
- Header com Logo, nome do Estabelecimento, Nome do usuario, e imagem sendo calculada a partir da primeira letra desse usuário
- Lista de produtos
- Pesquisa de produtos
- Ordenação de produtos
- Gráfico sobre o total de vendas trimestrais de todos os produtos
- Gráfico sobre o total de vendas trimestrais de um protudo específico*
- Card com o produtos mais vendidos de cada categoria
- Card com lista de fornecedores, contendo uma tooltip com o telefone do estabelecimento e um link externo para conversar pelo whatsapp
- Responsivo
- Menu Lateral Mockado

## Next Features
- Gráfico de produto específico deve ser atualizado ao clicar em um CTA na lista de produto. 
- Criar Routes no menu Lateral
- Armazenar hisórico de vendas em até 12 meses, e tornar possível escolher quantos meses será mostrado no gráfico

## OBS
- Gráfico de produto específico não concluído ainda.
- Foi utilizado o MockAPI, porém os valores aleatórios gerado por ele, deixa o Layout muito irrealista( diversas categorias com somente 1 produto). Então foi decidido deixa-lo comentado no código, por enquanto.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint

### lodash 
npm i --save lodash
```
### Chart.js
npm install chart.js
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
