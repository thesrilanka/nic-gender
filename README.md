<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sri Lankan NIC Gender Extractor</title>
    <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
    
        .container {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
          margin-top: 20px; /* Adds space above */
        }
    
        h1 {
          color: #333;
        }
    
        input[type="text"] {
          width: 100%;
          padding: 10px;
          margin: 20px 0;
          border-radius: 4px;
          border: 1px solid #ddd;
          font-size: 16px;
        }
    
        button {
          padding: 10px 20px;
          background-color: #e47106;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
    
        button:hover {
          background-color: #0d10a8;
        }
    
        .result {
          margin-top: 20px;
          padding: 10px;
          background-color: #f9f9f9;
          border-radius: 4px;
          border: 1px solid #ddd;
        }
    
        .content-box {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 800px;
          margin-top: 20px;  /* Adds space between the two divs */
          text-align: left;
        }
    
        .footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 10px 0;
          width: 100%;
          position: relative;
          bottom: 0;
        }
    
        .footer p {
          margin: 0;
          font-size: 14px;
        }
      </style>
    
</head>

<body>

    <div class="container">
        <h1>Sri Lankan NIC Gender Extractor</h1>
        <p>Enter the NIC number to determine gender.</p>
        <input type="text" id="nicNumber" placeholder="Enter NIC number" maxlength="12">
        <button onclick="extractGender()">Get Gender</button>

        <div class="result" id="result"></div>
    </div>

    <div class="content-box">
        <p>The Sri Lankan NIC Gender Extractor is a web-based tool or application designed to extract and display a
            person's gender based on their National Identity Card (NIC) number issued by the government of Sri Lanka.
        </p>
        <p>The NIC number is a unique identification number that is assigned to every Sri Lankan citizen. The structure
            of the NIC number provides certain information about the individual, including gender.</p>
    </div>


    <div class="footer">
        <p><a href="https://thesrilanka.lk/nic-converter/" target="_blank">NIC Converter</a> | <a
                href="https://thesrilanka.lk/nic-converter/" target="_blank">Old to New NIC Converter</a></p>
    </div>


    <script>
        function extractGender() {
            const nic = document.getElementById('nicNumber').value.trim();
            const resultDiv = document.getElementById('result');

            if (nic === "") {
                resultDiv.innerHTML = "<p class='error'>Please enter an NIC number.</p>";
                return;
            }

            // Remove any non-numeric characters (e.g., letters like "V" or other non-numeric characters)
            const numericPart = nic.replace(/[^\d]/g, '');

            // Check for valid NIC length (Old: 9 digits, New: 12 digits)
            if (numericPart.length !== 9 && numericPart.length !== 12) {
                resultDiv.innerHTML = "<p class='error'>Please enter a valid NIC number (9 or 12 digits).</p>";
                return;
            }

            let gender = "";

            if (numericPart.length === 9) {
                // For Old Format NIC, check the 3rd to 5th digits (e.g., 666)
                const genderDigits = numericPart.substring(2, 5);  // Extract digits 3, 4, 5 (index 2, 3, 4)

                const genderValue = parseInt(genderDigits); // Convert extracted digits to an integer

                if (genderValue > 500) {
                    gender = "Female";
                } else {
                    gender = "Male";
                }

            } else if (numericPart.length === 12) {
                // For New Format NIC, check the 5th to 7th digits (e.g., 192)
                const genderDigits = numericPart.substring(4, 7);  // Extract digits 5, 6, 7 (index 4, 5, 6)

                const genderValue = parseInt(genderDigits); // Convert extracted digits to an integer

                if (genderValue > 500) {
                    gender = "Female";
                } else {
                    gender = "Male";
                }
            }

            resultDiv.innerHTML = `<p class='success'>Gender: ${gender}</p>`;
        }
    </script>

</body>

</html>
