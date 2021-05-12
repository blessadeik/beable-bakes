const navSlide = () => {
    const burger = document.querySelector('.burger');
    const togHeader = document.querySelector('.one-header');
    
    
    burger.addEventListener('click', () => {
        //Toggle
        togHeader.classList.toggle('.one-header');

        //Animate links
        // nav.forEach((nav, index)=> {
        // if(nav.style.animation){
        //     nav.style.animation=''
        // }else{
        //     nav.style.animation= 'navfade 0.5s ease forwards $(index / 7+1.5)s';
        // }
        // });
        // burger animation
        burger.classList.toggle('toggle');
    
    });
}

navSlide();


$(document).ready(function(){
    $(window).scroll(function(){
        var scroll= $(window).scrollTop();
        if(scroll >100){
            $('.header').css("background", "rgba(0, 0, 0, 0.7)");
            $('.nav a.search-icon').css("color", "peachpuff");
            $('.act').css("border", "solid 1px peachpuff");
            $('#logo').css("font-size", "1.5rem");
            $('.nav').css("font-size", "0.85rem");
        }else{
            $('header').css("background", "");
            $('.nav a.search-icon').css("color", "peachpuff");
            $('.act').css("border", "solid 1px peachpuff");
            $('#logo').css("font-size", "1.2rem");
            $('.nav').css("font-size", "0.75rem");
        }
    });

});

