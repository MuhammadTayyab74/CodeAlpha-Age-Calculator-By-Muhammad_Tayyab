function validateInputs() {
            var dobDay = document.getElementById('dobDay').value;
            var dobMonth = document.getElementById('dobMonth').value;
            var dobYear = document.getElementById('dobYear').value;

            if (!dobDay || !dobMonth || !dobYear) {
                // Display alert if any input is empty
                alert('Please fill all the fields.');
            } else {
                var yearPattern = /^\d{4}$/;
                if (!yearPattern.test(dobYear)) {
                    // Display modal alert if year input does not consist of 4 digits
                    $('#invalidYearAlert').modal('show');
                } else if (parseInt(dobYear) < 1940 || parseInt(dobYear) > (new Date()).getFullYear()) {
                    // Display modal alert if year input is not within the specified range
                    $('#invalidYearRangeAlert').modal('show');
                } else {
                    calculateAge();
                }
            }
        }

        function calculateAge() {
            $(".preloader").show();
            setTimeout(function(){
                var dobDay = parseInt(document.getElementById('dobDay').value);
                var dobMonth = parseInt(document.getElementById('dobMonth').value);
                var dobYear = parseInt(document.getElementById('dobYear').value);

                var today = new Date();
                var birthDate = new Date(dobYear, dobMonth - 1, dobDay);

                var ageYear = today.getFullYear() - birthDate.getFullYear();
                var ageMonth = today.getMonth() - birthDate.getMonth();
                var ageDay = today.getDate() - birthDate.getDate();

                if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
                    ageYear--;
                    ageMonth += 12;
                }

                if (ageDay < 0) {
                    var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
                    ageDay += prevMonth.getDate();
                    ageMonth--;
                }

                var ageString = '';
                if (ageYear > 0) {
                    ageString += ageYear + ' years ';
                }
                if (ageMonth > 0) {
                    ageString += ageMonth + ' months ';
                }
                if (ageDay > 0) {
                    ageString += ageDay + ' days ';
                }

                document.getElementById('result').innerText = "Your age is: " + ageString;
                $(".preloader").hide();
                $("#resultSection").show();
            }, 1500);
        }