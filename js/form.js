const form = document.getElementById('form');
    const status = document.getElementById('status-bar');

    form.addEventListener('submit', handleSubmit);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const data = {
            service_id: 'service_798mtu5',
            template_id: 'template_qww4b6m',
            user_id: '-7pvU3I_b0BG5G-rg',
            template_params: {
                'email': formData.get('email'),
                'message': formData.get('message'),
                // Add other template_params as needed
            }
        };

        try {
            const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            console.log(res);
            form.reset();
            showStatus('Sent with success!');
        } catch (err) {
            console.log(err);
            showStatus('An error has occurred...');
        }
    }

    function showStatus(message) {
        status.textContent = message;
        status.classList.add('contact__status-bar--active');
        setTimeout(() => {
            status.classList.remove('contact__status-bar--active');
        }, 3000);
    }