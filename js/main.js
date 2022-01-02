let navbar = document.querySelector('.navbar');
document.querySelector('#button-menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = function(){scrollHeader()};

function scrollHeader(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("stickybar").style.backgroundColor = "#FFF";
    }else{
        document.getElementById("stickybar").style.backgroundColor = "#ffffff4d";
    }
}