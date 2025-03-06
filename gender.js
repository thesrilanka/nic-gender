function extractGender() {
  const nic = document.getElementById("nicNumber").value.trim();
  const resultDiv = document.getElementById("result");

  if (nic === "") {
    resultDiv.innerHTML = "<p class='error'>Please enter an NIC number.</p>";
    return;
  }

  // Remove any non-numeric characters (e.g., letters like "V" or other non-numeric characters)
  const numericPart = nic.replace(/[^\d]/g, "");

  // Check for valid NIC length (Old: 9 digits, New: 12 digits)
  if (numericPart.length !== 9 && numericPart.length !== 12) {
    resultDiv.innerHTML =
      "<p class='error'>Please enter a valid NIC number (9 or 12 digits).</p>";
    return;
  }

  let gender = "";

  if (numericPart.length === 9) {
    // For Old Format NIC, check the 3rd to 5th digits (e.g., 666)
    const genderDigits = numericPart.substring(2, 5); // Extract digits 3, 4, 5 (index 2, 3, 4)

    const genderValue = parseInt(genderDigits); // Convert extracted digits to an integer

    if (genderValue > 500) {
      gender = "Female";
    } else {
      gender = "Male";
    }
  } else if (numericPart.length === 12) {
    // For New Format NIC, check the 5th to 7th digits (e.g., 192)
    const genderDigits = numericPart.substring(4, 7); // Extract digits 5, 6, 7 (index 4, 5, 6)

    const genderValue = parseInt(genderDigits); // Convert extracted digits to an integer

    if (genderValue > 500) {
      gender = "Female";
    } else {
      gender = "Male";
    }
  }

  resultDiv.innerHTML = `<p class='success'>Gender: ${gender}</p>`;
}
