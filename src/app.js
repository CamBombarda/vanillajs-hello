import "./style.css";
window.onload = function() {
  // array with the words
  let first = "A ";
  let adj = [
    "hysterical ",
    "funny ",
    "nervous ",
    "mischievous ",
    "loony ",
    "shiny ",
    "imaginary "
  ];
  let who = [
    "witch ",
    "Harry Potter ",
    "Voldemort ",
    "Terminator ",
    "Sara Connor ",
    "Cat "
  ];
  let action = [
    "ate my ",
    "crushed my ",
    "peed my ",
    "stole my ",
    "burned my ",
    "broke my "
  ];
  let what = [
    "proyect ",
    "mouse ",
    "homework ",
    "laptop ",
    "computer ",
    "phone "
  ];
  let when = [
    "yesterday",
    "last night",
    "in my dreams",
    "during nap time",
    "when I was in the gym",
    "when I was in the shower"
  ];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * who.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * what.length);
  let rdm5 = Math.floor(Math.random() * when.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first + adj[rdm1] + who[rdm2] + action[rdm3] + what[rdm4] + when[rdm5];
};
