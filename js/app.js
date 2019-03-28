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


// table.html
// zmienne
//
// const lightTableTop = document.querySelector('.light-tabletop');
// const tableTop = document.querySelector('.table-Top');
// var firstColor = document.querySelector('.first-color');
// const tabble = document.querySelector('#table');
//     const sideRight = document.querySelector('#path2941');
//     const sideLeft = document.querySelector('#path4191');
//     const top = document.querySelector('#path4829');


// tableTop.addEventListener('mouseover', function (ev) {
//     ev.preventDefault();
//     event.target.style.fill='yellow'
// // });
// tableTop.addEventListener('mouseout', function (ev) {
//     ev.preventDefault();
//     event.target.style.fill='brown'
// });
// firstColor.addEventListener('click', function (ev) {
//     ev.preventDefault();
//     tableTop.style.fill='green'
// })
//
//     lightTableTop.addEventListener('click change', function() {
//         // ev.preventDefault();
//         top.style.fill='red';
//         sideRight.style.fill='brown';
//         sideLeft.style.fill ='brown';
//     });
//
//     tabble.addEventListener('mouseover', function(ev) {
//         ev.preventDefault();
//
//         // console.log(event.target)
//
//         // event.target.style.fill = 'brown';
//
//         if(event.target.id === 'path4829' || event.target.id === 'path2941' || event.target.id === 'path4191') {
//
//             // top.style.filter='url("https://www.mickgeorge.co.uk/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/m/e/meranti_roble_oak_wood_effect_tiles_y-2354.png")';

        // top.style.fill='red';
        // sideRight.style.fill='brown';
        // sideLeft.style.fill ='brown';
        //

        // const leftUpperLeg1 = document.querySelector('#path5455');
        // const leftUpperLeg2 = document.querySelector('#path5456');
        // const leftUpperLeg3 = document.querySelector('#path1689');
        // const leftLowerLeg4 = document.querySelector('#path2315');
        // const rightUpperLeg1 = document.querySelector('#path4821');
        // const rightUpperLeg2 = document.querySelector('#path4822');
        // const leftLowerLeg1 = document.querySelector('#path4825');
        // const leftLowerLeg2 = document.querySelector('#path4826');

        //
        // leftUpperLeg1.style.fill='gray';
        // leftUpperLeg2.style.fill='gray';
        // leftLowerLeg3.style.fill='gray';
        // leftLowerLeg4.style.fill='gray';
        // rightUpperLeg1.style.fill='gray';
        // rightUpperLeg2.style.fill='gray';
        // leftLowerLeg1.style.fill='gray';
        //         // leftLowerLeg2.style.fill='gray';
        //     }
        //
        // })
        //


    });