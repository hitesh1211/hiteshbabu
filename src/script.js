// Your color combinations
console.log("Script executed!");
const colorSets = [
    ["#ff5733", "#33ff57"],
    ["#3366ff", "#ff3366"],
    ["#22c1c3", "#fdbb2d"],
    ["#ff9966", "#ff5e62"],
    ["#ff9900", "#66ccff"],
    ["#ff3399", "#66ff33"],
    ["#9966ff", "#ff9966"],
    ["#ff6666", "#66ffcc"],
    ["#ffcc33", "#3366cc"],
    ["#7b4397", "#dc2430"],
    ["#43cea2", "#185a9d"],
    ["#360033", "#0b8793"],
    ["#D38312", "#A83279"],
    ["#73c8a9", "#373b44"],
    ["#fdfc47", "#24fe41"],
    ["#00c6ff", "#0072ff"],
    ["#780206", "#061161"],
    ["#f0c27b", "#4b1248"],
    ["#ff4e50", "#f9d423"],
    ["#b993d6", "#8ca6db"],
    ["#00d2ff", "#3a7bd5"],
    ["#d53369", "#cbad6d"],
    ["#fc354c", "#0abfbc"],
    ["#5f2c82", "#49a09d"],
    ["#3d7eaa", "#ffe47a"],
    // Add more sets as needed
];

// Function to pick a random color set
function getRandomColorSet() {
    const randomIndex = Math.floor(Math.random() * colorSets.length);
    return colorSets[randomIndex];
}

// Get the selected color set
const selectedColorSet = getRandomColorSet();

// Set the SCSS variables using the selected colors
document.documentElement.style.setProperty("--primary-color", selectedColorSet[0]);
document.documentElement.style.setProperty("--secondary-color", selectedColorSet[1]);
console.log(selectedColorSet[0], selectedColorSet[1])