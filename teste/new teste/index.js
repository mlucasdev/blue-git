const uppercaseFirstLetter = (stryng) => {
  const trim = stryng.trim()
  const split = trim.split(" ");
  console.log(split);
  const array = [];
  for (let i of split) {
    const push = i[0].toUpperCase() + i.slice(1).toLowerCase();
    array.push(push);
  }

  let novo = array[0] + " " + array[1];
  console.log(novo);
};
uppercaseFirstLetter("        nome sobrenome ");
