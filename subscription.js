document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const title = document.getElementById('subscription-title');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalClose = document.getElementById('modal-close');

    const fields = [
        { id: 'nombre', validate: validateNombre, errorId: 'nombre-error' },
        { id: 'email', validate: validateEmail, errorId: 'email-error' },
        { id: 'contrasena', validate: validateContrasena, errorId: 'contrasena-error' },
        { id: 'repetir-contrasena', validate: validateRepetirContrasena, errorId: 'repetir-contrasena-error' },
        { id: 'edad', validate: validateEdad, errorId: 'edad-error' },
        { id: 'telefono', validate: validateTelefono, errorId: 'telefono-error' },
        { id: 'direccion', validate: validateDireccion, errorId: 'direccion-error' },
        { id: 'ciudad', validate: validateCiudad, errorId: 'ciudad-error' },
        { id: 'codigo-postal', validate: validateCodigoPostal, errorId: 'codigo-postal-error' },
        { id: 'dni', validate: validateDNI, errorId: 'dni-error' }
    ];

    function validateNombre(value) {
        return value.length > 6 && /\s/.test(value) ? '' : 'Debe tener más de 6 letras y al menos un espacio.';
    }

    function validateEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Debe ser un email válido.';
    }

    function validateContrasena(value) {
        return /^[a-zA-Z0-9]{8,}$/.test(value) ? '' : 'Al menos 8 caracteres, letras y números.';
    }

    function validateRepetirContrasena(value) {
        return value === document.getElementById('contrasena').value ? '' : 'Las contraseñas no coinciden.';
    }

    function validateEdad(value) {
        const num = parseInt(value);
        return Number.isInteger(num) && num >= 18 ? '' : 'Debe ser un número entero mayor o igual a 18.';
    }

    function validateTelefono(value) {
        return /^\d{7,}$/.test(value) ? '' : 'Debe ser un número de al menos 7 dígitos sin espacios ni guiones.';
    }

    function validateDireccion(value) {
        return value.length >= 5 && /[a-zA-Z]/.test(value) && /\d/.test(value) && /\s/.test(value) ? '' : 'Al menos 5 caracteres, con letras, números y un espacio.';
    }

    function validateCiudad(value) {
        return value.length >= 3 ? '' : 'Al menos 3 caracteres.';
    }

    function validateCodigoPostal(value) {
        return value.length >= 3 ? '' : 'Al menos 3 caracteres.';
    }

    function validateDNI(value) {
        return /^\d{7,8}$/.test(value) ? '' : 'Debe ser un número de 7 u 8 dígitos.';
    }

    // Cargar datos desde LocalStorage al iniciar
    const savedData = localStorage.getItem('subscriptionData');
    if (savedData) {
        const data = JSON.parse(savedData);
        fields.forEach(field => {
            document.getElementById(field.id).value = data[field.id] || '';
        });
        title.textContent = data.nombre ? `HOLA ${data.nombre.toUpperCase()}` : 'HOLA';
    }

    // Validaciones en blur y focus
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.addEventListener('blur', () => {
            const error = field.validate(input.value);
            document.getElementById(field.errorId).textContent = error;
        });
        input.addEventListener('focus', () => {
            document.getElementById(field.errorId).textContent = '';
        });
    });

    // Título dinámico (bonus de Semana 8)
    const nombreInput = document.getElementById('nombre');
    nombreInput.addEventListener('keydown', () => {
        title.textContent = nombreInput.value.trim() ? `HOLA ${nombreInput.value.toUpperCase()}` : 'HOLA';
    });
    nombreInput.addEventListener('focus', () => {
        title.textContent = nombreInput.value.trim() ? `HOLA ${nombreInput.value.toUpperCase()}` : 'HOLA';
    });

    // Cerrar modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Enviar formulario
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let errors = [];
        let formData = {};

        fields.forEach(field => {
            const value = document.getElementById(field.id).value;
            const error = field.validate(value);
            if (error) {
                errors.push(`${field.id}: ${error}`);
                document.getElementById(field.errorId).textContent = error;
            }
            formData[field.id] = value;
        });

        if (errors.length > 0) {
            modalTitle.textContent = 'Errores en el formulario';
            modalMessage.textContent = errors.join('\n');
            modal.style.display = 'flex';
            return;
        }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                modalTitle.textContent = 'Suscripción exitosa';
                modalMessage.textContent = `Datos enviados:\n${JSON.stringify(formData, null, 2)}\n\nRespuesta del servidor:\n${JSON.stringify(result, null, 2)}`;
                localStorage.setItem('subscriptionData', JSON.stringify(formData));
            } else {
                modalTitle.textContent = 'Error en la suscripción';
                modalMessage.textContent = `Código de error: ${response.status}\nMensaje: ${response.statusText}`;
            }
        } catch (error) {
            modalTitle.textContent = 'Error en la suscripción';
            modalMessage.textContent = `Error de red: ${error.message}`;
        }

        modal.style.display = 'flex';
    });
});