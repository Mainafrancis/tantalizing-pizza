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

        alert('Dear' + "" + ""+  'we have received your message.' + 'Delivery will be done in 20 minutes to House Number ' + "" + house + "," + 'on' + '' + hood + "hood." + 'Thanks for ordering.');
        event.preventDefault();

    })
})