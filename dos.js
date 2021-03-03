/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo */

function mostrar() {
  let nombre;
  let situacionlaboral;
  let cantidaddematerias;
  let sexo;
  let notapromedio;
  let edad;
  let nombremejorpromediodesempleados;
  let promediodenotaporsituacionlaboral;
  let nombredelmasviejoestudiante;
  let edadmenosmateriasybuscatrabajo;
  let flagmejorpromedio;
  let mejorpromedio;
  let flagmasviejoestudiante;
  let edadmasviejoestudiante;
  let promedionotaempleados;
  let promedionotaestudiante;
  let promedionotabuscando;
  let contnotasestudiante = 0;
  let acumnotaestudiante = 0;
  let contnotabuscando = 0;
  let acumnotabuscando = 0;
  let contnotatrabajando = 0;
  let acumnotatrabajando = 0;
  let flagmenosmateriasbuscando;
  let menosmateriasbuscando;
  let nombremenosmateriascursando;

  do {
    nombre = prompt("ingrese el nombre del alumno: ");
    situacionlaboral = prompt(
      "ingrese situacion laboral (buscando, trabajando, estudiante):"
    ).toLowerCase();
    while (
      !(
        situacionlaboral == "buscando" ||
        situacionlaboral == "trabajando" ||
        situacionlaboral == "estudiante"
      )
    ) {
      situacionlaboral = prompt(
        " ingrese una situacion laboral valida (buscando, trabajando, estudiante): "
      ).toLowerCase();
    }
    cantidaddematerias = parseInt(prompt("ingrese materias: (1-7)"));
    while (cantidaddematerias < 1 || cantidaddematerias > 7) {
      cantidaddematerias = parseInt(
        prompt("ingrese una cantidad de materias validas (1-7): ")
      );
    }
    sexo = prompt(
      "ingresar sexo: f para femenino y m para masculino: "
    ).toLowerCase();
    while (!(sexo == "f" || sexo == "m")) {
      sexo = prompt(
        "ingrese un sexo correcto, f para femenino y m para masculino: "
      ).toLowerCase();
    }
    notapromedio = parseInt(
      prompt("ingrese la nota promedio (entre 0 y 10): ")
    );
    while (notapromedio < 0 || notapromedio > 10) {
      notapromedio = parseInt(
        prompt("nota promedio erronea, ingresar valor entre 0 y 10:")
      );
    }
    edad = parseInt(prompt("ingrese la edad: (18-100)"));
    while (isNaN(edad) || edad < 18 || edad > 100) {
      edad = parseInt(prompt("ingrese una edad valida (18-100)"));
    }
    switch (situacionlaboral) {
      case "estudiante":
        if (flagmasviejoestudiante || edadmasviejoestudiante < edad) {
          edadmasviejoestudiante = edad;
          nombredelmasviejoestudiante = nombre;
          flagmasviejoestudiante = 0;
          acumnotaestudiante = acumnotaestudiante + notapromedio;
          contnotasestudiante++;
        }

        break;
      case "buscando":
        contnotabuscando++;
        acumnotabuscando + notapromedio;
        if (
          flagmenosmateriasbuscando ||
          menosmateriasbuscando > cantidaddematerias
        ) {
          menosmateriasbuscando = cantidaddematerias;
          nombremenosmateriascursando = nombre;
          edadmenosmateriasybuscatrabajo = edad;

          flagmenosmateriasbuscando = 0;
        }

        break;
      case "trabajando":
        acumnotatrabajando = acumnotatrabajando + notapromedio;
        contnotatrabajando++;
        break;
    }

    if (situacionlaboral == "buscando" || situacionlaboral == "estudiante") {
      if (flagmejorpromedio || notapromedio > mejorpromedio) {
        mejorpromedio = notapromedio;
        nombremejorpromediodesempleados = nombre;
        flagmejorpromedio = 0;
      }
    }

    

    seguir = prompt("quieres seguir ingresando alumnos? ");
  } while (seguir == "s");

  // a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
  // b) El nombre del mas viejo de los alumnos que solo sea estudiantes
  // c) El promedio de nota por situacion laboral
  // d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo */
  document.write(
    "el nombre del mejor promedio de los que no trabajan es " +
      mejorpromedio +
      "<br>"
  );

    document.write(
      "el nombre del mas viejo de los alumnos que solo estudian es " + nombredelmasviejoestudiante + "<br>"
    );
    document.write(
      "el promedio de los que trabajan es: "  +
        promedionotaempleados + ", el promedio de los que solo estudian es " + promedionotaestudiante + " y el promedio de los que estan buscando es: " + promedionotabuscando +
        "<br>"
    );
  
      document.write(
        "el nombre del que cursa menos materias buscando es" + nombremenosmateriascursando + " y la edad es" + edadmenosmateriasybuscatrabajo + "<br>"
      );
    }
  
  
  
  
  