function fizzBuzz(N) {

  for (let i = 1; i <= N; i++) {
    // multiplo di 15
    if (i % 15 === 0) {
      console.log("fizzBuzz");
    }
    // multiplo di 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // multiplo di 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    else {
      console.log(i);
    }
  }
}


fizzBuzz(50);