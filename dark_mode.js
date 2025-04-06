const toggleButton = document.getElementById('toggleMode');

        // Initialize the theme
        document.body.classList.add('light-mode');
        toggleButton.textContent = "Dark Mode";

        toggleButton.addEventListener('click', () => {
            if (document.body.classList.contains('light-mode')) {
                // Switch to Dark Mode
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                toggleButton.textContent = "Light Mode"; // Update button text
            } else {
                // Switch to Light Mode
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                toggleButton.textContent = "Dark Mode"; // Update button text
            }
        });