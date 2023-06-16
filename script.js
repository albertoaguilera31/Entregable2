class Cliente {
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
  //formulario.reset(); // Reiniciar el formulario a su estado predeterminado

  // Obtener los valores ingresados por el usuario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = parseInt(document.getElementById('edad').value);

  // Crear un objeto de Cliente con los valores ingresados
  const cliente = new Cliente(nombre, apellido, edad);

  // Utilizar el objeto creado
  console.log(cliente);
});


