let inputNombre=document.getElementById("nombre")
let inputContraseña=document.getElementById("contraseña")
let inputCorreo=document.getElementById("correo")
let boton=document.getElementById("boton")


boton.addEventListener("click", function(evento){
    evento.preventDefault()


    let nombre=inputNombre.value
    let contraseña=inputContraseña.value
    let correo=inputCorreo.value
    let nombreBaseDatos="Coco"
    let contraseñaBaseDatos="00000"
    let correoBaseDatos="Coco00@gmail.com"

if(nombre== nombreBaseDatos && contraseña==contraseñaBaseDatos && correo==correoBaseDatos){
    alert("Ok")

}else{
    alert("revisa los datos ingresados")
}



})