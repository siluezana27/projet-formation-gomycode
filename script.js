const nom = document.getElementById("nom");
const email = document.getElementById("email");
const age = document.getElementById("age");
const message = document.getElementById("message");
const envoyer = document.getElementById("envoyer");

function contraintenom(ev) {
    if (nom) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-nom').innerHTML = "";
       let error = '';
       if (!content) {
          error = 'votre nom est obligatoire';
       } else if (!/^[a-zA-Z0-9]{3,20}$/.test(content)) {
          error = "votre nom est incorrect ";
       }
       document.getElementById('error-nom').innerHTML = error;
       validateForm();
    }
}

function contraintemail(ev) {
    if (email) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-Email').innerHTML = "";
       let error = '';
       if (!content) {
          error = 'votre email est obligatoire';
       } else if (!/^[a-z0-9_-]+[@][a-z]{2,6}\.[a-z]{2,8}$/.test(content)) {
          error = "votre email est incorrect ";
       }
       document.getElementById('error-Email').innerHTML = error;
       validateForm();
    }
}

function contrainteage(ev) {
    if (age) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-Age').innerHTML = "";
       let error = '';
       if (!content) {
          error = "votre age est obligatoire";
       } else if (!/^[0-9]{1,3}$/.test(content)) {
          error = "votre age est incorrect";
       }
       document.getElementById('error-Age').innerHTML = error;
       validateForm();
    }
}

function contraintemessage(ev) {
    if (message) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-message').innerHTML = "";
       let error = '';
       if (!content) {
          error = "le message est obligatoire";
       } else if (!/^[a-zA-Z0-9]{5,1000}$/.test(content)) {
          error = "nombre de caractere issuffissant ou limité ";
       }
       document.getElementById('error-message').innerHTML = error;
       validateForm();
    }
}

function validateForm() {
    const nomValid = !document.getElementById('error-nom').innerHTML;
    const emailValid = !document.getElementById('error-Email').innerHTML;
    const objetValid = !document.getElementById('error-Age').innerHTML;
    const messageValid = !document.getElementById('error-message').innerHTML;
    envoyer.disabled = !(nomValid && emailValid && objetValid && messageValid);
}

nom.addEventListener('keyup', contraintenom);
email.addEventListener('keyup', contraintemail);
age.addEventListener('keyup', contrainteage);
message.addEventListener('keyup', contraintemessage);

validateForm(); // Initial validation




