let anio= 2021;
let mes = 09;
let dia = 7;
const datosUsuario = prompt('Cuál es su nombre y apellido?');


const tuEdad = (diaNacimiento,mesNacimiento,anioNacimiento)=>{

	if(yaCumplioAnios(diaNacimiento,mesNacimiento,anioNacimiento)){
		return 'Hola ' + datosUsuario + '!' + ' Tu edad es ' + (anio - anioNacimiento);
	
	}else if(cumpleanios(diaNacimiento,mesNacimiento,anioNacimiento)){
		return 'Feliz cumpleaños ' + datosUsuario + ', tenés ' + (anio - anioNacimiento) + ' años';
	
    }else{
		return 'Hola ' + datosUsuario + '!' +' Tu edad es ' + (anio - anioNacimiento - 1);
	}	
};

const cumpleanios = (diaNacimiento,mesNacimiento)=>{

    if(diaNacimiento == dia && mesNacimiento == mes){

    	return true;
    }else{

    	return false;
    }
};

const yaCumplioAnios = (diaNacimiento,mesNacimiento)=>{

    if(mesNacimiento < mes || (mesNacimiento == mes && diaNacimiento < dia)){
        return true;

    }else{
        return false;
    };
};

console.log(tuEdad(20, 04, 1981));
