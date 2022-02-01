const scriptURL ='https://script.google.com/macros/s/AKfycbzaJMlRx73R6NDr8ZXBaApqGVGgMH2wZnkiVqMB0jPwkl0Czvb9Q-i7VBpKgbgQG4IyTg/exec';
    const form = document.form['ContactMe'];
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');

form.addEvenListener('submit', (e) => {
    e.preventDefault();
    //ketika tombol kirim diKlik
    //tampilkan tombol loading, hilangkan ombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL , { method: 'POST', body:new FormData(form) })
    .then((response)=> {

        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

        myAlert.classList.toggle('d-none');

        console.log('succes!', response)
    })
    .catch((error) =>console.error('Error'.error.message));
});