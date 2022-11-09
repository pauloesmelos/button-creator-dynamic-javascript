let form = document.getElementById('controles');
let code = document.querySelector('.code');
let newButton = document.querySelector('.botao');
let title = document.querySelector('.title').innerText += ' </>';

/*tamanho do botão em tempo real*/
let n1 = document.querySelector('.number1');
let n2 = document.querySelector('.number2');
let n3 = document.querySelector('.number3');

let border_radius = document.querySelector('#borderRadius');
let height = document.querySelector('#height');
let width = document.querySelector('#width');

const values = {
    element: newButton,
    text(valor){
        this.element.innerText = valor;
    },
    color(valor){
        this.element.style.color = valor;
    },
    backgroundColor(valor){
        this.element.style.backgroundColor = valor;
    },
    height(valor){
        this.element.style.height = valor + 'px';
    },
    width(valor){
        this.element.style.width = valor + 'px';
    },
    border(valor){
        this.element.style.border = valor;
    },
    borderRadius(valor){
        this.element.style.borderRadius = valor + 'px';
    },
    fontSize(valor){
        this.element.style.fontSize = valor + 'px';
    },
    fontFamily(valor){
        this.element.style.fontFamily = valor;
    }
};

/*pegar o valor de height e width em tempo real*/
form.addEventListener('input',getvalue);/*input pra poder pegar o range*/
form.addEventListener('change',setCode);
function getvalue(event){
    values[event.target.name](event.target.value);//passagem de valor via parametro do método
    setPixels(event);
}
function setPixels(event){
    event.target === height ? n1.innerText = event.target.value : undefined;
    event.target === width ? n2.innerText = event.target.value : undefined;
    event.target === border_radius ? n3.innerText = event.target.value : undefined;
}
function setCode(event){
    let text = values.element.style.cssText.split('; ').join(';\n');
    console.log(text);
    event.target.name !== 'text' ? code.innerHTML = text : undefined;/*cssText pega TODO css do elemento!!*/
}
/*hover personalizado: */
newButton.addEventListener('mouseover',hover);
function hover(){
    newButton.style.opacity = '.5';
    newButton.style.cursor = 'pointer';
    this.addEventListener('mouseleave',removehover);
}
function removehover(){
    this.style.removeProperty('opacity','cursor');
}

/*efeito máquina escrever logo*/
const logo = document.querySelector('.logo');
let letters = logo.innerText.split('');

logo.innerText = '';//setando vazio no texto da logo
letters.forEach((e,i) => {
    setTimeout(() => {
        logo.innerText += e;
    },150 * i);
});