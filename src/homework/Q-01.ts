(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const emails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(emails);

  //Lista de compras de un carrito
  const cartItems: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(cartItems);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree = (num: number): number => {
    return num + 3;
  }

  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(word: string): string {
    word.toLowerCase();    
    const capitalized = word.charAt(0).toUpperCase().toString().concat(word.substring(1, word.length));
    return capitalized;
  }

  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let eventOccurred: boolean = false;

  if (eventOccurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let userCanAccess: boolean = true;

  if (userCanAccess) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  
  //variable que almacena el valor de PI
  let pi: number = 3.141592654;

  console.log(pi);
  

  //variabel que controla si un archivo es modificable 
  let isFileEditable: boolean = false;

  if (isFileEditable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const eulersNumber: number = 2.718281828; 
  console.log(eulersNumber);

})();