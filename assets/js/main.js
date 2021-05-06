// DOM ELEMENTS

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Options
const showAmPm = true;

// SHOW TIME
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // SET AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
        )} ${showAmPm ? amPM : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
    function setBgGret() {
        // let today = new Date(2019, 06, 10, 20, 33, 30),
        let today = new Date(),
        hour = today.getHours();

        if(hour < 12){
            // Morning
            document.body.style.backgroundImage = "url('/assets/img/morning.jpg')"
            greeting.textContent = 'Good Morning';
        } else if(hour < 18) {
            // Afternoon
            document.body.style.backgroundImage = "url('/assets/img/afternoon.jpg')"
            greeting.textContent = 'Good Afternoon';
        } else {
            // Evening
            document.body.style.backgroundImage = "url('/assets/img/evening.jpg')"
            greeting.textContent = 'Good Evening';
            //document.body.style.color ='white'
        }
    }

    //Get Name
    function getName() {
        if(localStorage.getItem('name') === null){
            name.textContent = '[Enter Name]';
        } else {
            name.textContent = localStorage.getItem('name');
        }
    }

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        // Make Sure Enter is Pressed
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }

}


 //Get Focus
 function getFocus() {
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // Make Sure Enter is Pressed
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }

}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGret();
getName();
getFocus();