//OBTENER REFERENCIA AL FORMULARIO CON USO DEL DOM, ARRAYS Y BUCLE FOR

const formulario = document.getElementById('formularioSuscripcion');
const opcionesSelect = document.getElementById('opciones');
const opciones = ['Legionario', 'Espartano', 'Tercio', 'Navy Seal'];

// Generar las opciones de suscripción dinámicamente con bucle for
for (let i = 0; i < opciones.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = opciones[i];
  opcion.textContent = opciones[i];
  opcionesSelect.appendChild(opcion);
}

// EVENTOS ASOCIADOS AL FORMULARIO CON USO DE OBJETOS, CLASES y ESTRUCTURA DE CONTROL IF

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

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

  const contenedorMensaje = document.getElementById('contenedor-mensaje');

  if (edad < 18) {
  const mensajeElemento = document.createElement('p');
  mensajeElemento.textContent = 'Debes ser mayor de 18 años para acceder.';
  mensajeElemento.style.color = 'red';
  contenedorMensaje.innerHTML = '';
  contenedorMensaje.appendChild(mensajeElemento);
  }else{
  const mensajeElemento = document.createElement('p');
  mensajeElemento.textContent = '¡Bienvenido al Warriors Box, futuro guerrero!';
  mensajeElemento.style.color = '#53D106';

  contenedorMensaje.innerHTML = '';

  contenedorMensaje.appendChild(mensajeElemento);
  const cliente = new Cliente(nombre, apellido, edad, opcionCliente);

  //USO DE JSON Y DE LOCALSTORAGE PARA MANEJAR LOS DATOS OBTENIDOS DEL FORMULARIO

  const formularioJson = JSON.stringify(cliente);
  localStorage.setItem('formularioData', formularioJson);
 
    //RECUPERAR DATOS DEL LOCALSTORAGE CON BOTON DE HTML

  function botonData(){
    const recuperarData = localStorage.getItem('formularioData');
    const mostrarDataJson = JSON.parse(recuperarData);

    // GENERAR CODIGO DE SUSCRIPCIÓN INDIVIDUAL E INDIVIDUAL PARA EL CLIENTE
  
    let codigoSuscripcion = localStorage.getItem('codigoSuscripcion');
    if (!codigoSuscripcion) {
    codigoSuscripcion = generarCodigoAleatorio();
    localStorage.setItem('codigoSuscripcion', codigoSuscripcion);
    }
    
    // Referenciar el contenedor de datos en HTML
    const contenedorDatos = document.getElementById('contenedor-datos');
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

    //FUNCIÓN PARA BORRAR EL LOCALSTORAGE USANDO BOTON DE HTML
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

  formulario.reset(); // Reiniciar el formulario
});

  
  

  



