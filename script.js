document.addEventListener("DOMContentLoaded", function setupShareButton() {
    const shareButton = document.getElementById("aboutShareSvg");

    if (shareButton && navigator.share) {
        shareButton.addEventListener("click", handleShareButtonClick);
    } else {
        console.log("Web Share API is not supported.");
    }
});

function handleShareButtonClick() {
    navigator.share({
        title: "Explore Ricardo's Portfolio",
        text: "Discover more about me!",
        url: window.location.href
    })
        .then(() => console.log("Successfully shared!"))
        .catch((error) => console.error("Error sharing:", error));
}

//Sidebar glow

document.addEventListener("DOMContentLoaded", function setupIsActive() {
    // Get all the sections and sidebar links
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll("#sidebar li a");

    // Function to check if a section is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to update the active section and corresponding sidebar link
    function updateActiveSection() {
        sections.forEach((section, index) => {
            if (isElementInViewport(section)) {
                // Add 'active' class to the current section
                section.classList.add("active");

                // Remove 'active' class from other sections
                sections.forEach((s, i) => {
                    if (i !== index) {
                        s.classList.remove("active");
                    }
                });

                // Add 'active' class to the corresponding sidebar link
                sidebarLinks[index].classList.add('active');

                // Remove 'active' class from other sidebar links
                sidebarLinks.forEach((link, i) => {
                    if (i !== index) {
                        link.classList.remove('active');
                    }
                });

                // Exit the loop once the first active section is found
                return;
            }
        });
    }

    // Update the active section on scroll
    window.addEventListener('scroll', updateActiveSection);

    // Update the active section on page load
    updateActiveSection();
});
