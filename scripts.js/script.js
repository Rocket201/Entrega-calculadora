
let numero1 = '';
let numero2 = '';
let operador = '';
let resultado = 0;

const botonNumero = (value) => {
    if (resultado !== 0) {
        vaciar();
    }

    if (value === '.') {
        if (!numero1.includes(value)) {
            if (numero1 === '') {
                numero1 = '0.';
            } else {
                numero1 += '.';
            }
        }
    } else {
        numero1 += value;
    }

    mostrarNumero1(numero1);
}

const Operador = (operadorSeleccionado) => {
    switch (operadorSeleccionado) {
        case '1/x':
                UnoentreX();
                break;
        case 'x2':
            alCuadrado();
            break;
        case '2√x':
            raizCuadrada();
            break;
        case '+/-':
            cambiarSignoNumero1();
            break;
        default:
            if (numero2 !== '') {
                operador = operadorSeleccionado;
                mostrarNumero2();
            } else if (numero1 !== '') {
                operador = operadorSeleccionado;
                numero2 = numero1;
                numero1 = '';
                mostrarNumero1();
                mostrarNumero2();
            }
            break;
    }
}

const ejecutar = () => {
    if (numero1 !== '' && numero2 !== '' && operador !== '') {
        switch (operador) {
            case '+':
                sumar();
                break;
            case '-':
                restar();
                break;
            case '*':
                multiplicar();
                break;
            case '/':
                dividir();
                break;
            case '%':
                porcentaje();
                break;
               
        }
        numero2 = resultado;
        operador = '';
        mostrarNumero2();
    }
}

const sumar = () => {
    resultado = Number(numero2) + Number(numero1);
    mostrarResultado();
}

const restar = () => {
    resultado = Number(numero2) - Number(numero1);
    mostrarResultado();
}

const multiplicar = () => {
    resultado = Number(numero2) * Number(numero1);
    mostrarResultado();
}

const dividir = () => {
    resultado = Number(numero2) / Number(numero1);
    mostrarResultado();
}
const UnoentreX = ()=>{
    
    resultado = (1/Number(numero1)) ;
    mostrarResultado();
}

const alCuadrado = () => {
    resultado = Math.pow(Number(numero1), 2);
    mostrarResultado();
}

const raizCuadrada = () => {
    resultado = Math.sqrt(Number(numero1));
    mostrarResultado();
}

const porcentaje = () => {
    resultado = (Number(numero2) * (Number(numero1) / 100));
    mostrarResultado();
}

const cambiarSignoNumero1 = () => {
    numero1 = -Number(numero1);
    mostrarNumero1();
}

const deleteUltimoNumero = () => {
    if (numero1 !== '') {
        numero1 = numero1.substring(0, numero1.length - 1);
        mostrarNumero1();
    }
}

const eliminarNumero1 = () => {
    numero1 = '';
    mostrarNumero1();
}

const eliminarTodo = () => {
    vaciar();
    mostrarNumero1();
    mostrarNumero2();
}

const vaciar = () => {
    numero1 = '';
    numero2 = '';
    operador = '';
    resultado = 0;
}

const mostrarNumero1 = () => {
    document.getElementById("salidaNumero1").innerHTML = numero1;
}

const mostrarNumero2 = () => {
    document.getElementById("salidaNumero2").innerHTML = numero2 + ' ' + operador;
}


const mostrarResultado = () => {
    document.getElementById("salidaNumero1").innerHTML = resultado;
    document.getElementById("salidaNumero2").innerHTML = '';
}