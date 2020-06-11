function methodOne() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first method");
      resolve(1);
    }, 2000);
  });
  return p;
}

function methodTwo() {
  let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("second method");
      resolve(2);
    }, 2000);
  });

  return secondPromise;
}

function methodThree() {
  let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("third method called");
      resolve(3);
    }, 2000);
  });

  return thirdPromise;
}

// let methodsOnesPromise = methodOne();
// let methodTwosPromise = methodsOnesPromise.then(count => methodTwo(count));
// methodTwosPromise.then(secondMethodVal => console.log(secondMethodVal));

// methodOne()
//   .then(first => methodTwo(first))
//   .then(secondVal => methodThree(secondVal))
//   .then(thirdVal => console.log(thirdVal))
//   .catch(err => console.error(err));

let p = Promise.all([methodOne(), methodTwo(), methodThree()]);

p.then((resolvedvalues) => console.log(resolvedvalues));
