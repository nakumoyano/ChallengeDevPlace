let form = document.getElementById("forms");
form.addEventListener("submit", function (e){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let province = document.getElementById("province");
    let message= document.getElementById("message");
    let validate = true;

    e.preventDefault();

    if (name.value === "") {
        swal("Error", "Ingrese su nombre completo", "error");
        validate = false;
    } else if (!isNaN(name.value)) {
        swal("Error", "Su nombre no puede contener numeros", "error");
        validate = false;
    }

    if (email.value === "") {
        swal("Error", "Ingrese su Email", "error");
        validate = false;
    }

    if(province.value === ""){
        swal("Error", "Ingrese su provincia", "error");
        validate = false;
    }

    if(message.value === ""){
        swal("Error", "Ingrese un mensaje", "error")
    }

    if (validate) {
        swal("Envío Exitoso!", "Sus datos se cargaron correctamente!", "success");
        name.value = "";
        email.value = "";
        province.value = "";
        message.value = "";
    } 
})






















