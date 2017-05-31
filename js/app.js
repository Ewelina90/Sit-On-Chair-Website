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

    var currentImg = 0;
    var leftNav = document.querySelector('.slaider-navigation-left');
    var rightNav = document.querySelector('.slaider-navigation-right');
    var slaiderImages = [...document.querySelectorAll('#slaider-images img')];

    rightNav.addEventListener('click', function(){
        slaiderImages[currentImg].classList.remove('slaider_image');
        slaiderImages[currentImg].classList.add('invisible');
        currentImg += 1;
        if(!(currentImg < slaiderImages.length)){
                currentImg = 0;
        }
        slaiderImages[currentImg].classList.remove('invisible');
        slaiderImages[currentImg].classList.add('slaider_image')

    });

    leftNav.addEventListener('click', function(){
        slaiderImages[currentImg].classList.remove('slaider_image');
        slaiderImages[currentImg].classList.add('invisible');
        currentImg -= 1;
        if(currentImg < 0){
                currentImg = slaiderImages.length - 1;
        }
        slaiderImages[currentImg].classList.remove('invisible');
        slaiderImages[currentImg].classList.add('slaider_image')

    });
});
