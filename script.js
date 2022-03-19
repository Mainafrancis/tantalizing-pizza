$(document).ready(function(){
    $(".pick").click(function(event){
        alert('Order successful!');
        event.preventDefault();
    });
    $("#delivery").hide();
    $(".make").click(function(){
        $('#delivery').toggle();
    })
})