document.addEventListener("DOMContentLoaded", function(){

    var dropDownArrow = [...document.querySelectorAll('.drop_down_list .list_arrow')];
    var toggle = 0;

    dropDownArrow.forEach(function(el){
        el.addEventListener('click',function(){
            if(toggle === 0){
                el.nextElementSibling.style.display = 'block';
                el.style.transform = 'rotate(180deg)';
                toggle += 1;

            }else{
                el.nextElementSibling.style.display = 'none';
                el.style.transform = 'rotate(0deg)';
                toggle -= 1;
            }
        });
    });

    var chairTitles = [...document.querySelectorAll('.form .drop_down_list:first-child .list_panel li')];
    var chairColors = [...document.querySelectorAll('.form .drop_down_list:nth-child(2n) .list_panel li')];
    var chairMaterials = [...document.querySelectorAll('.form .drop_down_list:nth-child(3n) .list_panel li')];


    var title = document.querySelector('.panel_left .title');
    var color = document.querySelector('.panel_left .color');
    var pattern = document.querySelector('.panel_left .pattern');
    var transport = document.querySelector('.panel_left .transport');
    var transportInput = document.querySelector('.form #transport');

    var titleValue = document.querySelector('.panel_right .title');
    var colorValue = document.querySelector('.panel_right .color');
    var patternValue = document.querySelector('.panel_right .pattern');
    var transportValue = document.querySelector('.panel_right .transport');

    function sum(){
        var sum = 0;
        var sumValue = document.querySelector('.sum');

        function sumator(value){
            if(!(isNaN(value))){
                sum += value;
            }
        }

        var titleV = parseInt(titleValue.innerText);
        sumator(titleV);
        var colorV = parseInt(colorValue.innerText);
        sumator(colorV);
        var patternV = parseInt(patternValue.innerText);
        sumator(patternV);
        var transportV = parseInt(transportValue.innerText);
        sumator(transportV);
        sumValue.innerText = sum + 'zł';
    }

    chairTitles.forEach(function(el){
        el.addEventListener('click',function(){
            title.innerText = el.innerText;
            switch (el.innerText) {
                case 'Clair':
                    titleValue.innerText = '200';
                    break;
                case 'Margarita':
                    titleValue.innerText = '250';
                    break;
                case 'Selena':
                    titleValue.innerText = '300';
                    break;
                default: titleValue.innerText = '0';
            }
            sum();
        });
    });

    chairColors.forEach(function(el){
        el.addEventListener('click',function(){
            color.innerText = el.innerText;
            switch (el.innerText) {
                case 'Czerwony':
                    colorValue.innerText = '0';
                    break;
                case 'Czarny':
                    colorValue.innerText = '0';
                    break;
                case 'Pomarańczowy':
                    colorValue.innerText = '50';
                    break;
                default: colorValue.innerText = '0';
            }
            sum();
        });
    });

    chairMaterials.forEach(function(el){
        el.addEventListener('click',function(){
            pattern.innerText = el.innerText;
            switch (el.innerText) {
                case 'Tkanina':
                    patternValue.innerText = '0';
                    break;
                case 'Skóra':
                    patternValue.innerText = '100';
                    break;
                default: patternValue.innerText = '0';
            }
            sum();
        });
    });

    transportInput.addEventListener('click',function(){
        var transportPrice = transportInput.dataset.transportPrice;

        if(this.checked){
            transport.innerText = 'Transport';
            transportValue.innerText = transportPrice;
        }else{
            transport.innerText = '';
            transportValue.innerText = '';
        }
        sum();
    });

});
