// ==========================================
// MASTER JAVASCRIPT FOR ALL PORTFOLIO ACTIVITIES
// ==========================================

// Wait for the HTML to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // Get the current page URL/filename
    const currentPage = window.location.pathname.split("/").pop();
    console.log("Loaded page: " + currentPage);



    // Add hover effect
    backBtn.addEventListener("mouseenter", () => {
        backBtn.style.transform = "scale(1.05)";
        backBtn.style.backgroundColor = "#1ed760";
    });
    backBtn.addEventListener("mouseleave", () => {
        backBtn.style.transform = "scale(1)";
        backBtn.style.backgroundColor = "#1DB954";
    });

    // Add the button to the page
    document.body.appendChild(backBtn);


    // ==========================================
    // 1. MIDTERM WEB LOGIC
    // ==========================================
    if (currentPage === "home.html" || currentPage === "profile.html" || currentPage === "Registration.html") {
        console.log("Act 3 scripts loaded.");
        
        if (currentPage === "Registration.html") {
            const form = document.querySelector("form");
            if (form) {
                form.addEventListener("submit", (e) => {
                    e.preventDefault(); 
                    alert("Registration submitted successfully! (Act 3 JS)");
                });
            }
        }
    }

    // ==========================================
    // 2. FINALS WEB LOGIC
    // ==========================================
    if (currentPage === "Act1_Finals.html" || currentPage === "index.html" || currentPage === "profile.html") {
        
        if (currentPage === "Act1_Finals.html") {
            const btn = document.querySelector("button");
            if (btn) {
                btn.addEventListener("click", () => {
                    alert("You clicked the button on Finals Act 1!");
                });
            }
        }

        if (currentPage === "index.html") {
            const counter = document.getElementById("counter");
            if (counter) {
                let count = 0;
                counter.addEventListener("click", () => {
                    count++;
                    counter.innerText = "Clicks: " + count;
                });
            }
        }
    }
});