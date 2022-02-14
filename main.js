alert("siema!");

const firstName = "Kamil Pawlicki";
const age = 30;

console.log(firstName);
console.log(age);
console.log(
  `Nazywam się ${firstName} , mam ${age} lat a to jest moja pierwsza strona.`
);

const paragraph = document.querySelector(".dom");
console.log(paragraph.innerHTML);

paragraph.innerHTML = "Ram pam pam";
console.log(paragraph);
console.log(paragraph.innerHTML);

const myNumber = 5;
console.log(myNumber);

function calculate(myNumber) {
  console.log(`Dostałem liczbę ${myNumber}`);

  return myNumber * 2;
}

const myResult = calculate(4);
console.log(`mnozymy ją razy 2`);
console.log(myResult);

szesc = 6;
console.log(szesc);

function wiek(age) {
  console.log(`teraz mam lat ${age}`);
  return age + 3;
}
const mojWiek = wiek(age);
console.log(`za lat 3 będę miał`);
console.log(mojWiek);

console.log(`zasady funkcji`);
console.log(`opis wzorem i zastosowanie`);
console.log(` funkcja  F(x)`);
function F(x) {
  console.log(`pod x dopasowalismy liczbę ${x}`);
  return x + 5;
}
console.log(`zapisujemy równanie y=x+5  za pomoca 'return x+5'`);
console.log(`zapisujemy rowanie y=F(2) za pomocą 'const y=F(2)'`);
const y = F(2);
console.log(`na koncu piszemy komende 'consol.log(y)' aby otrzymac wynik`);
console.log(y);

function zmianaTekstu(selectorCss, tekst) {
  const element = document.querySelector(selectorCss);
  element.innerHTML = tekst;
}
zmianaTekstu(".article__paragraph--js", "Witaj świecie J-S");

console.log(`.......oddzielamy od reszty......`);

function liczymy(number) {
  console.log(number);
  return number - 1;
}

console.log(`..........1`);
const wynikReturn = liczymy(5);
console.log(`........2`);
console.log(wynikReturn);
console.log(`...........3`);

const blabla = liczymy(200);
console.log(`...........4`);
console.log(blabla);

console.log(` INNY SPOSOB  ZAPISU  FUNKCJI`);
const funkcjaInaczej = (hello) => {
  hello = `Hello world Java Script`;
  console.log(hello);
};

funkcjaInaczej();

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed [*]`);
  },

  name: "Death Star",
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(`HEy  IGI`);
console.log(`hi`);

const greet = (age, firstName) => {
  console.log(
    `witaj odbiorco/odbiorczyni ja nazywam się ${firstName} i mam ${age} lat`
  );
};

greet(age, firstName);

const jajko = 5;

if ("5" != jajko) {
  console.log("jajo to jabłko");
} else console.log("haha");
Słowo = "słowo";

if (Słowo === "Słowo") {
  console.log("działa IF");
} else {
  console.log("nie działa IF, działa ELSE");
}

const manOne = "Adam";
const manTwo = "Grzegorz";
const manThree = "Jacek";

const ageManOne = 20;
const ageManTwo = 30;
const ageManThree = 40;



if ((ageManOne * 2 == ageManThree) && (ageManOne + ageManThree == ageManTwo * 2)) {
  console.log(`${manThree} jest 2 razy starszy od ${manOne}a`) +
    `${manTwo} jest 2 razy młodszy niż suma lat ${manOne}a i ${manThree}a`;
}

if ((ageManOne == ageManTwo) == ageManThree) {
  console.log(`wszyscy są w tym samym wieku`);
} else {
    console.log(`każdy jest w innym wieku`)
}
if (!(ageManOne * 3 == ageManThree)) {
    console.log(`${manThree} jest 2 razy starszy od ${manOne}a`);
  } else {
      console.log(`${manOne} nie jest 3 razy starszy od ${manThree}a`)
  }

  console.log(cowsay('hi'));