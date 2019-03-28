document.addEventListener("DOMContentLoaded", function() {

    const tableTopElements = document.querySelectorAll('.table-top');
    const legsElements = document.querySelectorAll('.legs');
    const tableTopColor1 = document.querySelector('.table-top-color1');
    const tableTopColor2 = document.querySelector('.table-top-color2');
    const tableLegsColor1 = document.querySelector('.table-legs-color1');
    const tableLegsColor2 = document.querySelector('.table-legs-color2');
    const inputEmail = document.querySelector('#inputEmail3');
    const sendRequest = document.querySelector('.send-request');

    window.addEventListener('load', function () {
        tableTopElements.forEach(e => {
            e.style.fill = "url(#p1)"
        })
    });
    window.addEventListener('load', function () {
        legsElements.forEach(e => {
            e.style.fill = "url(#p1)"
        })
    });


    tableTopColor1.addEventListener('click', function () {
        tableTopElements.forEach(e => {
            e.style.fill = "url(#p1)"
        })
    });

    tableTopColor2.addEventListener('click', function () {
        tableTopElements.forEach(e => {
            e.style.fill = "url(#p2)"
            })
    });

    tableLegsColor1.addEventListener('click', function () {
        legsElements.forEach(e => {
            e.style.fill = "url(#p1)"
        })
    });
    tableLegsColor2.addEventListener('click', function () {
        legsElements.forEach(e => {
            e.style.fill = "url(#p2)"
        })
    });
    inputEmail.addEventListener('keydown', function () {
        if (inputEmail.value.includes('@') === true) {
            sendRequest.style.backgroundColor='#AFCC66';
            inputEmail.style.outline='5px solid #AFCC66';
        } else {
            sendRequest.style.backgroundColor='#C95E6D';
            inputEmail.style.outline='5px solid #C95E6D';

        }
    })

    //mapa
    function initMap() {
        var test= {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: test
        });
        var marker = new google.maps.Marker({
            position: test,
            map: map
        });
    }
});