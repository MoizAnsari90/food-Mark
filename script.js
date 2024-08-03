window.onscroll = () =>{
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
        
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();


let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let emailSet  = 'abc@gmail.com';
    let passwordSet = '1234';

    let task = email.value;
    let mask = password.value;

    if (task === emailSet && mask === passwordSet) {
        alert('Your Password Is ok');
    } else {
        alert('Your Password Is Not ok');
    }
});