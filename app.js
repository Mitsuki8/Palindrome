//Ce code permet de vérifier si une phrase (chaine de caractères) est un palindrome
//(une phrase qui peut se lire dans les deux sens).
//Chaque fonction appelle la fonction suivante.
//Le travail a été réparti de sorte à pouvoir travailler tous les deux en même temps sur ce code.

//Amandine s'est occupée de la fonction supprimant les caractères spéciaux, de la fonction MAJ -> MIN
//ainsi que de la fonction de vérification.

//Franck s'est occupé de la fonction permettant d'enlever les accents, de la fonction d'inversion de sens
//ainsi que de la partie framework/css


//Déclaration des variables
let phrase = document.getElementById("phrase");
let verify = document.getElementById("verify");
let str1=""
let str2=""
let str3=""
let reverseStr=""
let avert=document.getElementById("avert")
let str=""

//Fonction qui permet de vider les innerHTML et d'éviter les refresh
function onEviteLesRefresh(){
	avert.setAttribute("class","") 
	avert2.setAttribute("class","")
	avert.innerHTML=""
	avert2.innerHTML=""
	enleverLesMoches()
}
	
//Fonction qui va enlever les caractères spéciaux et les remplacer par des espaces
function enleverLesMoches() {
	
	
	str = phrase.value
	reverseStr = ""
	str1 = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "") //remplace tous les caractères spéciaux
	tousDesNains()
}

//Fonction qui va remplacer tous les caractères MAJ en MIN
function tousDesNains(){
  str2 = str1.toLowerCase() //MAJ -> MIN
  tousDesChauves()
}


//Fonction qui va remplacer les caractères avec accents par des caractères sans accent
function tousDesChauves(){

    array = { à: "a", ç: "c", é: "e", è: "e", ô: "o", ï: "i" }; //plage des caractères avec/sans accent
	str3 = str2.replace(/[^\w ]/g, function (char) { //remplacement des caractères
    return array[char] || char;
  });
tournerManège()
}

//Fonction qui va permettre d'inverser la chaine de caractères
function tournerManège(){
	for (var i = str3.length - 1; i >= 0; i--) {  //boucle qui utilise la longueur de la phrase
    reverseStr += str3[i];
  }
  onVerifie()
}
 
//Fonction qui va vérifier si la phrase entrée correspond avec le résultat des 3 fonctions prècèdentes
function onVerifie(){
	if (reverseStr.length < 3){
		avert.innerHTML="<img src=\"https://zupimages.net/up/21/47/e3iq.png\" width=\"40px\" height=\"15px\">"+ "    Erreur, veuillez entrer au minimum 3 caractères valides"
	}
  else if (str3 === reverseStr) {
	  avert.innerHTML="C'est bien un palindrome"
	  avert.setAttribute("class","notification is-success is-light")
	  avert2.innerHTML=str+' = '+reverseStr
	  avert2.setAttribute("class","notification is-success is-light")
 
  } else {
	  avert.innerHTML="Ce n'est pas un palindrome"
	  avert.setAttribute("class","notification is-danger is-light")
	  avert2.innerHTML=str+' ≠ '+reverseStr
	  avert2.setAttribute("class","notification is-danger is-light")

  }
}

verify.addEventListener("click",onEviteLesRefresh)