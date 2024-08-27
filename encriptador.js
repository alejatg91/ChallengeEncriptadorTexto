const d = document;
const textArea = d.querySelector(".form__input");
const muneco = d.querySelector(".result__img");
const loaderPelota = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".result__text");
const resultadoP = d.querySelector(".result__p");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptarmensaje(mensaje){
        let mensajeEncriptado = "";
    for(let i = 0; i< mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
            break;
            }
        }
        mensajeEncriptado += encriptada;
}
    return mensajeEncriptado;
        }

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1],"g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (e)=>{
    muneco.style.display = "none";
    loaderPelota.classList.remove("hidden");
    resultadoTitulo.textContent = "Recibiendo Mensaje";
    resultadoP.textContent = " ";
})

botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoP.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:"
})

botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoP.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El mensaje es:"
    botonCopiar.classList.remove("hidden");
})

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoP.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        muneco.style.display = "block";
        loaderPelota.classList.add("hidden");
        resultadoTitulo.textContent = "El texto ha sido copiado";
        botonCopiar.classList.add("hidden");
    });
})