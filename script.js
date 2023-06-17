/*class Cliente {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //this.opciones = opciones;
  }
}

// Obtener referencia al formulario
const formulario = document.getElementById('formularioSuscripcion');

// Manejador de evento para el envío del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario
  

  // Obtener los valores ingresados por el usuario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = parseInt(document.getElementById('edad').value);

  // Crear un objeto de Cliente con los valores ingresados
  const cliente = new Cliente(nombre, apellido, edad);


  // Utilizar el objeto creado
  console.log(cliente);

  formulario.reset(); // Reiniciar el formulario a su estado predeterminado
});*/

// Obtener referencia al formulario
const formulario = document.getElementById('formularioSuscripcion');

// Obtener referencia al select de opciones
const opcionesSelect = document.getElementById('opciones');

// Crear un array de opciones
const opciones = ['Legionario', 'Espartano', 'Tercio', 'Navy Seal'];

// Generar las opciones dinámicamente
for (let i = 0; i < opciones.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = opciones[i];
  opcion.textContent = opciones[i];
  opcionesSelect.appendChild(opcion);
}

// Manejador de evento para el envío del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  class Cliente {
    constructor(nombre, apellido, edad, opcionCliente) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.opcionCliente = opcionCliente;
    }
  }

  // Obtener los valores ingresados por el usuario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = parseInt(document.getElementById('edad').value);
  const opcionCliente = opcionesSelect.value;

  //MENSAJE DE ERROR EN CASO DE SER MENOR DE EDAD
  // Obtener referencia al elemento contenedor donde se mostrará el mensaje
const contenedorMensaje = document.getElementById('contenedor-mensaje');

// Verificar si la edad es menor de 18 años
if (edad < 18) {
  // Crear un nuevo elemento de párrafo
  const mensajeElemento = document.createElement('p');

  // Establecer el contenido de texto del mensaje
  mensajeElemento.textContent = 'Debes ser mayor de 18 años para acceder.';

  // Agregar el elemento al contenedor
  contenedorMensaje.appendChild(mensajeElemento);
}else{
  // Crear un nuevo elemento de párrafo
  const mensajeElemento = document.createElement('p');

  // Establecer el contenido de texto del mensaje
  mensajeElemento.textContent = '¡Bienvenido al Warriors Box, futuro guerrero!';

  // Agregar el elemento al contenedor
  contenedorMensaje.appendChild(mensajeElemento);
}


  // Realizar acciones con los valores ingresados
  const cliente = new Cliente(nombre, apellido, edad, opcionCliente);

  console.log(cliente);

  formulario.reset(); // Reiniciar el formulario a su estado predeterminado
});





