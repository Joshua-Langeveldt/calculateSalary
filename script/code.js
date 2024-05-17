function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

document.getElementById('user').addEventListener('submit', function(event) {
    event.preventDefault();

    let data = {};
    let allFieldsFilled = true;
    ['firstName', 'lastName', 'age', 'dob', 'gender', 'greeting', 'subjects', 'working', 'hours', 'rate'].forEach(id => {
        let aff = document.getElementById(id);
        if (aff.type === 'checkbox') {
            data[id] = aff.checked;
        } else if (aff.type === 'radio') {
            data[id] = document.querySelector(`input[name="${id}"]:checked`).value;
        } else {
            data[id] = aff.value;
        }

        if (!data[id]) {
            allFieldsFilled = false;
            aff.style.borderColor = 'red';
        } else {
            aff.style.borderColor = '';
        }
    });

    if (!allFieldsFilled) {
        alert('All fields are necessary.');
        return;
    }

    if (data.hours < 0 || data.rate < 0) {
        alert('Hours and rate must be positive numbers.');
        return;
    }

    let dobYear = new Date(data.dob).getFullYear();
    if (isLeapYear(dobYear)) {
        document.getElementById('dob').style.backgroundColor = 'lightgreen';
    } else {
        document.getElementById('dob').style.backgroundColor = 'purple';
    }

    let salary = data.hours * data.rate;
    alert(`Hello Dear ${data.greeting} ${data.firstName} ${data.lastName},\nWe hope you're doing well; here's your salary after deduction. R${salary}\nThank you`);

});
