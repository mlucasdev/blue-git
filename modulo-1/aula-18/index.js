// async function exibirNome(nome) {
//   setTimeout(() => {
//     console.log(3);

//   }, 2000);
//   newNome = await nome;
//   return newNome;
// }

// const returnFunction = exibirNome("Lucas");
// returnFunction.then((newNome) => {
//     console.log(newNome);
// })
// console.log(7, returnFunction);

async function newName() {
  const time1second = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise resolvida!");
      resolve();
    }, 1000);
  });

  const returnPromise = await time1second;

  return "Lucas";
}

const returnNewName = newName();
console.log(26, returnNewName);

returnNewName.then(name => console.log(10, name));