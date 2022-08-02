document.getElementById("Calcular").addEventListener("click", Calcular);


function CalcularVac() {
    let salario = document.getElementById("Sueldo").value;
    let Area = document.getElementById("AreaT").value;
    let FechaIni = new Date(document.getElementById("FechaI").value);
    let Fechafin = new Date(document.getElementById("FechaCal").value);

    if (Fechafin > FechaIni) {
        let diff = Fechafin.getTime() - (FechaIni.getTime());
        let Ans = Math.floor((diff / (1000 * 60 * 60 * 24)) / 365);
        let Dias = ((diff / (1000 * 60 * 60 * 24))) - (365 * Ans);
        let CalAns = Ans > 0 ? ((salario / 2) * 0.30) : 0.00;
        let CalPro = Dias > 0 ? (((salario / 2) * 0.30) / 365) * Dias : 0.00;
        document.getElementById('Ans').value = Ans;
        document.getElementById('Dias').value = Dias;
        document.getElementById('ComVa').value = '$ ' + CalAns.toFixed(2);
        document.getElementById('ProVa').value = '$ ' + CalPro.toFixed(2);
        document.getElementById('TotalVac').value = '$ ' + ((salario / 2) + CalAns).toFixed(2);
        document.getElementById('Quicenal').value = '$ ' + (salario / 2).toFixed(2)
        document.getElementById('SalarioB').value = '$ ' + salario;
    } else if (Fechafin < FechaIni) {
        alert("La fecha final  debe ser mayor a la fecha inicial");
        document.getElementById("Ans").value = '';
        document.getElementById("SalarioB").value = '';
        document.getElementById("Quicenal").value = '';
    } else if (Fechafin != null || FechaIni != null) {
        alert("Selecione rango de fecha de ingreso  y de fecha calculo");
        document.getElementById("Ans").value = '';
        document.getElementById("SalarioB").value = '';
        document.getElementById("Quicenal").value = '';
    }

    switch (Area) {
        case "Comercio":
            if (salario >= 365.00) {} else {
                window.alert("Salario minino del sector es $365.00");
            }
            break;
        case "Industria":
            if (salario >= 365.00) {} else {
                window.alert("Salario minino del sector es $365.00");
            }
            break;
        case "Maquila":
            if (salario >= 359.16) {} else {
                window.alert("Salario minino del sector es $359.16");
            }
            break;
        case "Agropecuario":
            if (salario >= 272.55) {} else {
                window.alert("Salario minino del sector es $272.55");
            }
            break;
        default:
            window.alert("Seleccione sector laboral");
            document.getElementById('SalarioB').value = '';
            document.getElementById('Ans').value = '';
            document.getElementById('Dias').value = '';
            document.getElementById('ComVa').value = '';
            document.getElementById('ProVa').value = '';
            document.getElementById('TotalVac').value = '';
            document.getElementById('Quicenal').value = '';
            break;
    }

}

function Limpiar() {
    document.getElementById('SalarioB').value = '';
    document.getElementById('Ans').value = '';
    document.getElementById('Dias').value = '';
    document.getElementById('ComVa').value = '';
    document.getElementById('ProVa').value = '';
    document.getElementById('TotalVac').value = '';
    document.getElementById('Quicenal').value = '';
    document.getElementById('AreaT').value = '';
    document.getElementById('FechaI').value = '';
    document.getElementById('FechaCal').value = '';
    document.getElementById('Sueldo').value = '';
}