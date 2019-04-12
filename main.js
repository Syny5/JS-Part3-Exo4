var mdp = document.getElementById('password');
var mdpconfirm = document.getElementById('confirmPassword');
var verif = document.getElementById('verification');
var textzone = document.getElementsByClassName('mdp');

verif.addEventListener('click',function(){
  if (mdp.value === mdpconfirm.value){
    mdp.style.border='solid green 3px';
    mdpconfirm.style.border='solid green 3px';
  } else{
    mdp.style.border='solid red 3px';
    mdpconfirm.style.border='solid red 3px';
  }
});
