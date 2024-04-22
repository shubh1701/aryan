<script>
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll("nav ul li a");
        navLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the default behavior of anchor tags
                const href = this.getAttribute("href"); // Get the href attribute value
                // Navigate to the page
                window.location.href = href;
            });
        });
    });
</script>
