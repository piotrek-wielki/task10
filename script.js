const firstNameInput = document.getElementById('first-name-input');
const secondNameInput = document.getElementById('second-name-input');
const phoneInput = document.getElementById('phone-input');
const button = document.getElementById('button');

function getFullName(firstName, secondName) {
    return firstName + ' ' + secondName;
}

function getPhoneNumber(phoneNumber) {
    if (!Number.isNaN(Number(phoneNumber)) & phoneNumber.length >= 9) {
        return '+48' + phoneNumber;
    } else {
        return '+48 phone error';
    }
}

function popUp () {
    const name1 = firstNameInput.value;
    const name2 = secondNameInput.value;
    const phone = phoneInput.value;
    alert(getFullName(name1, name2));
    alert(getPhoneNumber(phone));
}

button.addEventListener('click', popUp);