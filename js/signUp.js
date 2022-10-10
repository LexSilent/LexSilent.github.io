window.onload = function(){
    var btnIzq = document.getElementById('izquierdo');
    var btnderecho = document.getElementById('derecho');
    
    if(document.title=="Sing up"){
        var btnRegistrar =document.getElementById('btnRegistrar');
        btnRegistrar.addEventListener('click', function(event){
            location.href = "index.html";
       })
        btnIzq.style=
        `background-color: #967b41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);`;
    }else{
        var btnIngresar =document.getElementById('btnIngresar');
        btnIngresar.addEventListener('click', function(event){
            location.href = "allvideos.html";
        });
        btnderecho.style=
        `background-color: #967b41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);`;
    }
    btnderecho.addEventListener('click', function(event){
        location.href = "index.html";
    });
    btnIzq.addEventListener('click', function(event){
        location.href = "signup.html";
    });
    
    
}
