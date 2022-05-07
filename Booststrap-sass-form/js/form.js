let btn = document.getElementById('btn');
btn.addEventListener('click', save);

function save() {
    if (validateForm()) {
        let formData = new FormData(document.getElementById('registryForm'));
        for(let pair of formData.entries()) {
            saveStorage(pair[0], pair[1])
        }
    }
}

// remove('option');


// console.log(pair[0]+ ', '+ pair[1]);
