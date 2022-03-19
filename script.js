$(document).ready(function(){
    $(".pick").click(function(event){
        alert('Order successful!');
        event.preventDefault();
    });
    $("#delivery").hide();
    $(".make").click(function(){
        $('#delivery').toggle();
    });
    $('#submit-delivery').click(function(event){
        var person = document.getElementById("first-name").value;
        var hood = document.getElementById("hood").value;
        var house = document.getElementById("hseNo").value;
    })
})