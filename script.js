function calculateDensity() {
    const massAir = parseFloat(document.getElementById('massAir').value);
    const massWater = parseFloat(document.getElementById('massWater').value);
    const resultDiv = document.getElementById('result');
    const sampleCircle = document.getElementById('sampleCircle');

    // Input validation
    if (isNaN(massAir) || isNaN(massWater)) {
        resultDiv.textContent = "Please enter valid numbers for both masses";
        moveSample("top");
        return;
    }
    if (massWater <= 0) {
        resultDiv.textContent = "Mass in water must be greater than zero";
        moveSample("top");
        return;
    }
    if (massAir <= 0) {
        resultDiv.textContent = "Mass in air must be greater than zero";
        moveSample("top");
        return;
    }
    if (massAir <= massWater) {
        resultDiv.textContent = "Mass in air must be greater than mass in water";
        moveSample("top");
        return;
    }

    // Calculate density
    const density = massAir / massWater;

    // Show result
    resultDiv.innerHTML = `<strong>Density of the material is ${density.toFixed(4)} g/cm³</strong><br>
        ${density > 1 ? "Object will sink in water" : "Object will float on water"}`;

    // Move sample in beaker
    if (density > 1) {
        moveSample("bottom");
    } else {
        moveSample("top");
    }
}

// Move the sample in SVG beaker
function moveSample(position) {
    const sampleCircle = document.getElementById('sampleCircle');
    if (position === "bottom") {
        sampleCircle.setAttribute("cy", "80");
        sampleCircle.setAttribute("fill", "#FFB199");
    } else {
        sampleCircle.setAttribute("cy", "30");
        sampleCircle.setAttribute("fill", "#FF6F61");
    }
}













