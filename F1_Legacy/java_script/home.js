document.addEventListener('DOMContentLoaded', () => {
    // Get references to the navigation buttons for the info section
    const prevInfoButton = document.getElementById('prevInfo');
    const nextInfoButton = document.getElementById('nextInfo');

    // Get references to the slide container and the new slide wrapper
    const slideContainer = document.getElementById('slideContainer');
    const slideWrapper = document.getElementById('slideWrapper');
    const slides = slideWrapper ? slideWrapper.querySelectorAll('.slide-item') : [];
    let currentSlideIndex = 0; // Keep track of the currently displayed slide

    // Auto-play slider variables
    let slideInterval;
    const autoPlayDelay = 5000; // 5 seconds

    /**
     * Shows a specific slide by translating the slide wrapper horizontally.
     * In this version, the background video is assumed to be a single, continuous element
     * outside of the individual slides. This function only handles the text slide transition.
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

        // The video play/pause logic is removed from here
        // as the background video is now a continuous element.
    };

    const startAutoPlay = () => {
        stopAutoPlay(); // Clear any existing interval to prevent multiple intervals running
        slideInterval = setInterval(() => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }, autoPlayDelay);
    };

    const stopAutoPlay = () => {
        clearInterval(slideInterval);
    };

    // Initialize: show the first slide when the page loads
    if (slides.length > 0) {
        showSlide(currentSlideIndex);
        startAutoPlay(); // Start auto-play when page loads
    }

    // Add event listeners for the info navigation buttons
    if (prevInfoButton) {
        prevInfoButton.addEventListener('click', () => {
            console.log('Previous Info button clicked!');
            stopAutoPlay(); // Stop auto-play on manual navigation
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
            startAutoPlay(); // Resume auto-play
        });
    }

    if (nextInfoButton) {
        nextInfoButton.addEventListener('click', () => {
            console.log('Next Info button clicked!');
            stopAutoPlay(); // Stop auto-play on manual navigation
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
            startAutoPlay(); // Resume auto-play
        });
    }

    // Pause auto-play on hover for the slide container
    if (slideContainer) {
        slideContainer.addEventListener('mouseenter', stopAutoPlay);
        slideContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // Get references to all team buttons
    const teamButtons = document.querySelectorAll('.team-button');

    // Add event listeners for each team button
    teamButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const teamName = event.target.textContent;
            console.log(`${teamName} team button clicked!`);
            const mainContentArea = document.querySelector('.main-content .content-area');
            if (mainContentArea) {
                let dynamicContent = '';
                switch(teamName) {
                    case 'REDBULL':
                        dynamicContent = `<p class="dynamic-content-title">Red Bull Racing: Dominance in Modern F1</p>
                                          <p class="dynamic-content-text">Red Bull Racing has emerged as a dominant force in Formula 1, securing multiple Constructors' and Drivers' Championships. Known for their innovative aerodynamics and fierce competition, they continue to push the boundaries of performance.</p>
                                          <p class="dynamic-content-text">Key drivers include Max Verstappen and Sergio Pérez.</p>`;
                        break;
                    case 'MCLAREN':
                        dynamicContent = `<p class="dynamic-content-title">McLaren: A Legacy of Innovation</p>
                                          <p class="dynamic-content-text">McLaren boasts a rich history in Formula 1, with numerous championships and legendary drivers. They are celebrated for their engineering prowess and iconic liveries.</p>
                                          <p class="dynamic-content-text">Current drivers include Lando Norris and Oscar Piastri.</p>`;
                        break;
                    case 'FERRARI':
                        dynamicContent = `<p class="dynamic-content-title">Scuderia Ferrari: The Heart of Formula 1</p>
                                          <p class="dynamic-content-text">Ferrari is synonymous with Formula 1, being the oldest and most successful team in the sport's history. Their passionate Tifosi and iconic red cars are a cornerstone of F1.</p>
                                          <p class="dynamic-content-text">Drivers: Charles Leclerc and Carlos Sainz.</p>`;
                        break;
                    case 'MERCEDES':
                        dynamicContent = `<p class="dynamic-content-title">Mercedes-AMG Petronas F1 Team: Era of Hybrid Power</p>
                                          <p class="dynamic-content-text">Mercedes dominated the hybrid era of Formula 1, securing an unprecedented eight consecutive Constructors' Championships. Their engineering excellence and powerful engines set new benchmarks.</p>
                                          <p class="dynamic-content-text">Key drivers include Lewis Hamilton and George Russell.</p>`;
                        break;
                    default:
                        dynamicContent = `<p class="dynamic-content-title">Displaying information for: <span class="highlight">${teamName}</span></p>
                                          <p class="dynamic-content-text">This content would be dynamically loaded based on the selected team.</p>`;
                }
                mainContentArea.innerHTML = dynamicContent;
            }
        });
    });

    console.log('F1 Hub JavaScript loaded and ready!');
});
