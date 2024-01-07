// document.getElementById('light-theme').addEventListener('click', function() {
//     document.body.classList.remove('dark');
//    });
   
//    document.getElementById('dark-theme').addEventListener('click', function() {
//     document.body.classList.add('dark');
//    });

function openFileInput() {
    document.getElementById('image-input').click();
}

function setBackgroundImage(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/jpg')) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const backgroundImage = e.target.result;
            document.getElementById('image-container').style.backgroundImage = `url('${backgroundImage}')`;
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid JPG or JPEG file.');
    }
}
