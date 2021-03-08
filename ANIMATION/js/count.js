/*
var number = document.querySelector('.number'),
		numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 1000) {
    		this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
        		number.innerHTML = ++start * 7;
                
            if(start == end) {
            		clearInterval(interval);
            }
        },0,01);
    }
});



var number1 = document.querySelector('#number'),
		numberTop1 = number1.getBoundingClientRect().top,
    start1 = +number1.innerHTML, end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll1() {
		if(window.pageYOffset > numberTop1 - window.innerHeight / 1000) {
    		this.removeEventListener('scroll', onScroll1);
        var interval1 = setInterval(function() {
        		number1.innerHTML = ++start * 6;
                
            if(start == end) {
            		clearInterval(interval1);
            }
        },0,01);
    }
});
*/