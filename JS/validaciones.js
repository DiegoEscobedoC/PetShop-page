export function valida(input){
    const tipodeInput = input.dataset.tipo;
    if(validadores[tipodeInput]){
        validadores[tipodeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
    }else{
        input.parentElement.classList.add("input-container--invalid")
    const tipodeInput = input.dataset.tipo;
        input.parentElement.querySelector("span").innerHTML = reemplazo(tipodeInput,input)
    }    
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre:{
        valueMissing: "Este campo no puede estar vacio"
    },
    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch:"el correo no es valido"
    },
    password:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Se permiten de entre 6 a 12 caracteres, debe contener una letra minuscula, una letra mayuscula, 1 numero y no puede contener caracteres especiales"
    },
    nacimiento:{
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    },
    numero:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es de 10 numeros xxxxxxxxxx"
    },
    direccion:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "la direccion debe contener entre 10 y 40 caracteres"
    },
    cuidad:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "la direccion debe contener entre 10 y 40 caracteres"
    },
    estado:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "la direccion debe contener entre 10 y 40 caracteres"
    }

}



function reemplazo(tipodeInput,input){
    let mensaje= ""
    
        tipoDeErrores.forEach((error) =>{
            if(input.validity[error]){
                console.log(input.validity)
                mensaje = mensajesDeError[tipodeInput][error]
            }
        })
    return mensaje
}



const validadores ={
    nacimiento : (input)=>validarNacimiento(input),
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value) 
    let mensaje = ""
    if(!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad"
    }
    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date()
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear()+18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
        )    
        
    console.log(diferenciaFechas)
    console.log(fechaActual)
    console.log(diferenciaFechas <= fechaActual)
    return diferenciaFechas <= fechaActual;
}



