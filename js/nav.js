const navSlide = () => {
    const burger = document.querySelector('.burger');
    const togHeader = document.querySelector('.one-header');
  

    burger.addEventListener('click', () => {
        //Toggle
        // togHeader.classList.toggle('.one-header');
        if (burger.classList.toggle('toggle')){
            $('.one-header').css("visibility", "visible");
        };


        //Animate links
        // nav.forEach((nav, index)=> {
        // if(nav.style.animation){
        //     nav.style.animation=''
        // }else{
        //     nav.style.animation= 'navfade 0.5s ease forwards $(index / 7+1.5)s';
        // }
        // });
        // burger animation
    
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

// banner slide

// const showSlid = document.querySelectorAll('.showSlide');
// const dot = document.querySelectorAll('.dot');

// slidLength = showSlid.length;

// let counter =0;

// let timer = setInterval(autoslide, 3000);

// function autoslide() {
//     if (counter == slidLength ) {
//         counter = 0;
//     }
//     plusSlides();
// }

// function plusSlides() {
//     if (counter < slidLength) {   
//         console.log(counter);
//         slidecount(counter);
//         counter++;
//     }

//     else{
//         counter++;
//     }
// }

// function currentSlide() {
//     if (counter >= 0) {
//         --counter;
//         slidecount(counter);
//     }
//     else{
//         counter--;
//     }
// }


// function slidecount(){
//     for(let i = 0; i < slidLength; i++){
//         showSlid[i].style.display = "none";
//         dot[i].classList.remove("active");
//         dot[i].style.borderColor = "white";
//     }

//     showSlid[counter].style.display = "block";
//     dot[counter].style.display = "block";
// };

