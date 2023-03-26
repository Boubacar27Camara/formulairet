const form = document.querySelector('.form_container')
// const btn = document.querySelector('.form_container_button')
// const login = document.querySelector('.form_container_inputs');
const login1 = document.getElementById('email');
const password = document.getElementById('password');
const valider = document.getElementById('valider');

form.addEventListener('submit', (e) =>{
   e.preventDefault();
   form_verify();
});

// form.addEventListener('click', (e) =>{
//    e.preventDefault();
// form.style.background = 'red'
//  form_verify();
// })

// btn.addEventListener('click', () =>{
//    console.log('valider')
//    btn.style.cursor = 'pointer'
//    login.style.visibility = 'visible'
// })


function form_verify(){
   const userValue = login1.value.trim();
   const emailValue = password.value.trim();


if(userValue === ""){
   let message = "Username ne peut pas  etre vide";
   setError(userValue, message);

}else if(!userValue.match(/^[a-zA-Z]/)){
   let message = "Username doit commencer par lettre";
   setError(username, message)
}else{
   let letterNum = userValue.length;
   if(letterNum < 3){
   let message = "Username doit avoir moins 3 caracteres";
   setError(username,message)
}else{
   setSuccess(username);
}
}
}




