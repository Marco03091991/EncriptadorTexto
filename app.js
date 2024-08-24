/* Definición del mapa de encriptación*/
const encriptacionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function ocultarPersona(){
    let persona = document.querySelector(".div__contenedor__persona"); 
    let contenedor = document.querySelector(".div__contenedor__mensaje");
    persona.classList.add("ocultar");
    contenedor.classList.add("ocultar"); 
    
}
function aparecerBotonCopiar(){

let botonCopiar = document.getElementById('botonCopiar');
botonCopiar.style.display = 'inline-block';

}
function limpiarTexArea(){
    /* aca*/ 
    document.getElementById('texto__entrada').value = '';
    
}


function encriptar() {
    let texto = document.getElementById('texto__entrada').value.toLowerCase(); /* Obtiene el texto del área de entrada y lo convierte a minúsculas.*/
    let resultado = texto.replace(/[aeiou]/g, letra => encriptacionMap[letra]); /* Usa replace() con una expresión regular para reemplazar cada vocal por su versión encriptada.*/
    document.getElementById('texto__salida').textContent = resultado; /* Muestra el resultado en el párrafo de salida. */
    ocultarPersona();
    aparecerBotonCopiar();
    limpiarTexArea();
}

function desencriptar() {
    let texto = document.getElementById('texto__entrada').value.toLowerCase();/*Obtiene el texto del área de entrada y lo convierte a minúsculas.*/ 
    let resultado = texto;
    for (let [key, value] of Object.entries(encriptacionMap)) { /* Itera sobre el mapa de encriptación, reemplazando cada versión encriptada por su vocal original.*/
        resultado = resultado.split(value).join(key);
    }
    document.getElementById('texto__salida').textContent = resultado; /* Muestra el resultado en el párrafo de salida.*/
    /* aca   */ 
    limpiarTexArea();

}

function copiarTexto() {
    let texto = document.getElementById('texto__salida').textContent; /*Obtiene el texto del párrafo de salida. */
    navigator.clipboard.writeText(texto).then(() => {  /*Utiliza la API del portapapeles para copiar el texto. */
        alert('Texto copiado al portapapeles'); /*Muestra una alerta cuando el texto se ha copiado exitosamente. */
    });
     /* aca   */ 
     limpiarTexArea();
}

   

   
    
