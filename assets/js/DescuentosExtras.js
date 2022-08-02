document.getElementById("Calcular").addEventListener("click", Calcular);

function CalcularExtras() {
    let Area = document.getElementById("AreaL").value;
    let salario = document.getElementById("Sueldo").value;
    let HorasDiu = document.getElementById("ExtraD").value;
    let HorasNoc = document.getElementById("ExtraN").value;

    let salarioDia = salario / 30;
    let Remun50 = salarioDia * 0.50;
    let TotalDes = salarioDia + Remun50;

    let TotalDiurna = ((salarioDia / 8) * 2) * HorasDiu;
    let TotalNoct = (((salarioDia / 8) * 2) + (((salarioDia / 8) * 2) * 0.25)) * HorasNoc;
    let TotalDN = TotalDiurna + TotalNoct + salarioDia;

    let DiaAsueto = salarioDia * 2;


    //document.getElementById('Calculo').value 
    document.getElementById('SalarioB').value = '$ ' + salarioDia.toFixed(2);
    document.getElementById('Rem50').value = '$ ' + Remun50.toFixed(2);
    document.getElementById('Total1').value = '$ ' + TotalDes.toFixed(2);
    document.getElementById('Diurna').value = '$ ' + TotalDiurna.toFixed(2);
    document.getElementById('Nocturna').value = '$ ' + TotalNoct.toFixed(2);
    if (TotalDiurna > 0 || TotalNoct > 0) {
        document.getElementById('Total2').value = '$ ' + TotalDN.toFixed(2);
    } else {
        document.getElementById('Diurna').value = '';
        document.getElementById('Nocturna').value = '';
        document.getElementById('Total2').value = '';

    }
    document.getElementById('Total3').value = '$ ' + DiaAsueto.toFixed(2);



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
            document.getElementById('Rem50').value = '';
            document.getElementById('Total1').value = '';
            document.getElementById('Diurna').value = '';
            document.getElementById('Nocturna').value = '';
            document.getElementById('Diurna').value = '';
            document.getElementById('Nocturna').value = '';
            document.getElementById('Total2').value = '';
            document.getElementById('Total3').value = '';
            break;
    }
}

function Limpiar() {
    document.getElementById("AreaL").value = '';
    document.getElementById("Sueldo").value = '';
    document.getElementById('ExtraD').value = '';
    document.getElementById('ExtraN').value = '';
    document.getElementById('SalarioB').value = '';
    document.getElementById('Rem50').value = '';
    document.getElementById('Total1').value = '';
    document.getElementById('Diurna').value = '';
    document.getElementById('Nocturna').value = '';
    document.getElementById('Diurna').value = '';
    document.getElementById('Nocturna').value = '';
    document.getElementById('Total2').value = '';
    document.getElementById('Total3').value = '';
}