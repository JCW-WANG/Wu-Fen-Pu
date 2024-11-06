document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var form = document.querySelector('form'),
        links = document.querySelectorAll('.navbar a'),
        sections = document.querySelectorAll('section');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('訊息已送出！');
    });

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            sections.forEach(function (section) {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});

function change_toy(obj) {
    'use strict';
    obj.style.opacity = "1.0";
    document.getElementById("viewer").src = obj.src;
    document.getElementById("viewer").style.visibility = "visible";
}

function recover_toy(obj) {
    'use strict';
    obj.style.opacity = "0.3";
    document.getElementById("viewer").style.visibility = "hidden";
}
