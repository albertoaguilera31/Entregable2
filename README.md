# Entregable2
Segundo entregable para el curso de JavaScript de Coderhouse.

En el presente simulador se hace uso de los conocimientos adquiridos en el curso hasta el momento con énfasis en el uso del DOM, funciones, objetos, arrays, estructuras de control, Json y localstorage. En este simulador he creado 2 archivos html y un archivo de script con el código JavaScript. En el primer archivo, index1.html, se encuentra un botón que al pulsarlo redirige al archivo index2.html. Esto simula la funcionalidad de un botón dentro de mi proyecto web que lleva al usuario a un formulario de suscripción en línea.

En el archivo index2.html, se encuentra un formulario creado con código HTML, así como contenedores y botones que se utilizarán para mostrar contenido al usuario de forma dinámica a medida que interactúa con el formulario y avanza en la suscripción deseada.

Por último, tenemos el archivo script.js, que contiene toda la funcionalidad para el formulario de suscripción al Box de Crossfit Warriors. En este archivo se puede observar el código que permite al usuario registrarse ingresando su nombre, apellido, edad, correo electrónico y opción de suscripción según el nombre de la suscripción preferida (legionario, espartano, tercio o navy seal).

En este código de JavaScript, el usuario solo podrá ingresar sus datos y realizar una suscripción efectiva si es mayor de edad. En caso de ser menor de edad, la suscripción no podrá llevarse a cabo.

Si el usuario es mayor de edad, podrá realizar su suscripción satisfactoriamente y guardar los datos de suscripción en el LocalStorage. Los datos del usuario se guardan en un objeto creado al instanciar la clase Cliente. Una vez creado este objeto, los datos que lo conforman se guardan en formato JSON para ser almacenados en el LocalStorage. Después de guardar los datos en el LocalStorage, el usuario podrá ver sus datos de suscripción junto con un código único de suscripción generado aleatoriamente al pulsar un botón de visualización de datos. Este botón recupera los datos guardados en el LocalStorage y los muestra en pantalla junto con el código de suscripción.

Finalmente, el usuario también tendrá la opción de eliminar la suscripción realizada al pulsar un botón de eliminación de suscripción. Esto permitirá borrar los datos mostrados en pantalla, así como los datos guardados en el LocalStorage.
