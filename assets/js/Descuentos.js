document.getElementById("Calcular").addEventListener("click", Calcular);

function Calcular() {
    let tipoC = document.getElementById("tipo").value;
    let Area = document.getElementById("AreaL").value;
    let salario = document.getElementById("Sueldo").value;

    const porcentajeAfp = 0.0725;
    const limiteAfp = 510.77;
    let AFP_E = (salario * porcentajeAfp) <= limiteAfp ? (salario * porcentajeAfp) : limiteAfp;

    const porcentajeIsss = 0.03;
    const LimiteIsss = 30;
    let ISSS_E = (salario * porcentajeIsss) <= LimiteIsss ? (salario * porcentajeIsss) : LimiteIsss;

    const tramo1 = 472.00;
    const tramo2 = 895.24;
    const tramo3 = 2038.10;

    const couta2 = 17.67;
    const couta3 = 60.00;
    const couta4 = 288.57;

    const exceso1 = 472.00;
    const exceso2 = 895.24;
    const exceso3 = 2038.10;

    const salarioIsssAfp = salario - AFP_E - ISSS_E;
    let Rtramo4 = ((salarioIsssAfp - exceso3) * 0.30) + couta4;
    let Renta_E = salarioIsssAfp <= tramo1 ? 0.00 : salarioIsssAfp <= tramo2 ? ((salarioIsssAfp - exceso1) * 0.10) + couta2 : salarioIsssAfp <= tramo3 ? ((salarioIsssAfp - exceso2) * 0.20) + couta3 : Rtramo4;

    let SueldoNeto = salario - AFP_E - ISSS_E - Renta_E;


    switch (tipoC) {
        case "Mensual":
            //document.getElementById('tipoCalculo').value 
            document.getElementById('SalarioB').value = '$ ' + salario;
            document.getElementById('afp').value = '$ ' + AFP_E.toFixed(2);
            document.getElementById('Isss').value = '$ ' + ISSS_E.toFixed(2);
            document.getElementById('Renta').value = '$ ' + Renta_E.toFixed(2);
            document.getElementById('SalarioN').value = '$ ' + SueldoNeto.toFixed(2);
            break;
        default:
            //document.getElementById('tipoCalculo').value 
            document.getElementById('SalarioB').value = '$ ' + salario / 2;
            document.getElementById('afp').value = '$ ' + (AFP_E / 2).toFixed(2);
            document.getElementById('Isss').value = '$ ' + (ISSS_E / 2).toFixed(2);
            document.getElementById('Renta').value = '$ ' + (Renta_E / 2).toFixed(2);
            document.getElementById('SalarioN').value = '$ ' + (SueldoNeto / 2).toFixed(2);
            break;
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
            window.alert("Seleccione area de sector laboral");
            document.getElementById('SalarioB').value = '';
            document.getElementById('afp').value = '';
            document.getElementById('Isss').value = '';
            document.getElementById('Renta').value = '';
            document.getElementById('SalarioN').value = '';
            break;
    }

}

function Limpiar() {
    document.getElementById("AreaL").value = '';
    document.getElementById("Sueldo").value = '';
    document.getElementById('SalarioB').value = '';
    document.getElementById('afp').value = '';
    document.getElementById('Isss').value = '';
    document.getElementById('Renta').value = '';
    document.getElementById('SalarioN').value = '';
}