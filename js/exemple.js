const route = "Travaux dans toute la Belgique";
//rechercher le mot "dans"
console.log(route.indexOf("ans")); //9
//rechercher le mot "dAns"
console.log(route.indexOf("Ans")); //-1
//tester la correspondance du début d'une chaine
console.log(route.startsWith("Travaux")); // true
console.log(route.startsWith("TraVaux")); // false
//tester la correspondance de la fin d'une chaine
console.log(route.endsWith("Belgique")); // true
console.log(route.endsWith("Belgi")); // false
