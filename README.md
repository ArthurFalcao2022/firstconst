# firstconst
//primeira div
const quadrado = document.createElement('div');

//adicionando conteudo



quadrado.setAttribute( 'id', 'quadrado');
quadrado.style.height = '300px';
quadrado.style.width = '100%';
quadrado.style.backgroundColor = 'red';
quadrado.style.border = 'solid'
quadrado.style.display = 'flex';
quadrado.style.alignItems = 'center';
quadrado.style.justifyContent = 'center';

document.body.appendChild(quadrado);

//criando titulo 
const text = document.createTextNode('Calculadora Rubro Negra') 

quadrado.appendChild(text);




//fim do titulo

 

//fim do conteudo da primeira div

//criando logo
 
const logo = document.createElement('img');
logo.style.width = '250px';
logo.style.height = '170px';
logo.src = 'escudo.jpg';
logo.style.alignItems = 'center'
logo.style.justifyContent = 'center'

quadrado.appendChild(logo);
//fim da logo

//criando ''cadastro''
const cadastro = document.createElement('form');
cadastro.setAttribute('id', 'caixa');
cadastro.style.height = '10px';
document.body.appendChild(cadastro);


//criando terceira div

const caixa2 = document.createElement('div');
caixa2.setAttribute('id', 'caixa2');
caixa2.style.display = 'flex';
caixa2.style.justifyContent = 'center';
caixa2.style.alignItems = 'center';
cadastro.appendChild(caixa2);

//criando caixa interativa

const caixa3 = document.createElement('input');
caixa3.setAttribute('id', 'caixa3');
caixa3.type = 'text';
caixa3.placeholder = 'Insira seu nome completo';
caixa3.display = 'flex'
caixa3.style.width = '200px';
caixa3.style.height = '60px';
caixa3.style.border = 'solid';
caixa3.style.alignItems = 'center'


cadastro.appendChild(caixa3);

//fim da caixa3 interativa

//crianco caixa interativa
const caixa4 = document.createElement('input');
caixa4.setAttribute('id', 'caixa4');
caixa4.type = 'number';
caixa4.placeholder = 'Insira sua idade';
caixa4.display = 'flex'
caixa4.style.width = '200';
caixa4.style.height = '60px';
caixa4.style.border = 'solid';
caixa4.style.alignItems = 'center'
cadastro.appendChild(caixa4);

// fim da caixa4 interativa

//criando caixa interativa
const  caixa5 = document.createElement('div');

caixa5.setAttribute('id', 'caixa5');
caixa5.style.display = 'flex';
caixa5.style.justifyContent = 'center';
caixa5.style.alignItems = 'center';


cadastro.appendChild(caixa5);

// criando input altura

const caixa6 = document.createElement('input');
caixa6.type = 'number';
caixa6.setAttribute('id', 'caixa6')
caixa6.placeholder = 'Insira sua altura';
caixa6.display = 'flex'
caixa6.style.width = '200px'
caixa6.style.height = '60px'
caixa6.style.border = 'solid'


caixa5.appendChild(caixa6);
