// Chiediamo il Nome
const firstName = prompt('Come ti chiami?');
console.log("Il nome dell'utente è:", firstName);

// Chiediamo il Cognome
const lastName = prompt('Qual è il tuo Cognome?');
console.log("Il cognome dell'utente è:", lastName);

// Chiediamo il Colore Preferito 
const favoriteColor = prompt('Qual è il tuo Colore Preferito?');
console.log("Il colore preferito dell'utente è:", favoriteColor);

//Generiamo la Password 
const generatePassword = firstName + lastName + favoriteColor + 21;

document.getElementById('pwdgen').innerHTML = generatePassword; // Questa sarà la password generata

