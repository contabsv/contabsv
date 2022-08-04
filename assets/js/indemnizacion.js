document.getElementById("Calcular").addEventListener("click", Calcular);

function CalcularVac() {
  let salario = document.getElementById("Sueldo").value;
  let Area = document.getElementById("AreaT").value;
  let TipoC = document.getElementById("TipoCoti").value;
  let FechaIni = new Date(document.getElementById("FechaI").value);
  let Fechafin = new Date(document.getElementById("FechaCal").value);

  if (Fechafin > FechaIni) {
    let diff = Fechafin.getTime() - FechaIni.getTime();
    let Ans = Math.floor(diff / (1000 * 60 * 60 * 24) / 365);
    let Dias = diff / (1000 * 60 * 60 * 24) - 365 * Ans;
    let limite = "";
    document.getElementById("Ans").value = Ans;
    document.getElementById("Dias").value = Dias;
    document.getElementById("SalarioB").value = "$ " + salario;
    document.getElementById("Quicenal").value = "$ " + (salario / 2).toFixed(2);

    switch (TipoC) {
      case "Despido":
        switch (Area) {
          case "Comercio":
            limite = 1440.0;
            console.log(limite);
            break;
          case "Industria":
            limite = 1440.0;
            console.log(limite);
            break;
          case "Maquila":
            limite = 1416.96;
            console.log(limite);
            break;
          case "Agropecuario":
            limite = 1075.27;
            console.log(limite);
            break;
        }
        break;
      case "RenunciaVoluntaria":
        break;
      default:
        alert("Selecione monivo por finalizacion de contrato");
        break;
    }

    let porcentajeCal = salario <= limite ? salario : limite;
    let CalAns = Ans > 0 ? porcentajeCal * Ans : 0.0;
    let CalPro = Dias > 0 ? (porcentajeCal / 365) * Dias : 0.0;
    document.getElementById("IndeC").value = "$ " + CalAns.toFixed(2);
    document.getElementById("ProC").value = "$ " + CalPro.toFixed(2);
    document.getElementById("TotalC").value ="$ " + (CalAns + CalPro).toFixed(2);
  } else if (Fechafin < FechaIni) {
    alert("La fecha final  debe ser mayor a la fecha inicial");
  } else if (Fechafin != null || FechaIni != null) {
    alert("Selecione rango de fecha de ingreso  y de fecha calculo");
  }
}

function Limpiar() {
  document.getElementById("SalarioB").value = "";
  document.getElementById("Ans").value = "";
  document.getElementById("Dias").value = "";
  document.getElementById("ComVa").value = "";
  document.getElementById("ProVa").value = "";
  document.getElementById("TotalVac").value = "";
  document.getElementById("Quicenal").value = "";
  document.getElementById("AreaT").value = "";
  document.getElementById("FechaI").value = "";
  document.getElementById("FechaCal").value = "";
  document.getElementById("Sueldo").value = "";
}
