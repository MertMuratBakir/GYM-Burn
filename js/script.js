const messageTextarea = document.getElementById('message');
        const charCount = document.getElementById('charCount');

        messageTextarea.addEventListener('input', () => {
            const currentLength = messageTextarea.value.length;
            charCount.textContent = `${currentLength} / 300 characters`;

            if (currentLength > 300) {
                messageTextarea.value = messageTextarea.value.substring(0, 300);
                charCount.textContent = '300 / 300 characters';
            }
        });