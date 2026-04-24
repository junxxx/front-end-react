let test = function () {
  console.log("I'm test fucntion");
};

export const localTest = function () {
  console.log("This is a local test tool...");
  console.log(test, test.name);
  test();
  test.methodName = "function to test js.";
  console.log(test, test.methodName, test.anotherName);
};

export default function () {
  console.log("Default export");
}
