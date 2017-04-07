var element = [];
var currentIndex = 0;

function timer() {
    'use strict';

    currentIndex = currentIndex + 1;
    currentIndex = currentIndex % 4;
    element['ol-num>li'][currentIndex].onmouseover();
}

function setup() {
    'use strict';

    element['scroll-page'] = document.getElementsByClassName('scroll-page')[0];
    element['ol-num'] = element['scroll-page'].getElementsByClassName('num')[0];
    element['ol-bg'] = element['scroll-page'].getElementsByClassName("bg")[0];
    element['ol-num>li'] = element['ol-num'].children;
    element['ol-bg>li'] = element['ol-bg'].children;
    element['div#image'] = elementById('image');
    element['div#image-images'] = ["url(./images/1.jpg)",
                                   "url(./images/2.jpg)",
                                   "url(./images/3.jpg)",
                                   "url(./images/4.jpg)"];

    window.setInterval(timer, 5000);
}

function addEvent() {
    'use strict';

    function ol_num_li() {

        for (var i = 0; i < element['ol-bg>li'].length; i++) {

            if (i === this.index) {

                element['ol-bg>li'][i].style.visibility = "visible";
                element['div#image'].style.backgroundImage = element['div#image-images'][i];
                currentIndex = this.index;

            } else {

                element['ol-bg>li'][i].style.visibility = "hidden";
            }
        }
    }

    for (var i = 0; i < element['ol-num>li'].length; i++) {

        var li = element['ol-num>li'][i];
        li.onmouseover = ol_num_li;
        li.index = i;
    }

    element['ol-num>li'][0].onmouseover();
}
