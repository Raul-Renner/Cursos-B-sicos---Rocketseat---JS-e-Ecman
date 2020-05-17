var ulElement = document.querySelector('.list_cursos');
var inputElement = document.querySelector('#novo_curso');
var buttonElement = document.querySelector('.btn_add');




lista_cursos = JSON.parse(localStorage.getItem('lista_todos')) || [];

function rederizarElementos(){
    ulElement.innerHTML = '';
    for (list of lista_cursos){
        var listElement = document.createElement('li');
        var item = document.createTextNode(list);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = lista_cursos.indexOf(list);
        linkElement.setAttribute('onclick','deletarItem('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        linkElement.style.margin = '5px';

        listElement.appendChild(item);
        listElement.appendChild(linkElement);
        
        ulElement.appendChild(listElement);

    }
}

rederizarElementos();

function addItem(){
    var inputValue = inputElement.value;

    lista_cursos.push(inputValue);
    inputElement.value = '';
    rederizarElementos();
    saveToStorage();
}

buttonElement.onclick = addItem;

function deletarItem(pos){
    lista_cursos.splice(pos, 1);

    rederizarElementos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('lista_todos', JSON.stringify(lista_cursos));
}