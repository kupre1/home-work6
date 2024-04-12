let first = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);
let answers = "number";
let answers1 = "NUMBER";
let answers2 = "NumBeR";

let second_answers = "yes";
let second_answers1 = "YeS";
let second_answers2 = "YES";

let third_answers = "ori";
let third_answers1 = "ORI";
let third_answers2 = "OrI";

if (first === "strings" || first === "1") {
  let second = prompt("რა არის რა არის typeof(5)?");
  if (second === answers || second === answers1 || second === answers2) {
    alert("შენი პასუხი სწორია");
  } else {
    alert("შენი პასუხი არასწორია");
  }
} else if (first === "variable" || first === "2") {
  let third = prompt("შეიძლება თუ არა let-ის რედეკლალირება?");
  if (
    third === second_answers ||
    third === second_answers1 ||
    third === second_answers2
  ) {
    alert("შენი პასუხი სწორია");
  } else {
    alert("შენი პასუხი არასწორია");
  }
} else if (first === "math" || first === "3") {
  let forth = prompt("რას აბრუნებს console.log(Math.floor(2.1))");
  if (
    forth === third_answers ||
    forth === third_answers1 ||
    forth === third_answers2
  ) {
    alert("შენი პასუხი სწორია");
  } else {
    alert("შენი პასუხი არასწორია");
  }
} else {
  alert("გთხოვთ ჩაწეროთ სწორედ სიტყვა");
}
