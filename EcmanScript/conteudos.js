/** class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{

    constructor(){
        super();
        this.usuario = 'Raul';
    }

    mostrarUsuario(){
        console.log(this.usuario);
    }
     constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('new todo');
        console.log(this.todos);
    }
    
}

const todo = new TodoList();

document.getElementById('newTodo').onclick = function(){
    todo.add('Novo Todo');
}



todo.mostrarUsuario();

--------------------------------------------------------------------------------------------*/


// funcao eatatica

/**class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

-----------------------------------------------------------------------------------*/

//variaveis constantes

/**nao pode
const  a = 2;
 a =3 ; */

 /**const usuario = {nome : "Raul"};

 usuario.nome = "Renner";

 console.log(usuario.nome); 
 
 ----------------------------------------------------------*/



 //trabalhando com arrays

 /** 
 const array = [1,2,3,46,7,9];

 const newArray = array.map(function (item, index){
    return item * index;
 });


 console.log(newArray);

 const sum = array.reduce(function(total, next){
    return total + next;
 });

 console.log(sum);


 const filter = array.filter(function(item){
    return item % 2 === 0;
 });

 console.log(filter);

 const find = array.find(function(item){
    return item === 1;
 });

 console.log(find); 
 
 
 ------------------------------------------------------*/

 // arrow functions

 /** 
 const array = [1,2,3,46,7,9];
//quando houver um paramentro pode-se tirar os parenteses ao redor do parametro
//quando nao houver um retorno de varias linhas ou um corpo de dados
//pode-se fazer a operacao de retorno sem o return 
const newArray = array.map( item =>  item * 2 );
    
 

 console.log(newArray);

//funcao sendo instanciada por uma variavel do tipo CONST       
 const teste = () => ({nome : 'RAUL'});
 //    return 'teste';
 

 console.log(teste());
 
 ------------------------------------------------------*/

 //VALORES PADRAO   
 /*
 const soma = (a = 2, b = 3) => a + b;

 console.log(soma(3));
 console.log(soma());
 
 --------------------------------------------------------*/





 //DESESTRUTURACAO DE OBJETO - JS

 /** 
const usuario = {
    nome: 'Raul',
    idade: 22,
    endereco:{
        cidade: 'Horizonte',
        bairro: 'Buenos Aires',
    },
};

const {nome, idade, endereco: {cidade} } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostrarDados({nome, idade}){
    console.log(nome, idade);
}

mostrarDados(usuario);

-------------------------------------------------------------*/



/** 
//OPERADORES REST/SPREAD

    //REST
    const array = [1,4,5,8,7,9];
    const [a , b, c, ...d ] = array;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
            //a,b, ...params
    function soma(...params){
        return params.reduce((total, next) => total + next);
}  

console.log(soma(1, 2, 4));

    //SPREAD

   const arr1 = [1,2,4];
    const arr2 = [3,2,7];

    const arr3 = [ ...arr1, ...arr2];

    console.log(arr3);


    const usuario = {
        nome: 'Raul',
        idade: 22,
        endereco:{
            cidade: 'Horizonte',
            bairro: 'Buenos Aires',
        }
    };
    
    const usuario2 = { ...usuario, nome: 'Renner'};    
    console.log(usuario2);

------------------------------------------------------------*/



//Template Literals

/**
const nome = "Raul";
const idade = 23;

console.log(`Menu nome é  ${nome} e tenho ${idade} anos`);

 ----------------------------------------------------------------------*/

 //SINTAXE CURTA DE OBJETO (object short syntax)

/** const nome = "Raul";
const idade = 23;
const usuario = {
    //nome : nome
    nome,
    //idade : idade
    idade,
    empresa: "HONDA",
};

console.log(usuario); 

-------------------------------------------------------------*/


//desafio 1.1

/**
class  Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        return false;
    }
}
class Admin extends Usuario{
    constructor(email,senha){
        super(email,senha);
        this.email = email;
        this.senha = senha;
        this.admin = true;
    }

    isAdmin(){
        return this.admin;
    }
}

const user = new Usuario('raul@gmail.com','123');
const user2 = new Admin('raul@gmail.com','123');

console.log(user.isAdmin());
console.log(user2.isAdmin());

 -------------------------------------------------------------------------*/

 //desafio 2.1
 /**
 const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ]; */
   
    //Questao 2.1.1 - map
        /**
            const Lidade = usuarios.map(usuarios => usuarios.idade);
  
            console.log(Lidade);
---------------------------------------------------------------------------*/


    //Questao 2.1.2 - filter
        /**   
        const list = usuarios.filter( usuarios => usuarios.empresa == 'Rocketseat' && usuarios.idade >= 18);
        
        console.log(list);  

---------------------------------------------------------------------------------*/
    
    //Questao 2.1.3 - find
        /**
        const list = usuarios.find( usuarios => usuarios.empresa == 'Google');
        console.log(list);  
        
---------------------------------------------------------------------------------*/
    
    //Questao 2.1.4 
        /**const listMult = usuarios.map(usuarios => usuarios.idade * 2);

        const list = listMult.filter(item => item <= 50 );
        console.log(list); 
        
---------------------------------------------------------------------------------*/

// 3.1
/**const arr = [1, 2, 3, 4, 5];
const l = arr.map(item => item + 10); 
console.log(l);

--------------------------------------------------------------------------------*/

// 3.2
// Dica: Utilize uma constante pra function
/**
const usuario = ({ nome: 'Diego', idade: 23 });
const mostraIdade = (usuario) => usuario.idade;

console.log(mostraIdade(usuario));
 
---------------------------------------------------------------------------------*/

// 3.3
// Dica: Utilize uma constante pra function
/**
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
 
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

------------------------------------------------------------------------------------*/

// 3.4
/**
const promise = () => new Promise((resolve, reject) => resolve());
 
--------------------------------------------------------------------------------------*/

//QUESTAO 4.1
/**
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };


   const {nome, endereco : {cidade, estado}} = empresa;

   console.log(nome);
   console.log(cidade);
   console.log(estado);
 
 ---------------------------------------------------------------------- */

//QUESTAO 4.2
/**
const usuario = {
    nome : 'RAUL',
    idade: 21,
};
const {nome, idade} = usuario;
const mostrarInfor = (usuario) => `${nome} tem ${idade} anos.`;
   
console.log(mostrarInfor({ nome: 'Diego', idade: 23 }));

-----------------------------------------------------------------------*/
 
//QUESTAO 5.1

/**  const arr = [1, 2, 3, 4, 5, 6];

 const [x, ...y] = arr;
 console.log(x);
 console.log(y);

const soma = (...params) => params.reduce((total, next) => total + next);

console.log(soma(1,2));
console.log(soma(1,2,5,7));

----------------------------------------------------------------------------*/

//QUESTAO 5.2

/*const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

   const user = {...usuario, nome : 'Gabriel'};
   console.log(user);

   const user2 = {...usuario, cidade : 'Londras'};
   console.log(user2);
   
---------------------------------------------------------------------*/

//QUESTAO - 6
/*const usuario = 'Diego';
const idade = 23;
console.log(`O usuário  ${usuario} possui ${idade}  anos`);

----------------------------------------------------------------------*/


//QUESTAO - 7

/*
const nome = 'Raul';
const idade = 43;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};

console.log(usuario);
*/        