function volume_sphere() {
  // Get the radius value from the input field
  const radius = parseFloat(document.getElementById("radius").value);

  // Validate the input
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return false; // Prevent form submission
  }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the volume to four decimal places
  const roundedVolume = volume.toFixed(4);

  // Display the calculated volume in the output field
  document.getElementById("volume").value = roundedVolume;

  return false; // Prevent form submission
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;