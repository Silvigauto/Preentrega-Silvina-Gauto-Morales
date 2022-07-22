

// // let comida = prompt('Ingrese entre las siguientes opciones de comida (numero):\n 1. Hamburguesa con papas  \n 2. Porción de papas \n 3.Sanguche de Milanesa ');

// // let bebida = prompt('Ingrese entre las siguientes opciones de bebida:\n 4. Gaseosa linea pepsi  \n 5. Agua  \n 6. Cerveza');

// let opcion1 = 'hamburguesa con papas';
// let opcion2 = 'porción de papas';
// let opcion3 = 'sanguche de milanesa';


// let opcion4 = 'gaseosa linea pepsi';
// let opcion5 = 'agua';
// let opcion6 = 'cerveza';

// let precio1 = 900
// let precio2 = 500
// let precio3 = 700

// let precio4 = 300
// let precio5 = 200
// let precio6 = 500

// // switch (comida){
// //     case '1':
// //     alert('Tu ' + opcion1 + ' está siendo preparada');
// //     break;
// //     case '2':
// //     alert('Tu ' + opcion2 + ' está siendo preparada');
// //     break;
// //     case '3':
// //     alert('Tu ' + opcion3 + ' está siendo preparada');
// //     break;
// //     default:
// //     alert('ingrese una opcion valida de comida');
// // }


// // switch (bebida){
// //     case '4':
// //     alert('Tu ' + opcion4 + ' también está siendo preparada');
// //     break;
// //     case '5':
// //     alert('Tu ' + opcion5 + ' también está siendo preparada');
// //     break;
// //     case '6':
// //     alert('Tu ' + opcion6 + ' también está siendo preparada');
// //     break;
// //     default:
// //         alert('ingrese una opcion valida de bebida');
// // }



// function totalCuenta(comida, bebida) {
//     if (comida == '1' && bebida == '4') {
//         return precio1 + precio4;

//     } else if (comida == '1' && bebida == '5') {
//         return precio1 + precio5;

//     } else if (comida == '1' && bebida == '6') {
//         return precio1 + precio6;

//     } else if (comida == '2' && bebida == '4') {
//         return precio2 + precio4;

//     } else if (comida == '2' && bebida == '5') {
//         return precio2 + precio5;

//     } else if (comida == '2' && bebida == '6') {
//         return precio2 + precio6;

//     } else if (comida == '3' && bebida == '4') {
//         return precio3 + precio4;

//     } else if (comida == '3' && bebida == '5') {
//         return precio3 + precio5;

//     } else if (comida == '3' && bebida == '6') {
//         return precio3 + precio6;

//     } 
// }


// console.log(totalCuenta(2, 6));


// for (let i = 1; i <= 10; i++) {
//     if(i == 5 || i == 7 || i == 10){
//         alert('El turno numero ' + i + ' ya esta reservado :(')
//         continue;  
//     }
//     let ingresarNombre = prompt("Ingresar nombre");
    
//     alert(" Turno  N° "+ i +" nombre: "+ingresarNombre);
// }







//-----------------Ejercicio Arrays-------------------------------



let menuBebidas = ['Gaseosa linea pepsi', 'Agua Mineral', 'Cerveza'];
let menuComidas = ['Hamburguesa con papas', 'Porción de papas fritas', 'Sanguche de Milanesa'];

//------ver menu de comidas-----------

// let menuEntero = menuBebidas.concat(menuComidas);

// for (let i = 0; i < menuEntero.length; i++) {
//     alert(menuEntero[i]);
// }

// alert('Te dejamos la carta:\n' + menuEntero.join('\n'));








//--------ver menu de comidas aplicado en una función----------



// function prueba (unArray) {
//     for (let i = 0; i < unArray.length; i++) {
//         alert(unArray[i]);
//     }
// }

// prueba (menuComidas);
// prueba (menuBebidas);










//----------Toma de pedidos----------

// let pedido = [];
// let input = prompt('Ingrese su opción de comida');


//  function tomaPedido () {   
//         pedido.push(input)
//         input = prompt('Ahora ingrese su bebida');
//         pedido.push(input)
   
// }

// tomaPedido ();
// alert('Tu pedido es ' + pedido[0] + ' con ' + pedido[1]);









//---------toma de pedido usando clases-------- 




// class Menu1 {
//     constructor(comida, bebida) {
//         this.comida = comida;
//         this.bebida = bebida;
//     }
//     mostrar() {
//         alert('Tu pedido es: \n Comida: ' + this.comida + '\n Bebida: ' + this.bebida);
//     }
// }


// let producto1 = prompt ('ingrese su comida');
// let producto2 = prompt ('ingrese su bebida');


// let cliente1 = new Menu1 (producto1, producto2)
// cliente1.mostrar();



//Toma de pedidos por mesa

// class CartaMenu {
//     constructor (comida, bebida) {
//         this.comida = comida;
//         this.bebida = bebida; 
//     }
    
// }

// const Mesa1 = []; 
// Mesa1.push(new CartaMenu ('Hamburguesa', 'Gaseosa'));
// Mesa1.push(new CartaMenu ('Porción de papas', 'Cerveza'));
// Mesa1.push(new CartaMenu ('Sanguche de milanesa', 'Gaseosa'));

// console.log(Mesa1)

// ------------------Preentrega----------

// const productos = [{ id: 1,  producto: "Hamburguesa", precio: 800 },
//                   {  id: 2,  producto: "Papas", precio: 500 },
//                   {  id: 3,  producto: "Sanguche de milanesa"  , precio: 700}]



// let siExiste = prompt('Ingrese el producto que desea saber si hay. INGRESE LA PRIMERA LETRA CON MAYUSCULA')
// const existe = productos.some(producto => producto.producto === siExiste);
// console.log(existe);

// let unPrecio = parseInt(prompt('Ingrese cuanto dinero tiene'))
// const baratos = productos.filter(producto => producto.precio < unPrecio)
// console.log(baratos)