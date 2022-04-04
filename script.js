const resultHours = document.querySelector('#result-hours')
const resultMinutes = document.querySelector('#result-minutes')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const hoursList = document.querySelector('#hours-list')
const minutesList = document.querySelector('#minutes-list')

hours.oninput = () => {
    resultHours.textContent = hours.value;

    if (hours.value.length == 2) {
        minutes.focus()
    }

    if (hours.value.length > 2) {
        hours.addEventListener('keyup', (e) => {
            hours.value = e.key;
            resultHours.textContent = hours.value;
        })
    }
}

minutes.oninput = () => {
    resultMinutes.textContent = minutes.value
}

const liTimeH = document.getElementsByClassName('li-time-h')
let hoursArray = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];

const liTimeM = document.getElementsByClassName('li-time-m')
let minutesArray = ['05', '10', '15', '20', '30', '35', '40', '45'];

for (let i = 0; i < hoursArray.length; i++) {
    liTimeH[i].onclick = () => {

        if (hours.value.length > 0) {
            hours.value = '';
            resultHours.textContent = '';
        }
        hours.value = hoursArray[i];
        resultHours.textContent = hours.value;
        minutes.focus()

    }
}

for (let i = 0; i < minutesArray.length; i++) {
    liTimeM[i].onclick = () => {
        if (hours.value == '') {
            hours.value = '00';
            resultHours.textContent = hours.value;
        }
        minutes.value = minutesArray[i];
        resultMinutes.textContent = minutes.value;
    }
}

// HIDE LIST OR NOT
hours.onfocus = () => {
    minutesList.style.display = 'none';
    hoursList.style.display = 'flex';
}
minutes.onfocus = () => {
    hoursList.style.display = 'none';
    minutesList.style.display = 'flex';
}




