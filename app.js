let form = document.querySelector('.form');
let inpUserName = document.querySelector('.form input[type=text]');
let inpPassword = document.querySelector('.form input[type=password]');

let base_api = "https://dummyjson.com";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = {
        username: inpUserName.value,
        password: inpPassword.value,
    };

    fetch(`${base_api}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Username or password is incorrect!');
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        alert(err.message);
    })
    .finally(() => {
        console.log('Finished');
    });
});