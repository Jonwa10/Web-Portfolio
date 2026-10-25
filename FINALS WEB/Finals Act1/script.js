// ---------- Element references ----------
const info   = document.getElementById("info");
const kurso  = document.getElementById("kurso");
const status = document.getElementById("status");
const input  = document.getElementById("brewedCoffee");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const coffeeSelect = document.getElementById("coffee1");
const blackCoffeeSelect = document.getElementById("blackCoffee");
const pfp = document.getElementById("pfp1");

// ---------- Reusable helpers ----------
const setInfo   = (msg) => (info.textContent = msg);
const setStatus = (msg) => (status.textContent = msg);
const resetInfo = () => setInfo("James");

// ---------- Click events ----------
button1.addEventListener("click", () => {
    setInfo("Tara Kapeeee ☕");
});

button2.addEventListener("dblclick", () => {
    info.style.color = "green";
});

// ---------- Input events ----------
input.addEventListener("change", () => {
    const name = input.value.trim();
    setInfo(name ? `Hello, ${name}!` : "James");
});

input.addEventListener("input", () => {
    setInfo(input.value ? `Typing: ${input.value}` : "James");
});

// ---------- Image events ----------
pfp.addEventListener("mouseover", () => setInfo("Your mouse reached the image 👀"));
pfp.addEventListener("mouseout",  () => setInfo("Your mouse left the image"));

// ---------- Hover status (DRY helper) ----------
function bindHoverStatus(el, label) {
    el.addEventListener("mouseenter", () => setStatus(`${label} is now active`));
    el.addEventListener("mouseleave", () => setStatus("👋 Welcome!"));
}

bindHoverStatus(button1, "Button 1");
bindHoverStatus(button2, "Button 2");
bindHoverStatus(input, "The input field");
bindHoverStatus(coffeeSelect, "The coffee selector");
bindHoverStatus(pfp, "The profile image");

// ---------- Select change (bonus) ----------
coffeeSelect.addEventListener("change", () => {
    const choice = coffeeSelect.value;
    if (choice) setInfo(`You picked ${choice}! ☕`);
});

blackCoffeeSelect.addEventListener("change", () => {
    const choice = blackCoffeeSelect.value;
    if (choice) setStatus(`Isa pang kape: ${choice} ☕`);
});