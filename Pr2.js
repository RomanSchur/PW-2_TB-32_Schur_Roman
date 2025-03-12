function calculate_for_Coal() {
    let inputs = [document.getElementById("1").value,document.getElementById("9").value,document.getElementById("10").value];
    let check = inputs.filter(value => !isNaN(value) && value > 0);

    if (check.length === 0) {
        alert("Потрібно заповнити одне з полів: Газове вугілля, Мазут або Природний газ!");
    } else if (check.length > 1) {
        alert("Заповніть тільки одне з полів: Газове вугілля, Мазут або Природний газ!");
    } else {
    let Coal = parseFloat(check[0]);
    let Q_n = parseFloat(document.getElementById("2").value);
    let A_v = parseFloat(document.getElementById("3").value);
    let A_r = parseFloat(document.getElementById("4").value);
    let G_v = parseFloat(document.getElementById("5").value);
    let N_z = parseFloat(document.getElementById("6").value);
    let K_t = parseFloat(document.getElementById("7").value);
    if (isNaN(Coal) ||Coal < 0) {
        alert("Значення використаного газового вугілля введено з помилкою!");
    } else if (isNaN(Q_n) || Q_n < 0 ) {
        alert("Значення нижчої теплоти згорання (Q) введено з помилкою!");
    } else if (isNaN(A_v) ||  A_v < 0 ) {
        alert("Значення частки леткої золи (А_вин) введено з помилкою!");
    } else if (isNaN(A_r) || A_r > 100 || A_r < 0 ) {
        alert("Відсотковий склад золи у паливі (А_r) введено з помилкою!");
    } else if (isNaN(G_v) || G_v > 100 || G_v < 0 ) {
        alert("Масовий вміст горючих речовин (Г_вин) введено з помилкою!");
    } else if (isNaN(N_z) || N_z < 0 ) {
        alert("Ефективність золовловлення (N_зу) введено з помилкою!");
    } else if (isNaN(K_t) || K_t < 0 ) {
        alert("Викид твердих частинок сорбенту (K_твS) введено з помилкою!");
    } else {

        var Emission_indicator = (Math.pow(10, 6) / Q_n) * A_v * (A_r / (100 - G_v)) * (1 - N_z)+K_t;//Показник емісії твердих частинок при спалюванні вугілля
        var Gross_emission = Math.pow(10, -6) * Emission_indicator * Q_n * Coal;//Валовий викид при спалюванні вугілля становитиме

        document.getElementById("res").innerHTML = `
                <h3>Результати розрахунків</h3>
                <ul>
                    <li><h3>Показник емісії твердих частинок при спалюванні палива становить: ${Emission_indicator.toFixed(3)} г/ГДж</h3></li>
                    <li><h3>Валовий викид при спалюванні палива становить: ${Gross_emission.toFixed(3)} Т</h3></li>
                </ul>`;
    }
}
    }
//let Oil_fuel = parseFloat(document.getElementById("3").value);
//let Gas = parseFloat(document.getElementById("2").value);