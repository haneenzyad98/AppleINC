alert('Hello in Appel')



function age() {
    var yourname = prompt('whats you name?');
    alert('hello ' + yourname);

    var yourAge = prompt('put your age here');
    console.log * (yourAge);


    if (yourAge <= 13) {
        massage = ' Tell Your parents to help you';
    } else if (yourAge > 14) {
        massage = 'Read abut us';
    } else {
        massage = 'Ok';
    }
    confirm("look in the bottom");
    document.write('<h1>' + massage + '<h1>');
}
age()


var showImage = function () {
    var Choose = prompt('what you need laptop or phone?');

    while (Choose !== 'laptop' && Choose !== 'phone') {
        Choose = prompt('please choose one of this.')
    }


    var imge = '';
    if (Choose === 'laptop') {
        imge = '<img src ="imge/lab.png" />';
    } else if (Choose === 'phone') {
        imge = '<img src ="imge/phon.jpg" />';

    }
    var result = '';

    var num = prompt('how many Device do you want')
    for (var i = 0; i < num; i++) {

        result = result + imge;
    }
    return document.write(result);
} 
showImage();

