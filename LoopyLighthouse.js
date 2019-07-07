let output = "";
for  (let number = 100; number < 201; number ++) {
  output = "";
  if (number % 3 === 0) { output += "Loopy";
  }
  if (number % 4 === 0) { output += "Lighthouse";
  }
  else { output += number;
  }
  console.log(output);
}