document.addEventListener("DOMContentLoaded",function(){
    var firstLi = document.querySelector(".menu_first-item");

    firstLi.addEventListener('mouseover',function(){
        firstLi.lastElementChild.style.display = 'block';
    });

    firstLi.addEventListener('mouseout',function(){
        firstLi.lastElementChild.style.display = 'none';
    });

    var articleImg = [...document.querySelectorAll('#article img')];

    articleImg.forEach(function(el){
        el.addEventListener('mouseover',function(){
            el.nextElementSibling.style.display = 'none';
        });
        el.addEventListener('mouseout',function(){
            el.nextElementSibling.style.display = 'block';
        });
    });


});
