var mdp = document.getElementById('password');
var mdpconfirm = document.getElementById('confirmPassword');
var verif = document.getElementById('verification');
var textzone = document.getElementsByClassName('mdp');
// Plus bas, la variable verif (bouton) produit un événement lors du click sur celui-ci
// Dans ce cas, il affiche des bordures rouges autour des zones de textes si le mot de passe n'est pas indentique lors de la confirmation
// Au contraire, ces bordures sont vertes si les mots de passe sont identiques
verif.addEventListener('click',function(){
  if (mdp.value === mdpconfirm.value){
    mdp.style.border='solid green 3px';
    mdpconfirm.style.border='solid green 3px';
  } else{
    mdp.style.border='solid red 3px';
    mdpconfirm.style.border='solid red 3px';
  }
});
