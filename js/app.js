
/*Podemos usar el objeto Persona dentro del array
 ya que estamos en la misma carpeta */

const personas = [
]

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value !== "" && apellido.value !== ""){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona)
        personas.push(persona);
        mostrarPersonas()
    }else{
        console.log("No se agrego el nombre o apellido")
    }
}