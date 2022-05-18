function calc(max) {
  const arr = [];
  for (let i = 1000; i < 9999; i++) {
    i = i.toString();
    let dgSplit = i.split('');
    let dg = dgSplit.map((element) => parseInt(element));

    let soma = dg[0] + dg[1] + dg[2] + dg[3];
    if ((soma == 21) && (dg[0] <= max && dg[1] <= max && dg[2] <= max && dg[3] <= max)) {
      arr.push(dg);
    }
  }
  let arrString = [];
  let allStrings = '';
  for (let x of arr) {
    let string = '';
    for (let i = 0; i <= 3; i++) {
      string += x[i].toString();
    }
    arrString.push(string);
  }

  for (let i of arrString) {
    if (i != arrString[arrString.length - 1]) {
      allStrings = allStrings + i + ', ';
    } else {
      allStrings = allStrings + i;
    }
  }
  console.log(allStrings);
}

calc(7);
