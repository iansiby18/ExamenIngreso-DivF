// Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
// de cada una debo obtener los siguientes datos:
// el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
// Se debe Informar al usuario lo siguiente:
// Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
// de cada una debo obtener los siguientes datos:
// el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) El promedio de cantidad por tipo de producto
// b) La categoria con mas cantidad de unidades en total de la compra
// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
// d) el fabricante y Categoria del más caro de los productos
function mostrar()
{
	let nombreDelProducto;
	let tipoDeProducto;
	let precioDelProducto;
	let cantidadDeUnidades;
	let categoria;
	let marcaDelProducto;
	let contadorAlcohol=0;
	let contadorIac=0;
	let contadorQuat=0;
	let acumCantidadAlcohol=0;
	let acumCantidadIac=0;
	let acumCantidadQuat=0;
	let promedioIac;
	let promedioAlcohol;
	let promedioQuat;
	let acumunidaddesinfectante=0;
	let acumunidaddetergente=0;
	let acumunidadbactericida=0;
	let categoriaConMasUnidades;
	let cantidaddedetergentemenor=0;
	let marcaProductoMasCaro;
	let tipoProductoMasCaro;
	let precioDelProductoMasCaro;
	let flagProductoMasCaro;

	for(let i = 0 ; i<5 ; i++)
	{
		nombreDelProducto = prompt("Ingrese nombre del producto:");
	
		{
			nombreDelProducto = prompt("Ingrese nombre valido:");
		}

		tipoDeProducto = prompt("Ingrese tipo de producto: ALCOHOL, IAC o QUAT ").toLowerCase();
		while(!(tipoDeProducto=="alcohol"||tipoDeProducto=="iac"||tipoDeProducto=="quat"))
		{
			tipoDeProducto = prompt("Ingrese tipo de producto VALIDO: ALCOHOL, IAC o QUAT ").toLowerCase();
			
		}

		precioDelProducto = parseInt(prompt("Ingrese precio del producto:"));
		while(isNaN(precioDelProducto)|| precioDelProducto<100 || precioDelProducto>300)
		{
			precioDelProducto = parseInt(prompt("Ingrese precio valido:"));
		}

		cantidadDeUnidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		while(isNaN(cantidadDeUnidades)==true || cantidadDeUnidades<1 || cantidadDeUnidades>1000)
		{
			cantidadDeUnidades = parseInt(prompt("Ingrese una cantidad valida:"));
		}

		categoria = prompt("Ingrese tipo de categoria : desinfectante, bactericida, detergente");
		
		while(!(categoria=="desinfectante"||categoria=="bactericida"||categoria=="detergente"))
		{
			categoria = prompt("Ingrese tipo de inflamable valido");
		
		}

		marcaDelProducto=prompt("Ingrese marca del producto");
		
		{
			marcaDelProducto=prompt("Ingrese marca valida");
		}


		switch (tipoDeProducto) {
			case "alcohol":
				contadorAlcohol++;
				acumCantidadAlcohol = acumCantidadAlcohol+cantidadDeUnidades;
				break;
			case "iac":
				contadorIac++;
				acumCantidaddetergente=acumCantidaddetergente+cantidadDeUnidades;
				if(precioDelProducto<=200)
				{
					cantidaddedetergentemenor = cantidaddedetergentemenor + cantidadDeUnidades;
				}
				break;
			case "quat":
				contadorQuat++;
				acumCantidadQuat=acumCantidadQuat+cantidadDeUnidades;
				break;
			default:
				break;
		}

		switch (categoria) {
			case "desinfectante":
				acumunidaddesinfectante=acumunidaddesinfectante+cantidadDeUnidades;
				break;
			case "detergente":
				acumunidaddetergente=acumunidaddetergente+cantidadDeUnidades;
				break;
			case "bactericida":
				acumunidadbactericida=acumunidadbactericida+cantidadDeUnidades;
				break;
			default:
				break;
		}

		if(flagProductoMasCaro||precioDelProducto>precioDelProductoMasCaro)
			{
				precioDelProductoMasCaro=precioDelProducto;
				marcaProductoMasCaro=marcaDelProducto;
				tipoProductoMasCaro=tipoDeProducto;
				flagProductoMasCaro=0;
			}
	}


	if(acumunidaddesinfectante>acumunidaddetergente)
	{
		if(acumunidaddesinfectante>acumunidadbactericida)
		{
			categoriaConMasUnidades = acumunidaddesinfectante;	
			nombreDelTipoInflamableConMasUnidades = "Combustible";
		}
		else
		{
			categoriaConMasUnidades = acumunidadbactericida;
			nombreDelTipoInflamableConMasUnidades = "Ignifugo";
		}
	}
	else if(acumunidaddetergente>acumunidadbactericida)
	{
		categoriaConMasUnidades=acumunidaddetergente;
		nombreDelTipoInflamableConMasUnidades = "Explosivo";
	}

	promedioAlcohol=acumCantidadAlcohol/contadorAlcohol;
	if(isNaN(promedioAlcohol))
	{
		promedioAlcohol=0;
	}
	promedioIac=acumCantidadIac/contadorIac;
	if(isNaN(promedioIac))
	{
		promedioIac=0;
	}
	promedioQuat=acumCantidadQuat/contadorQuat;
	if(isNaN(promedioQuat))
	{
		promedioQuat=0;
	}

	
	document.write("El promedio de alcohol por cantidad es: "+promedioAlcohol+"<br>");
	document.write("El promedio de IAC por cantidad es: "+promedioIac+"<br>");
	document.write("El promedio de QUAT por cantidad es: "+promedioQuat+"<br>");
	document.write("Las unidades de detergente con precios menores a 201 fueron:"+cantidaddedetergentemenor+"<br>");
	document.write("El producto mas caro cuesta "+precioDelProductoMasCaro+" su marca es "+marcaProductoMasCaro+" y su tipo es "+tipoProductoMasCaro);


}
// Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
// de cada una debo obtener los siguientes datos:
// el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) El promedio de cantidad por tipo de producto
// b) La categoria con mas cantidad de unidades en total de la compra
// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
// d) el fabricante y Categoria del más caro de los productos