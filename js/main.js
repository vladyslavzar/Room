$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: true,
    });
    let btn=document.getElementById("prikol");
    btn.onclick=function(){
        window.scrollBy({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
});
