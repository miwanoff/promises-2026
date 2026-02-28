let greeting;

async function hello() {
  greeting = await new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Success!"), 1000); // задача выполнена успешно (через 1 секунду)
  });
  return greeting;
}

hello().then(function (result) {
  alert(result);
});
