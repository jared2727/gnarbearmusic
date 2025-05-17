// JS document for gnarbearmusic.com

document.addEventListener("DOMContentLoaded", (event) => {
    // calculate scroll for progress indicator
    window.addEventListener("scroll", function () {
        const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressBar = document.getElementById("scroll-progress");
        // Prevent division by zero if scrollableHeight is 0
        if (progressBar) { // Check if progressBar exists
            const progress = scrollableHeight > 0 ? (scrolled / scrollableHeight) * 100 : 0;
            progressBar.style.width = progress + "%";
        }
    });

    // --- Elements ---
    const menuBurger = document.querySelector("#menuBurger");
    const mobileMenu = document.querySelector("#mobileMenu");
    const menuOpenIcon = document.querySelector("#menuBurgerOpen"); // Renamed for clarity
    const menuCloseIcon = document.querySelector("#menuBurgerClose"); // Renamed for clarity
    const moonIcon = document.querySelector("#moonIcon");
    const bodyElement = document.querySelector("body"); // Select body once
    const homeLogo = document.querySelector("#logo");

    // --- Helper Functions ---

    // Function to CLOSE the mobile menu
    function closeMobileMenu() {
        if (mobileMenu && mobileMenu.classList.contains("top-[45px]")) { // Check if actually open
            mobileMenu.classList.remove("top-[45px]");
            mobileMenu.classList.add("top-[-120px]");
            if (menuBurger) {
                menuBurger.classList.add("animate-quickspinrev");
                menuBurger.classList.remove("animate-quickspin");
            }
            // Show open icon, hide close icon
            if (menuOpenIcon) menuOpenIcon.removeAttribute("hidden");
            if (menuCloseIcon) menuCloseIcon.setAttribute("hidden", "");
        }
    }

    // Function to OPEN the mobile menu
    function openMobileMenu() {
        if (mobileMenu && mobileMenu.classList.contains("top-[-120px]")) { // Check if actually closed
            mobileMenu.classList.add("top-[45px]");
            mobileMenu.classList.remove("top-[-120px]");
            if (menuBurger) {
                menuBurger.classList.add("animate-quickspin");
                menuBurger.classList.remove("animate-quickspinrev");
            }
            // Hide open icon, show close icon
            if (menuOpenIcon) menuOpenIcon.setAttribute("hidden", "");
            if (menuCloseIcon) menuCloseIcon.removeAttribute("hidden");
        }
    }

    // --- Event Listeners ---

    // Mobile menu burger toggle Listener
    if (menuBurger && mobileMenu && menuOpenIcon && menuCloseIcon) { // Check elements exist
        menuBurger.addEventListener("click", function (e) {
            e.stopPropagation(); // Important: Prevent click from bubbling to document
            // Toggle menu based on its current state
            if (mobileMenu.classList.contains("top-[-120px]")) {
                openMobileMenu(); // Call the open function
            } else {
                closeMobileMenu(); // Call the close function
            }
            // Note: Icon toggling is now inside open/close functions
        });
    } else {
        console.error("Menu burger, mobile menu, or icons not found.");
    }

    // Listener for clicks outside the menu
    if (mobileMenu && menuBurger) { // Check elements exist
        document.addEventListener('click', function(event) {
            // Check if the menu, burger, or elements inside them were clicked
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnBurger = menuBurger.contains(event.target);
            const isClickOnHome = homeLogo.contains(event.target);
            const isClickOnMoon = moonIcon.contains(event.target);

            // If the menu is open AND the click was NOT inside the menu AND NOT on the burger button
            if (mobileMenu.classList.contains("top-[45px]") && !isClickInsideMenu && !isClickOnBurger && !isClickOnHome && !isClickOnMoon) {
                closeMobileMenu(); // Call the close function
            }
        });
    }

    // Toggle moon icon on/off and toggle light/dark mode
    if (moonIcon && bodyElement) { // Check elements exist
        moonIcon.addEventListener("click", function () {
            // Use classList.toggle for cleaner dark mode switching (optional)
            const isDarkMode = bodyElement.classList.contains("bg-cool_gray-500");

            if (!isDarkMode) { // If currently light mode, switch to dark
                moonIcon.setAttribute("fill", "currentColor");
                bodyElement.classList.remove("bg-gray-100", "text-gray-900");
                bodyElement.classList.add("bg-cool_gray-500", "text-slate-200");
            } else { // If currently dark mode, switch to light
                moonIcon.setAttribute("fill", "none");
                bodyElement.classList.remove("bg-cool_gray-500", "text-slate-200");
                bodyElement.classList.add("bg-gray-100", "text-gray-900");
            }
        });
    } else {
            console.error("Moon icon or body element not found.");
    }
    
    // Copy button
    const copyEl = document.querySelector("#copy-el");
    copyEl.addEventListener("click", function () {
        navigator.clipboard.writeText("bookme@gnarbearmusic.com");
    });
});


