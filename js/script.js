function calcularSimulacionAvanzada() {
    // Obtener valores de los inputs
    const montoInput = document.getElementById('montoInversion');
    const plazoSelect = document.getElementById('plazoInversion');
    
    const capital = parseFloat(montoInput.value) || 0;
    const dias = parseInt(plazoSelect.value) || 90;
    
    // Definir tasas máximas comerciales basadas en la imagen original
    let tasaAnual = 0.06; // 6% para el de 90 días
    if (dias === 365) {
        tasaAnual = 0.12; // 12% para el de 365 días
    }
    
    // Fórmulas financieras base
    // Interés = (Capital * Tasa * Días) / 365
    const gananciaInteres = (capital * tasaAnual * dias) / 365;
    const totalSalida = capital + gananciaInteres;
    
    // Renderizar los resultados en pantalla con formato de moneda legible
    document.getElementById('resEntrada').innerText = '$' + capital.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('resGanancia').innerText = '$' + gananciaInteres.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('resSalida').innerText = '$' + totalSalida.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
 
// Ejecutar el cálculo por primera vez al cargar el script para que no aparezca en ceros
window.addEventListener('DOMContentLoaded', function() {
    calcularSimulacionAvanzada();
});