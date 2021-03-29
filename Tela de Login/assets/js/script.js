document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('o botao foi clicado');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('o mouse entrou');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('o mouse saiu');

});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();
   
   let email = document.querySelector('#email').value;
   let password = document.querySelector('#password').value;
   console.log(email, password);

   let json = {
       email,
       password
   };

   if (!json.email) {

    console.error("O cmapo email deve ser preenchido")
   } else if (!json.password){

        console.error('o Ccampos password deve ser preenchido')

   } else{
       console.log("dados validados com sucesso")
   }

})