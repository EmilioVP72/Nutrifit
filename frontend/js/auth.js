// Esperar a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // Capturamos los datos de los inputs
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            console.log("Intentando iniciar sesión con:", username);

            // AQUÍ IRÁ LA LLAMADA AL BACKEND DESPUÉS
            // Por ahora, simularemos un éxito y saltaremos al dashboard
            if (username === "admin" && password === "1234") {
                window.location.href = 'dashboard.html';
            } else {
                alert("Credenciales incorrectas (Prueba con admin / 1234)");
            }
        });
    }
});