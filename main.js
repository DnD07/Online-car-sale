let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onClick = () => {
    search.classList.toggle('active');
}


document.querySelector('#login-btn').onClick = () =>{
    document.querySelector('.login-form-container').classList.toogle('active');
}


