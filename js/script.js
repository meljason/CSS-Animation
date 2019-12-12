// console.log('test');

$(document).ready(function() {
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');

    let flag = true;

    const cars = ['./img/car-no-headlight.png', './img/car.png']

    //evetns
    $(document).on('keypress', function(e){
        // console.log(e.which); --- To know the key codes
        if(e.which == 13) {
            $($surface).toggleClass('moveCarToRight');
            $($car).toggleClass('suspension');
        }
    });

    $(document).on('keypress', function (e) {
        // console.log(e.which); --- To know the key codes
        if(e.which == 119) {
            if(flag) {
                flag = false;
                $img.attr('src', cars[0]);
            } else {
                flag = true;
                $img.attr('src', cars[1]);
            }
        }
    });
});