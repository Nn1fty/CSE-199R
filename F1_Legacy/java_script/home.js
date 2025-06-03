// script.js
// This file contains JavaScript for interactive elements.

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the navigation buttons for the info section
    const prevInfoButton = document.getElementById('prevInfo');
    const nextInfoButton = document.getElementById('nextInfo');

    // Get references to the slide container and the new slide wrapper
    const slideContainer = document.getElementById('slideContainer');
    const slideWrapper = document.getElementById('slideWrapper');
    const slides = slideWrapper ? slideWrapper.querySelectorAll('.slide-item') : [];
    let currentSlideIndex = 0; // Keep track of the currently displayed slide

    /**
     * Shows a specific slide by translating the slide wrapper horizontally.
     * @param {number} index The index of the slide to show.
     */
    const showSlide = (index) => {
        if (!slideWrapper || slides.length === 0) {
            console.warn("Slide wrapper or slides not found to display.");
            return;
        }

        // Calculate the percentage to translate the wrapper
        // Each slide takes 100% of the container width, so we translate by multiples of -100%
        const translateXValue = -index * 100;
        slideWrapper.style.transform = `translateX(${translateXValue}%)`;

        // No need to toggle 'hidden' class or opacity for horizontal sliding
    };

    // Initialize: show the first slide when the page loads
    if (slides.length > 0) {
        showSlide(currentSlideIndex);
    }

    // Add event listeners for the info navigation buttons
    if (prevInfoButton) {
        prevInfoButton.addEventListener('click', () => {
            console.log('Previous Info button clicked!');
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        });
    }

    if (nextInfoButton) {
        nextInfoButton.addEventListener('click', () => {
            console.log('Next Info button clicked!');
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        });
    }

    // Get references to all team buttons
    const teamButtons = document.querySelectorAll('.team-button');

    // Add event listeners for each team button
    teamButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const teamName = event.target.textContent;
            console.log(`${teamName} team button clicked!`);
            // Add functionality here to display information specific to the clicked team
            // For example, update the 'Main Content Area' with team details
            const mainContentArea = document.querySelector('.main-content .content-area');
            if (mainContentArea) {
                mainContentArea.innerHTML = `<p class="dynamic-content-title">Displaying information for: <span class="dynamic-content-team">${teamName}</span></p><p class="dynamic-content-text">This content would be dynamically loaded based on the selected team.</p>`;
            }
        });
    });

    console.log('F1 Hub JavaScript loaded and ready!');
});
