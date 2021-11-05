
/* traigo el form por su id */
let form = document.getElementById("contact-form");



form.addEventListener("submit",function(e){

    e.preventDefault();
    let nme = document.getElementById("name");
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");
    
    /* parseamos el dato phone a number */
    let phone_number=parseInt(phone.value,10);
   
    if(nme.value.length == 0){/* validacion del campo nombre */
        
    alert("No puede estar el campo nombre vacio");

    }else{

        if(email.length <= 8 ){/* validación del campo email */
            /* Para validar si el email es corto */
            alert("No cumple con el mínimo de los caractéres posibles el campo Correo electrónico (mínimo = 8)");
        }else if(email.length >=40){
            /* Para validar si el email es demasiado largo*/
            alert("Excedio el máximo de caractéres posibles el campo Correo electrónico(máximo = 40)");

        }else{
            

            if(phone.value.length<10 || phone_number <= 0 || phone.value.length >=11){/* validaciones del campo telefono */
                phone.classList.add("is-invalid");
                alert("Número de teléfono erróneo, verifica tu número.");
            }else if(isNaN(phone.value)){
                phone.classList.add("is-invalid");
                alert("No ingresar palabras en el campo de teléfono.");
            }else{
                

                if(phone.value.length<10 || phone_number <= 0 || phone.value.length >=11){/* validaciones del campo telefono */
       
                    phone.classList.add("is-invalid");
                    alert("Número de teléfono erróneo, verifica tu número.");
                }else if(isNaN(phone.value)){
                    phone.classList.add("is-invalid");
                    alert("No ingresar palabras en el campo de teléfono.");
                }else{
                    
                    if(message.value.length == 0 || message.value.length <20){
       
                        alert("El campo texto necesita al menos 20 caracteres");
                    }else{
                        
                        sendEmail(nme,email,message,phone);
                    }

                }

            }

        }

    } 
    
}); 

function sendEmail(nme,email,message,phone){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "carlostrejo182@gmail.com",
        Password : "CEE868D15EBDAA1830EFDE0D2589DEB74A8B",
        To : 'carlostrejo182@gmail.com',
        From : "carlostrejo182@gmail.com",
        Subject : "This is the subject",
        Body : `Hola soy ${nme.value} mi correo es ${email.value} \n ${message.value} \n mi telefono es ${phone.value}`
    }).then(
      message => alert(`Datos enviados satisfactoriamente.`)
    );

}