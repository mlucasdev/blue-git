function calcTemp(a, b) {
    let fahrenheit = ( a * 9/5) + 32;
    let kelvin = a + 273.15;
    
    if (b == 'C') {
        console.log(`Temperatura em Celcius: ${a}`);
    } else if (b == 'F') {
        console.log(`Temperatura em Fahrenheit: ${fahrenheit}`);
    } else if (b == 'K') {
        console.log(`Temperatura em Kelvin: ${kelvin}`);
    }
    

}

calcTemp(30, 'F');



