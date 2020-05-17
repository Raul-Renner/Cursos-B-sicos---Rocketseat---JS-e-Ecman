var inputElement = document.querySelector('.repositorio');
var btn_adicionar = document.querySelector('.botao');
var ulElement = document.querySelector('.lista');
var conteudoInpt = inputElement;
var conteudoURLRepositorio;
var itemElement;

var lista_repository = JSON.parse(localStorage.getItem('lista_repository')) || [];

function adicionarRepositorio(){
    ulElement.innerHTML = '';
    for(repository of lista_repository){
        var liElement = document.createElement('li');
        itemElement = document.createTextNode(repository);
        liElement.appendChild(itemElement);
        ulElement.appendChild(liElement);

    }
}
var minhaPromise = function(){
    return new Promise (function(resolve, reject){
        
        btn_adicionar.onclick = function(){
            var xhr = new XMLHttpRequest();
            conteudoURLRepositorio = 'https://api.github.com/users/' + conteudoInpt.value;
            xhr.open('GET', conteudoURLRepositorio );
            xhr.send(null);
                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                                resolve('Repositorio encontrado!');
                            }else{
                                reject('Repositorio nao encontrado!');
                            }
                    }
                }
            }    
    });
}
adicionarRepositorio();

function addItem(conteudoURLRepositorio){

    lista_repository.push(conteudoURLRepositorio);
    inputElement.value = '';
    adicionarRepositorio();
    saveToStorage();
}

minhaPromise()
    .then(function(response){
        alert(response);
        addItem(conteudoURLRepositorio);

    })
    .catch(function(error){
        alert(error);
    });

    function saveToStorage(){
        localStorage.setItem('lista_repository', JSON.stringify(lista_repository));
    }