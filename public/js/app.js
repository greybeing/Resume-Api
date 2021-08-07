// const contactForm = document.querySelector('#contactForm');

// let Name = document.getElementById('contactName');
// let Email = document.getElementById('contactEmail');
// let Subject = document.getElementById('contactSubject');
// let Message = document.getElementById('contactMessage');


// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let formData = {
//         Name: Name.value,
//         Email: Email.value,
//         Subject: Subject.value,
//         Message: Message.value
//     }
    
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '/');
//     xhr.setRequestHeader('content-type','application/json');
//     xhr.onload = function() {
//         if(xhr.responseText == 'success') {
//             console.log(xhr.responseText);
//             alert('Email successfully sent');
//             Name.value = '';
//             Email.value = '';
//             Subject.value = '';
//             Message.value = '';
//         }else{
//             alert('oops! something went wrong')
//         }
//     }

//     xhr.send(JSON.stringify(formData));


//     })



