function openNav() {
    document.getElementById('headerNav').style.width = "60vw";
    document.getElementById('headerBack').style.width = "100vw";
}

function clickOutside() {
    document.getElementById('headerNav').style.width = "0";
    document.getElementById('headerBack').style.width = "0";
}


function bodyOnloadHandler() {
    document.getElementById("preloader").style.display = "none";
}

function countNumber() {
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function selectDigitalTabBar(evt, barName) {
    var tabContent = document.getElementsByClassName("tab-content");
    var tabHeader = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tabHeader.length; i++) {
        tabHeader[i].className = tabHeader[i].className.replace(" active-tab-bar", "");
    }
    evt.currentTarget.className += " active-tab-bar";
    document.getElementById(barName).style.display = "block";
}

function leftNav(evt, barName) {
    var tabContent = document.getElementsByClassName("sections");
    var tabHeader = document.getElementsByClassName("left-menu");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tabHeader.length; i++) {
        tabHeader[i].className = tabHeader[i].className.replace(" active-left-menu", "");
    }
    evt.currentTarget.className += " active-left-menu";
    document.getElementById(barName).style.display = "block";
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    const a = document.getElementById('header');

    if (scroll !== 0) {
        a.classList.add('slide');
    } else {
        a.classList.remove('slide');
    }
});
