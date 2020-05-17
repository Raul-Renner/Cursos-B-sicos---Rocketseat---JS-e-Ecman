//import {soma as somaf, sub } from './funcoes';
//import * as funcooes from './funcoes';
//no e necessio utilizar o mesmo no da funcao criada no arquivo importado
//import soma_function from './soma';
//console.log(somaf(1,2));

//console.log(funcooes.soma(1,2));
//console.log(funcooes.sub(5,3));

/**const minhaPrimise = () => new Promise((resolve, reject) =>{
    setTimeout(() => {resolve('OK')}, 2000);
});

/**minhaPrimise().then(response =>{
    console.log(response);
});*/

/**async function executarPromise(){
    console.log(await minhaPrimise());
    console.log(await minhaPrimise());
    console.log(await minhaPrimise());
}*/
/** 
const minhaPromise = async () => {
    console.log(await minhaPrimise());
    console.log(await minhaPrimise());
    console.log(await minhaPrimise());
};
minhaPromise();*/
//desafio 2
/**import ClasseUsuario from "../funcoes";
import {idade as IdadeUsuarioUsuario} from "../funcoes";


ClasseUsuario.info();

console.log(IdadeUsuarioUsuario);*/


//desafio 3

// Funão delay aciona o .then após 1s
/**const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo(){
await delay().then(() => {
console.log('1s');
delay().then(() => {
console.log('2s');
delay().then(() => {
console.log('3s');
 });
 })
 });
}
umPorSegundo();


import axios from 'axios';
async function getUserFromGithub(user) {
 await axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


class Github {
  static async getRepositories(repo) {
    await axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Repositório não existe');
    })
    }
   }
   Github.getRepositories('rocketseat/rocketseat.com.br');
   Github.getRepositories('rocketseat/dslkvmskv');


   const buscaUsuario = async usuario => {
    await axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    });
   }
   buscaUsuario('diego3g'); */

   import api from './api';

   class App{
       constructor(){
           this.repositories = [];

           this.formEl = document.getElementById('repor-form');

           this.inputEl = document.querySelector('input[name = repositorio]');

           this.listulEl = document.getElementById('repo-list');

           this.registerHandlers();
       }
       registerHandlers(){
           this.formEl.onsubmit = event => this.addRepository(event);
       }
       setLoading(loading = true){
           if(loading === true){
               let loadingEl = document.createElement('span');
               loadingEl.appendChild(document.createTextNode('Carregando...'));
               loadingEl.setAttribute('id','loading');
               loadingEl.style.color = "#000077";
               this.formEl.appendChild(loadingEl);
            }else{
                document.getElementById('loading').remove();
           }
       }
       async addRepository(event){
           event.preventDefault();

           const repoInput = this.inputEl.value;
            console.log(repoInput);
           if(repoInput.length === 0)
               return;
            
            this.setLoading();   
            try{
                const response = await api.get(`/users/${repoInput}`);

                const {name, bio, html_url, avatar_url } = response.data;
                

                this.repositories.push({
                name,
                bio,
                avatar_url,
                html_url, 
                });
            
                this.render();
                this.inputEl.value = '';
            }catch(err){
                alert('Repositorio nao encontrado!');
            }  
            
            this.setLoading(false);
        }

        render(){
            this.listulEl.innerHTML = " ";

        

           this.repositories.forEach(repo =>{
               let imgEl = document.createElement('img');
               imgEl.setAttribute('src', repo.avatar_url);

               let titleEl = document.createElement('strong');
               titleEl.appendChild(document.createTextNode(repo.name));

               let descricaoEl = document.createElement('p');
               descricaoEl.appendChild(document.createTextNode(repo.bio));

               let html_urlEl = document.createElement('a');
               html_urlEl.setAttribute('target','_blank');
               html_urlEl.setAttribute('href', repo.html_url);
               html_urlEl.appendChild(document.createTextNode('Acessar'));

               let listliEl = document.createElement('li');
               listliEl.appendChild(imgEl);
               listliEl.appendChild(titleEl);
               listliEl.appendChild(descricaoEl);
               listliEl.appendChild(html_urlEl);


               
               this.listulEl.appendChild(listliEl);

           })
       }

   }
   new App();


   


