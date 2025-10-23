// Dark Theme Toggle JavaScript
(function() {
    'use strict';

    // Check if dark theme is enabled (from localStorage)
    function isDarkThemeEnabled() {
        return localStorage.getItem('darkTheme') === 'true';
    }

    // Toggle dark theme
    function toggleDarkTheme() {
        const body = document.body;
        const isDark = body.classList.contains('dark-theme');
        
        if (isDark) {
            // Switch to light theme
            body.classList.remove('dark-theme');
            localStorage.setItem('darkTheme', 'false');
            updateThemeButton('Dark Theme');
        } else {
            // Switch to dark theme
            body.classList.add('dark-theme');
            localStorage.setItem('darkTheme', 'true');
            updateThemeButton('Light Theme');
        }
    }

    // Update theme button text
    function updateThemeButton(text) {
        const themeButtons = document.querySelectorAll('.dark-theme-toggle');
        themeButtons.forEach(button => {
            const span = button.querySelector('span');
            if (span) {
                span.textContent = text;
            }
        });
    }

    // Initialize theme on page load
    function initializeTheme() {
        const body = document.body;
        
        if (isDarkThemeEnabled()) {
            body.classList.add('dark-theme');
            updateThemeButton('Light Theme');
        } else {
            body.classList.remove('dark-theme');
            updateThemeButton('Dark Theme');
        }
    }

    // Add event listeners to all dark theme buttons
    function addThemeToggleListeners() {
        const themeButtons = document.querySelectorAll('.dark-theme-toggle');
        themeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                toggleDarkTheme();
            });
        });
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeTheme();
        addThemeToggleListeners();
    });

    // Also initialize immediately if DOM is already loaded
    if (document.readyState === 'loading') {
        // DOM is still loading, wait for DOMContentLoaded
    } else {
        // DOM is already loaded
        initializeTheme();
        addThemeToggleListeners();
    }

    // Expose functions globally for manual control
    window.darkTheme = {
        toggle: toggleDarkTheme,
        enable: function() {
            document.body.classList.add('dark-theme');
            localStorage.setItem('darkTheme', 'true');
            updateThemeButton('Light Theme');
        },
        disable: function() {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('darkTheme', 'false');
            updateThemeButton('Dark Theme');
        },
        isEnabled: isDarkThemeEnabled
    };

})();
