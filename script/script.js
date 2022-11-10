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
    console.log(event.target.value);
    setValues(event.target.name,event.target.value);
}
function setPixels(event){
    event.target === height ? n1.innerText = event.target.value : undefined;
    event.target === width ? n2.innerText = event.target.value : undefined;
    event.target === border_radius ? n3.innerText = event.target.value : undefined;
}
function setCode(){
    let text = values.element.style.cssText.split('; ').join(';\n');
    code.innerHTML = text;/*cssText pega TODO css do elemento!!*/
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

/*save with local storage*/
function setValues(name,value){
    localStorage[name] = value;
}
/*set style on button*/
function setStyle(){
   let chaves = Object.keys(localStorage);
   chaves.forEach((e) => {
        console.log('valor da key: ',localStorage[e]);
        values[e](localStorage[e]);     
   });
   setCode();
}
setStyle();

let btn_clear = document.querySelector('[data-clear]');
btn_clear.addEventListener('click',removeValues);
function removeValues(){
    localStorage.clear();
}

/*tooltip*/
btn_clear.addEventListener('mouseover',tooltip);
function tooltip(event){
    let div = createTooltip(event);
    this.addEventListener('mouseleave',() => {
        div.remove();
    });
}
function createTooltip(event){
    let div = document.createElement('div');
    div.innerText = 'A sua personalização não ficará mais salva caso feche o browser';
    div.classList.add('tooltip');
    document.body.append(div);
    //console.log(btn_clear.offsetLeft);
    //console.log(btn_clear.offsetTop);
    div.style.left = btn_clear.offsetLeft + 'px';
    div.style.top = btn_clear.offsetTop + 100 + 'px';
    return div;
}