//primeira div 
const firstdiv = document.createElement('div');

firstdiv.setAttribute( 'id', 'quadrado'); 
firstdiv.style.height = '200px'; 
firstdiv.style.width = '100%'; 
firstdiv.style.backgroundColor = 'red'; 
firstdiv.style.border = 'solid' 
firstdiv.style.display = 'flex'; 
firstdiv.style.alignItems = 'center'; 
firstdiv.style.justifyContent = 'space-around';
firstdiv.style.flexDirection = 'column-reverse';

document.body.appendChild(firstdiv);
//fim primeira div

//texto div
const text = document.createTextNode('Calculadora Rubro Negra')

firstdiv.appendChild(text);
//fim texto

//criando logo
const logo = document.createElement('img'); 
logo.style.width = '250px'; 
logo.style.height = '170px'; 
logo.src = 'escudo.jpg'; 
logo.style.alignItems = 'center' 
logo.style.justifyContent = 'center'

firstdiv.appendChild(logo); 
//fim da logo

//div do meio
const meio = document.createElement('div');
meio.style.height = '250px'
meio.style.width = '100%'
meio.style.backgroundColor = 'black'
meio.style.border = 'solid'
meio.style.display = 'flex'
meio.style.alignContent = 'center'
meio.style.justifyContent = 'center'

document.body.appendChild(meio)
//fim da div 

//criando div do input
const div_dados = document.createElement('div'); 
div_dados.setAttribute('id', 'div_dados'); 
div_dados.style.height = '250px';
div_dados.style.width = '50%';
div_dados.style.backgroundColor = 'red';
div_dados.style.display = 'flex';
div_dados.style.justifyContent = 'space-around';
div_dados.style.alignItems = 'center';
div_dados.style.flexDirection = 'column';
meio.appendChild(div_dados);
//fim da div do ''cadastro''

//criando input nome
const inputnome = document.createElement('input'); 
inputnome.setAttribute('id', 'inputnome'); 
inputnome.type = 'text'; 
inputnome.placeholder = 'Insira seu nome completo'; 
inputnome.style.height = '20px';
inputnome.style.width = '100px';
inputnome.style.backgroundColor = 'red'

div_dados.appendChild(inputnome);
//fim do input nome

//crianco input idade
const idade = document.createElement('input');
idade.setAttribute('id', 'idade'); 
idade.type = 'number'; 
idade.placeholder = 'Insira sua idade'; 
idade.style.height = '20px';
idade.style.width = '100px';
idade.style.backgroundColor = 'yellow';
 
div_dados.appendChild(idade);
// fim do input idade

//criando input peso  
const peso = document.createElement('input');
peso.setAttribute('id', 'peso'); 
peso.type = 'number'
peso.placeholder = 'Insira seu peso'
peso.style.height = '20px';
peso.style.width = '100px';
peso.style.backgroundColor = 'red';

div_dados.appendChild(peso);
//fim do input peso

// criando input altura
const altura = document.createElement('input'); 
altura.setAttribute('id', 'altura')
altura.type = 'number';
altura.placeholder = 'Insira sua altura'; 
altura.style.height = '20px';
altura.style.width = '100px';
altura.style.backgroundColor = 'yellow';

div_dados.appendChild(altura);
//fim do input altura

//criando botão 
const botão = document.createElement('button');
botão.setAttribute('id', 'botão')
botão.type = 'button';
botão.innerText = 'IMC';
botão.style.width = '100px'
botão.style.height = '43px'
botão.style.backgroundColor = 'red'
botão.style.border = 'solid'

div_dados.appendChild(botão);
//fim do botão

// criando uma div dentro da div meio
const coresdentro = document.createElement('div');
coresdentro.style.display = 'block'

meio.appendChild(coresdentro)
//fim da div dentro da div meio

//criando div de cores
const corgray = document.createElement('div');
corgray.setAttribute('id', 'corgray');

corgray.style.height = '10px'
corgray.style.width = '100px'
corgray.style.backgroundColor = 'gray'
corgray.style.border = 'solid'
corgray.style.position = 'relative'
corgray.style.alignItems = 'flex-end'
corgray.style.justifyContent = 'flex-end'

coresdentro.appendChild(corgray)
//fim da div cores

//criando div green
const corgreen = document.createElement('div');
corgreen.setAttribute('id', 'green');

corgreen.style.height = '10px'
corgreen.style.width = '100px'
corgreen.style.backgroundColor = 'green'
corgreen.style.border = 'solid'
corgreen.style.position = 'relative'
corgreen.style.alignItems = 'flex-end'
corgreen.style.justifyContent = 'flex-end'

coresdentro.appendChild(corgreen)
//fim da div green


//criando div yellow
const coryellow = document.createElement('div');
coryellow.setAttribute('id', 'corgray');

coryellow.style.height = '10px'
coryellow.style.width = '100px'
coryellow.style.backgroundColor = 'yellow'
coryellow.style.border = 'solid'
coryellow.style.position = 'relative'
coryellow.style.alignItems = 'flex-end'
coryellow.style.justifyContent = 'flex-end'

coresdentro.appendChild(coryellow)
//fim da div yellow

//criando div purple
const corpurple = document.createElement('div');
corpurple.setAttribute('id', 'corpurple');

corpurple.style.height = '10px'
corpurple.style.width = '100px'
corpurple.style.backgroundColor = 'purple'
corpurple.style.border = 'solid'
corpurple.style.position = 'relative'
corpurple.style.alignItems = 'flex-end'
corpurple.style.justifyContent = 'flex-end'

coresdentro.appendChild(corpurple)
//fim da div purple

//criando div red
const corred = document.createElement('div');
corred.setAttribute('id', 'corgray');

corred.style.height = '10px'
corred.style.width = '100px'
corred.style.backgroundColor = 'red'
corred.style.border = 'solid'
corred.style.position = 'relative'
corred.style.alignItems = 'flex-end'
corred.style.justifyContent = 'flex-end'

coresdentro.appendChild(corred)
//fim da div red

//criando div resultados
const resultados = document.createElement('div');

resultados.setAttribute.class = 'id','resultados'

resultados.style.height= '100px'
resultados.style.width = '100%'
resultados.style.border = 'solid'
resultados.style.display = 'flex'
resultados.style.justifyContent = 'center'
resultados.style.alignItems = 'center'
resultados.style.backgroundColor = 'red'

document.body.appendChild(resultados);
//fim da div resultados


//adicionando conteudo ao container
botão.addEventListener("click", function(){
   
const nome = document.getElementById("inputnome").value;
const altura = document.getElementById("altura").value;
const idade = document.getElementById("idade").value;
const peso = document.getElementById("peso").value;
const media = peso / (altura * altura).toFixed(1);
  
const conclusão = document.createElement('div');

resultados.appendChild(conclusão);
  
if(media < 18.5){
conclusão.style.backgroundColor = 'gray';
conclusão.textContent = `Rubro negro(a), ${nome}! Seu IMC final é ${media.toFixed(2)} e você está abaixo do peso.`;
  
}else if(media >= 18.5 && media < 24.9){
conclusão.style.backgroundColor = 'green';
conclusão.textContent = `Rubro negro(a), ${nome}! Seu IMC final é ${media.toFixed(2)} e você está com o peso normal.`;
  
}else if(media >= 25.0 && media < 29.9){
conclusão.style.backgroundColor = 'yellow';
conclusão.textContent = `Rubro negro(a), ${nome}! Seu IMC final é ${media.toFixed(2)} e você está com sobrepeso.`;
  
}else if(media >= 30.0 && media < 39.9){
conclusão.style.backgroundColor = 'purple';
conclusão.textContent = `Rubro negro(a), ${nome}! Seu IMC final é ${media.toFixed(2)} e você está com obesidade grau I.`;
  
}else if(media > 40.0){
conclusão.style.backgroundColor = 'red';
conclusão.textContent = `Rubro negro(a), ${nome}! Seu IMC final é ${media.toFixed(2)} e você está com obesidade grau II.`;
}
  
setTimeout(function() {
conclusão.style.display = 'none';
}, 10000); 
  
  
});
//fim do container
