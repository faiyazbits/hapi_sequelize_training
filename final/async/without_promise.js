function methodOne(cb) {
  setTimeout(() => {
    console.log("first method");
    cb(2);
  }, 2000);
}

function methodTwo(count, cb) {
  setTimeout(() => {
    for (let i = 0; i < count; i++) {
      console.log("second method" + i);
    }

    cb("hello");
  }, 1000);
}

function methodThree(thirdVal) {
  setTimeout(() => {
    console.log("third method called after 3 sec with", thirdVal);
  }, 3000);
}

methodOne((count) => {
  methodTwo(count, (secondVal) => {
    methodThree(secondVal);
  });
});

console.log("outside");
