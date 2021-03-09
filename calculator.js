const numb_1 = prompt('Enter first number');
const op     = prompt('Enter the correct operator')
const numb_2 = prompt('Enter second number');


switch (op) {
    case '+':
        console.log(parseInt(numb_1) + parseInt(numb_2));
        break;
    case '-':
        console.log(parseInt(numb_1) - parseInt(numb_2));
        break;
    case '*':
        console.log(parseInt(numb_1) / parseInt(numb_2));
        break;
    case '/':
        console.log(parseInt(numb_1) % parseInt(numb_2));
        break;
    
    default:
        break;
}
