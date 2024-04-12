![Screenshot (19)](https://github.com/MuhammadTayyab74/CodeAlpha-Age-Calculator-By-Muhammad_Tayyab/assets/164275737/95e771cb-9279-439e-9402-5509d67f4d26)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
    <link type="image/png" sizes="16x16" rel="icon" href="https://img.icons8.com/bubbles/50/apple-calculator.png">
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
   <!-- CSS -->
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <div class="podium-container">
        <div class="container">
            <div class="form-sec col-lg-5">
                <div class="container">
                    <div class="header ">
                        <h1><i class="fas fa-birthday-cake"></i> Age Calculator</h1>
                    </div>
                    <div class="form-section">
                        <form id="ageForm" onsubmit="return false;">
                            <div class="form-group my-3">
                                <label for="dobDay">Day</label>
                                <input type="number" class="form-control" id="dobDay" min="1" max="31" placeholder="Select Day" required>
                            </div>
                            <div class="form-group my-3">
                                <label for="dobMonth">Month</label>
                                <select id="dobMonth" class="form-control " required>
                                    <option value="" disabled selected>Select Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div class="form-group my-3">
                                <label for="dobYear">Year</label>
                                <input type="number" class="form-control" id="dobYear" min="1940" max="2024" placeholder="Select Year" pattern="\d{4}" required>
                            </div>
                            <button type="button" class="btn btn-custom btn-block py-3 mt-4" onclick="validateInputs()"><i class="fas fa-calculator"></i> Calculate Age</button>
                        </form>
                    </div>
                    <div class="result-section" id="resultSection" style="display: none;">
                        <div class="result" id="result"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="float-right mt-5 mr-5">
            <h6 class="font-weight-bold mt-5">Designed By <a href="" class="font-italic text-info">Muhammad Tayyab</a> </h6>
        </div>
    </div>

    <!-- Bootstrap JS and Font Awesome JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="age-calculator.js"></script>

    <!-- Modal alerts -->
    <!-- Invalid Year Format Alert -->
    <div class="modal fade" id="invalidYearAlert" tabindex="-1" role="dialog" aria-labelledby="invalidYearAlertLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="invalidYearAlertLabel">Invalid Year Format</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Please enter a valid year in YYYY format (e.g., 1990).
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-custom" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Invalid Year Range Alert -->
    <div class="modal fade" id="invalidYearRangeAlert" tabindex="-1" role="dialog" aria-labelledby="invalidYearRangeAlertLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="invalidYearRangeAlertLabel">Invalid Year Range</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Please enter a year between 1940 and the current year (2024).
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-custom" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Preloader -->
    <div class="preloader">
        <div class="loader"></div>
    </div>
</body>
</html>
