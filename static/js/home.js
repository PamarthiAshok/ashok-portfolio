const homePageMenuButton = document.querySelector(
    '.home_page_menu_button'
);

const homePageNavigation = document.querySelector(
    '#home_page_navigation'
);

// Open or close the menu when clicking the menu button
homePageMenuButton.addEventListener('click', function () {
    homePageNavigation.classList.toggle('is-open');

    const isOpen = homePageNavigation.classList.contains('is-open');

    homePageMenuButton.setAttribute('aria-expanded', isOpen);

    homePageMenuButton.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation' : 'Open navigation'
    );
});

// Close the menu when clicking a navigation link
const homePageNavigationLinks = homePageNavigation.querySelectorAll('a');

homePageNavigationLinks.forEach(function (navigationLink) {
    navigationLink.addEventListener('click', function () {
        homePageNavigation.classList.remove('is-open');

        homePageMenuButton.setAttribute('aria-expanded', 'false');
        homePageMenuButton.setAttribute('aria-label', 'Open navigation');
    });
});


/* Reveal project and education cards when scrolling */
const animatedCards = document.querySelectorAll(
    '.ashok_project_item, .ashok_education_item'
);

const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
).matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const cardObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedCards.forEach(function (card) {
        card.classList.add('reveal-ready');
        cardObserver.observe(card);
    });
}
