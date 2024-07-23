function displayAttribute() {
    // Ambil nilai dari setiap seleksi
    var g1 = document.getElementById('g1').value;
    var g2 = document.getElementById('g2').value;
    var g3 = parseFloat(document.getElementById('g3').value);
    var g4 = document.getElementById('g4').value;

    // Gabungkan nilai untuk menghitung nilai resistansi
    var nilaiResistor = (parseInt(g1 + g2) * g3).toLocaleString();
    var toleransi = g4;

    // Perbarui konten elemen output
    document.getElementById('output').innerHTML = `Resistansi: ${nilaiResistor} Ω dengan toleransi ${toleransi}`;
}
