/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar() {
  let nombrePasajero;
  let obrasocial;
  let edadPasajero;
  let temperaturaCorporal;
  let flagMujerPamijoven ;
  let nombreMujerPamiMasJoven;
  let temperaturaMujerPamiMasJoven;
let sexoPasajero
  let viajeTotalSinDescuento;
  let osde60 = 0;
  let porcentajePami;
  let viajeTotalConDescuento;
  let contadorMujeres = 0;
  let contadorpasajeros=0;
 let contadorpasajerospami =0;
 

 do{ 
    nombrePasajero = prompt("Ingrese nombre del pasajero");
    obrasocial = prompt("Ingrese obra social del pasajero (pami, osde, otras)").toLowerCase();
    while (!( obrasocial == "pami" || obrasocial == "osde" || obrasocial == "otras") ) {
      obrasocial = prompt("Ingrese obra social valido").toLowerCase();
      
    }

    edadPasajero = parseInt(prompt("Ingrese edad del pasajero"));
    while (isNaN(edadPasajero)|| edadPasajero < 17 || edadPasajero > 100
    ) {
      edadPasajero = parseInt(prompt("Ingrese edad valida"));
    }

    temperaturaCorporal = parseInt( prompt("Ingrese temperatura corporal del pasajero"));
    while (
      isNaN(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 41
    ) {
      temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal valida"));
    }

    sexoPasajero = prompt("Ingrese sexo del pasajero").toLowerCase();
    while (!(sexoPasajero == "m" || sexoPasajero == "f")) {
      sexoPasajero = prompt("Ingrese sexo valido").toLowerCase();
      
    }

	
	
    switch (obrasocial) {
		case "otras":
			break;
			case "pami":
				if (sexoPasajero == "f") {
					if ( flagMujerPamijoven || temperaturaMujerPamiMasJoven < temperaturaCorporal ) {
						temperaturaMujerPamiMasJoven = temperaturaCorporal;
						nombreMujerPamiMasJoven = nombrePasajero;
						flagMujerSoltera = 0;
					}
					
				}
				break;
				case "osde":
					if (edadPasajero > 60) {
						osde60++;
					}
					break;
					
					
					
				}
				
				
				contadorpasajeros++
				if (obrasocial = "pami"){
		contadorpasajerospami++ 
		
	}
	seguir= prompt("quieres continuar:")
  }while(seguir== "s")
  



  viajeTotalSinDescuento = cantidadDePasajeros * 600;
 
  porcentajePami = (contadorpasajerospami / cantidadDePasajeros) * 100;
if(porcentajePami > 50) {
preciocondescuento = (totalviaje * 25) / 100}

  document.write(
    "La cantidad de personas con osde de mas de 60 años es: " +
      osde60 +
      "<br>"
  );
  if (contadorMujeres < 1) {
    document.write(
      "El nombre de mujer de pami mas joven es " +
        nombreMujerPamiMasJoven +
        " y su temperatura es " +
       temperaturaMujerPamiMasJoven +
        "<br>"
    );
  } else {
    document.write("No se ingresaron mujeres");
  }
  document.write(
    "El precio del viaje total sin descuento es " +
      viajeTotalSinDescuento +
      "<br>"
  );

    document.write(
      "El precio con descuento del viaje es " + viajeTotalConDescuento + "<br>"
    );
  }

