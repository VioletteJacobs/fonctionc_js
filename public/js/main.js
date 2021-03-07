// - ```js 
//     let direBonjour = function(prenom, nom){
//         console.log(`Bonjour ${prenom} ${nom}!`);
//     }
//     direBonjour("maxime", "herbiet");
//     ```

// # EXO1
// - Créez une fonction qui prend deux paramètres, et les additionne, et faites un console.log du résultat.(Additionner)
// let add = (a,b) => {
//     return a + b
// }
// console.log  (add (7,2));

// # EXO2
// - Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

// let sous = (a,b) =>{
//     return a-b
// };
// console.log (sous(8,2));

// # EXO3  
// - Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

//  let mult= (a,b)=>{
//      return a*b
//  };
//  console.log (mult(2,5));

// # EXO4 
// - Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

// let div = (a,b) =>{
//     return a/b
// };
// console.log (div (12,3));


// # EXO5
// - Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
// let div= (a,b) =>{
//  return a%b
// };
// console.log (div (12,2))


// # EXO6
// - Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(carré)
// let carre = (a)=>{
//     return a*a
// };
// console.log (carre(2));


// # EXO7
// - Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
// let expo= (a,b) =>{
//     return a^b
// };
// console.log (expo (2,3));


// # EXO8
// - Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;
// let capitalize = (string) =>{
//     return string.charAt(0).toUpperCase()+string.substr(1).toLowerCase();
// };
// console.log (capitalize ("bonjour Les Petits cHaAts"))

// # EXO9
// - Créer une function [calcul] ayant 3 paramètres
// - nbr1 , operator , nbr2
// - Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)
// let calcul= (nb1,operateur,nb2)=>{
//     switch (operateur){
//         case "+": 
//             return nb1 + nb2;
//         case "-":
//             return nb1- nb2;
//         case "*":
//             return nb1* nb2;
//         case "/":
//             return nb1* nb2;
//         default:
//             return "error";
//     };
// }
// let operateur= prompt ("choisis un opérateur")
// let nb1= prompt ("choisis un nombre")
// let nb2= prompt ("choisis un autre nombre")
// console.log (calcul(2,"*",4));

// # EXO10
// - Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
// let nbr = prompt ("donne moi un chiffre");
// let envers = (n)=>{
//     n = n.split ("").reverse().join ("");
//     return n
// };
// // split enleve les guillements et transforme donc le nbr en tableau puis le join permet de remettre les guillements
// console.log (envers(nbr))


// # EXO11
// - Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// - Qui répond "Le num x est divisible par 2 x:2 = z"
// - Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
// let Q =parseInt (prompt ("Ecrivez un chiffre divisible par 2"))
// let chiffre =  Number (prompt ("Choisis un chiffre"));
// let divp2 = (a) =>{
//     switch (Number.isInteger (a/2)){
//         case true:
//             alert (`${a} est pair`)
//             break;
//         case false:
//             alert (`${a} n'est pas pair`)
//             default:
//                 alert ("ce n'est pas un chiffre")
//                 break
//     };
// };
// divp2(chiffre)
// let divp2= (nbr)=>{
//     switch (Q%2 == 0){
//         case true:
//             alert ("c'est bon");
//             return nbr
//         case false:
//             alert ("ce n'est pas correct");
//             return nbr;
//     }
// }

// # EXO12
// - Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// let logIn= (a) => {
//     do{
//         let question= prompt ("entrez votre mdp : ").toLowerCase();
//         if (question == "mdp"){
//             alert ("vous êtes bien connecté.e");
//             return a
//         }else{
//             alert ("c'est mauvais")
//         };

//     } while (question != "mdp")
// };
// logIn(question);
// # EXO13
// - Créer un tableau [codingSchool12] vide.
// - Créer une fonction qui permet d'ajouter quelqu'un au tableau
// - Créer une fonction qui permet de retirer quelqu'un au tableau
// - Avec la capture d'écran reproduisez les entrées / sorties de la classe
// let coding15 = [];
// let ajout = (a) => {
//     return coding15.push (a);
// };
// let retrait =(b)=>{
//     return  coding15.pop (b);
// };

// ajout ("vio "+ "andré "+ " martin")

// ajout ("paul")
// retrait ("vio")
// console.log (coding15)


// version 2
let coding= [];
let choix; 
let prenom
let compt=0;
// fonctions
let ajout = (a,c)=> {
    c = c || undefined
    if( c=== undefined){
        coding.push (a)
        return a
    }else{
        coding.push (a,c)
        return a,c
    }
}

let retrait = (b) => {
    if (coding.indexOf(b) != -1){
        coding.splice (coding.infexOf(b),1);
    }else{
        console.log (`${b} n'est pas là`)
    }
}




let Q= prompt ("Veux tu faire entrer ou sortir quelqu'un.e? (oui/ non)").toLowerCase();
do {
    choix= prompt ("veux tu retirer ou ajouter? (retirer/ajouter)").toLowerCase();
    if (choix === "retirer"){
        prenom = prompt("qui?").toLowerCase();
        if (indexOf[prenom]== prenom){
            retrait(prenom);
            console.log (coding);
        }else{
            alert ("cette personne n'est pas là");
        };
    }else if (choix== "ajouter"){
        prenom = prompt("qui?").toLowerCase();
        ajout(prenom);
        console.log (coding);
    }
    else{
        alert ("c'est fini!")
    }
    // choix = prompt ("Veux-tu retirer, ajouter ou finir?").toLowerCase();
} while (Q == "oui");
alert ("ok")
console.log (coding)
