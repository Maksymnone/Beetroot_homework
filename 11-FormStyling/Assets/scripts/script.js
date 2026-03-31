$(document).ready(function () {
    $(".select2").select2();
});


document.addEventListener('change', function (e) {
    if (e.target.classList.contains('file-upload')) {
        e.target.nextElementSibling.innerText = e.target.files[0].name
    }
})
