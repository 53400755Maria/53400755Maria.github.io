document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');

    // Добавляем класс is-invalid ко всем полям формы при загрузке страницы
    var inputs = form.querySelectorAll('.form-control');
    inputs.forEach(function(input) {
        input.classList.add('is-invalid');
    });

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');

        // Обрабатываем поля формы при отправке
        inputs.forEach(function(input) {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        });
    });

    // Добавляем обработчик событий для изменения содержимого поля ввода
    form.addEventListener('input', function(event) {
        if (event.target.classList.contains('form-control')) {
            var input = event.target;
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        }
    });
});
