document.addEventListener('DOMContentLoaded', () => {
    const btnScan = document.getElementById('btnScan');

    if (btnScan) {
        btnScan.addEventListener('click', () => {
            console.log("Abriendo cámara o selector de archivos...");
            // Aquí irá la lógica para capturar la imagen
        });
    }
});