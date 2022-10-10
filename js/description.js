window.onload = function(){
    var btnBack =document.getElementById('btnBack');
    btnBack.addEventListener('click', function(event){
        location.href = "allvideos.html";
    });
    var btnBuy =document.getElementById('btnBuy');
    btnBuy.addEventListener('click', function(event){
        location.href = "pay.html";
    });
    
}