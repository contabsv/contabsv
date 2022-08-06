document.getElementById("Calcular").addEventListener("click", Calcular);

function CalcularVac() {
  let salario = document.getElementById("Sueldo").value;
  let Area = document.getElementById("AreaT").value;
  let FechaIni = new Date(document.getElementById("FechaI").value);
  let Fechafin = new Date(document.getElementById("FechaCal").value);
  let fechaCorte = new Date("2021/12/11");

  if (Fechafin > FechaIni) {
    let diff = Fechafin.getTime() - FechaIni.getTime();
    let Ans = Math.floor(diff / (1000 * 60 * 60 * 24) / 365);
    //let Dias = diff / (1000 * 60 * 60 * 24) - 365 * Ans;

    document.getElementById("Ans").value = Ans;
    //document.getElementById("Dias").value = Dias;
    document.getElementById("SalarioB").value = "$ " + salario;

    const tramo2 = Ans >= 1 && Ans < 3;
    const tramo3 = Ans >= 3 && Ans < 10;
    const tramo4 = (salario / 30) * 21;

    let fechaP = Fechafin.getTime() - fechaCorte.getTime();
    let dias = Math.round(fechaP / (1000 * 60 * 60 * 24));
    let diasp = dias < 365 ? dias : dias >= 365 ? dias - 365 : 0.0;
    document.getElementById("Dias").value = diasp;

    let aguinaldoC = tramo2
      ? (salario / 30) * 15
      : tramo3
      ? (salario / 30) * 19
      : tramo4;
    let aguinaldoP = (((salario / 30) * 15) / 365) * diasp;

    document.getElementById("comAgui").value = "$ " + aguinaldoC.toFixed(2);
    document.getElementById("proAgui").value = "$ " + aguinaldoP.toFixed(2);
  } else if (Fechafin < FechaIni) {
    alert("La fecha final  debe ser mayor a la fecha inicial");
  } else if (Fechafin != null || FechaIni != null) {
    alert("Selecione rango de fecha de ingreso  y de fecha calculo");
  }

  switch (Area) {
    case "Comercio":
      if (salario >= 365.0) {
      } else {
        window.alert("Salario minino del sector es $365.00");
      }
      break;
    case "Industria":
      if (salario >= 365.0) {
      } else {
        window.alert("Salario minino del sector es $365.00");
      }
      break;
    case "Maquila":
      if (salario >= 359.16) {
      } else {
        window.alert("Salario minino del sector es $359.16");
      }
      break;
    case "Agropecuario":
      if (salario >= 272.55) {
      } else {
        window.alert("Salario minino del sector es $272.55");
      }
      break;
    default:
      window.alert("Seleccione sector laboral");
      document.getElementById("SalarioB").value = "";
      document.getElementById("Ans").value = "";
      document.getElementById("Dias").value = "";
      document.getElementById("comAgui").value = "";
      document.getElementById("proAgui").value = "";
      break;
  }
}

function Limpiar() {
  document.getElementById("SalarioB").value = "";
  document.getElementById("Ans").value = "";
  document.getElementById("Dias").value = "";
  document.getElementById("comAgui").value = "";
  document.getElementById("proAgui").value = "";
  document.getElementById("AreaT").value = "";
  document.getElementById("FechaI").value = "";
  document.getElementById("FechaCal").value = "";
  document.getElementById("Sueldo").value = "";
}
