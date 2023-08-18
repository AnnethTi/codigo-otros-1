const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // se corrige el nombre del selector, para especificar que es una class
const $b = document.querySelector('.blog');  // se corrige el nombre del selector, para que haga referencia a una class, no al id
const $l = document.querySelector('.location');

async function displayUser (username) { //Se envuelve a la funcion con async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json()  // se crea variable data y se le asigana el response, asi evitamos cambiar las lineas de abajo
  //console.log(data); comentamos esta linea para que se vea limpia la consola 
  $n.textContent = `${data.name}`;  //Se ponen comillas invertidas para imprimir la informacion
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //se corrigio el nombre de la variable
}

displayUser('stolinski').catch(handleError);

/* 
Cosas que realice:
Git:
1. Hacer clonacion del repositorio
2. Crear mi repo en git hub
3. Eliminar la conexion remota y agregar la de mi repo

Codigo:
1. Leer los documentos y tratar de entender como funciona el codigo
2. Empezar desde el html para ver que todo este bien conectado
3. Revisar que en el js, los querySelector esten correctos
4. Corregir pequeños detalles como las comas investidas
5. Crear la variable data y asignarle el response pero convertido a objeto


*/