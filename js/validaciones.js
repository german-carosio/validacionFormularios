const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	correo: false,
    password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
            validarCorreo();
		break;

        case "correo2":
			validarCorreo();
		break;

        case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
        
        case "password2":
			validarPassword();
		break;
	}
}

const validarCorreo = ()=>{
    const correo1 = document.getElementById('correo');
    const correo2 = document.getElementById('correo2');

    if (correo1.value !== correo2.value) {
        document.getElementById(`check-correo2`).style.display = 'none'
		document.getElementById(`error-correo2`).style.display = 'inline'
        document.getElementById(`msj-correo2`).style.display = 'block'
        campos[correo] = false;
    }else {
        document.getElementById(`error-correo2`).style.display = 'none'
        document.getElementById(`check-correo2`).style.display = 'inline'
        document.getElementById(`msj-correo2`).style.display = 'none'
        campos[correo] = true;
    }
}

const validarPassword = ()=>{
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('password2');

    if (password1.value !== password2.value) {
        document.getElementById(`check-password2`).style.display = 'none'
		document.getElementById(`error-password2`).style.display = 'inline'
        document.getElementById(`msj-password2`).style.display = 'block'
        campos[password] = false;
    }else {
        document.getElementById(`error-password2`).style.display = 'none'
        document.getElementById(`check-password2`).style.display = 'inline'
        document.getElementById(`msj-password2`).style.display = 'none'
        campos[password] = true;
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`error-${campo}`).style.display = 'none';
        document.getElementById(`check-${campo}`).style.display = 'inline';
        document.getElementById(`msj-${campo}`).style.display = 'none';
        campos[campo] = true;
      
	} else {
        document.getElementById(`check-${campo}`).style.display = 'none';
		document.getElementById(`error-${campo}`).style.display = 'inline';
        document.getElementById(`msj-${campo}`).style.display = 'block';
        campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=>{
   

    if (campos.nombre && campos.correo && campos.password) {
        
    } else {
        e.preventDefault();
        document.getElementById('msj-formulario').style.display = 'block';
    }

})