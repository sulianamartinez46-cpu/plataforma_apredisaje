document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    const progressBar = document.getElementById('progress-bar');
    const percentageText = document.getElementById('progress-percentage');

    function calcularProgreso() {
        let completados = 0;
        
        checkboxes.forEach(cb => {
            if (cb.checked) {
                completados++;
            }
        });

        // Operación matemática simple para sacar el % dinámico
        const porcentaje = checkboxes.length > 0 ? Math.round((completados / checkboxes.length) * 100) : 0;

        // Modifica la barra visual y el texto en pantalla
        progressBar.style.width = `${porcentaje}%`;
        percentageText.textContent = `${porcentaje}% Completado`;

        // Cambio estético: Brilla en verde al completarlo todo
        if (porcentaje === 100) {
            progressBar.style.background = '#4caf50';
        } else {
            progressBar.style.background = 'linear-gradient(to right, #00b4d8, #7209b7)';
        }
    }

    // Escucha cada clic que haga el alumno
    checkboxes.forEach(cb => {
        cb.addEventListener('change', calcularProgreso);
    });
});
