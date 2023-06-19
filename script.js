// Obtener referencia al formulario
const formulario = document.getElementById('formularioSuscripcion');

// Obtener referencia al select de opciones
const opcionesSelect = document.getElementById('opciones');

// Crear un array de opciones
const opciones = ['Legionario', 'Espartano', 'Tercio', 'Navy Seal'];

// Generar las opciones de suscripción dinámicamente
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

  // Verificar si la edad es menor de 18 años con condicional if
  if (edad < 18) {
  // Crear un nuevo elemento de párrafo
  const mensajeElemento = document.createElement('p');

  // Establecer el contenido de texto del mensaje
  mensajeElemento.textContent = 'Debes ser mayor de 18 años para acceder.';

  // Establecer el color del texto
  mensajeElemento.style.color = 'red';

  contenedorMensaje.innerHTML = '';

  // Agregar el elemento al contenedor
  contenedorMensaje.appendChild(mensajeElemento);

  }else{
  // Crear un nuevo elemento de párrafo
  const mensajeElemento = document.createElement('p');

  // Establecer el contenido de texto del mensaje
  mensajeElemento.textContent = '¡Bienvenido al Warriors Box, futuro guerrero!';
  mensajeElemento.style.color = '#53D106';

  contenedorMensaje.innerHTML = '';

  // Agregar el elemento al contenedor
  contenedorMensaje.appendChild(mensajeElemento);

  // Realizar acciones con los valores ingresados
  const cliente = new Cliente(nombre, apellido, edad, opcionCliente);

  //console.log(cliente);

  //USO DE JSON Y DE LOCALSTORAGE PARA MANEJAR LOS DATOS OBTENIDOS DEL FORMULARIO

  const formularioJson = JSON.stringify(cliente);

  // Almacenar en el Localstorage el archivo JSON
  localStorage.setItem('formularioData', formularioJson);
 
    //RECUPERAR DATOS DEL LOCALSTORAGE CON BOTON DE HTML

  function botonData(){
    const recuperarData = localStorage.getItem('formularioData');
    const mostrarDataJson = JSON.parse(recuperarData);

    // GENERAR CODIGO DE SUSCRIPCIÓN INDIVIDUAL PARA EL CLIENTE
    // Verificar si ya existe un código de suscripción para el cliente
    let codigoSuscripcion = localStorage.getItem('codigoSuscripcion');
  
    if (!codigoSuscripcion) {
    codigoSuscripcion = generarCodigoAleatorio();
    localStorage.setItem('codigoSuscripcion', codigoSuscripcion);
    }
    
    // Referenciar el contenedor de datos en HTML
    const contenedorDatos = document.getElementById('contenedor-datos');
  
    // Mostrar los datos en el contenedor
    contenedorDatos.innerHTML = `
    Nombre: ${mostrarDataJson.nombre} <br>
    Apellido: ${mostrarDataJson.apellido} <br>
    Edad: ${mostrarDataJson.edad} <br>
    Suscripción selecionada: ${mostrarDataJson.opcionCliente} <br>
    <p>Código de Suscripción: <span id="codigoSuscripcion">${codigoSuscripcion}</span></p>
    `;
    }

    // Función para generar código aleatorio
    function generarCodigoAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    const longitud = 8; // Longitud del código
  
    for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
    }
  
    return codigo;
    }

    generarCodigoAleatorio();

    //Función para borrar el localstorage usando boton de HTML
    function borrarLocalStorage() {
      localStorage.clear();

       //Funcionalidad para eliminar datos presentados en pantalla cuando el usuario pulsa el boton de eliminar suscripción 
      const contenedorDatos = document.getElementById('contenedor-datos');
      contenedorDatos.innerHTML = '';
      mensajeElemento.textContent = '¡Bienvenido al Warriors Box, futuro guerrero!';
      mensajeElemento.style.color = '#53D106';
      mensajeElemento.textContent = '';
      const mensajeEliminacion = document.getElementById('contenedor-eliminar-datos');
      mensajeEliminacion.textContent = 'Se han eliminado todos los datos de tu suscripción';
      mensajeEliminacion.style.color = 'red';
    }
    
    const botonLimpiar = document.getElementById('borrarDataCliente');
    borrarDataCliente.style.display = "block";
    botonLimpiar.addEventListener('click', borrarLocalStorage);
  
    const botonVerData= document.getElementById('botonRecuperacionData');
    botonVerData.style.display = "block";
    botonVerData.onclick= botonData;
    
  }

  formulario.reset(); // Reiniciar el formulario a su estado predeterminado
});

  
  

  



