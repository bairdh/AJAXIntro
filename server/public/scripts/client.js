
$(document).ready(readyNow);

function readyNow(){
    // console.log('Ready Now');

    $('#addPerson').on('click', postTest);
    getTest();
    
}

function getTest(){
    // console.log(`In getTest`);
    // AJAX GET call to /tester
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then(function (response){
        appendToDOM(response);
        console.log(`back from the server with: ${response}`);
    }).catch(function (err){
        alert(`Problem! Check console.`)
        console.log(err);
        
    })
}

function appendToDOM(arr){
    $('main p').remove();
    for (let animal of arr) {
        $('main').append(`<p>${animal}</p>`)
    }
}

function postTest(){
    $.ajax({
        type: 'POST',
        url: '/tester',
        data: {
            animal: 'Cougar'
        }
    }).then(function (response){
        console.log(response);
        getTest();
        
    }).catch(function(err){
        alert('ERROR IN POST!');
    })
}