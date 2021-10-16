// Toggle Listing Form Tabs
var basic = document.getElementById("basic_tab");
var add = document.getElementById('address_tab');
var pht = document.getElementById('photo_tab');

function BasicTab() {
    var active_tab = document.getElementsByClassName("active-tab")[0];
    active_tab.classList.remove("active-tab");
    document.getElementById("basic_info").classList.add("active-tab");
    add.style.left = "-50rem";
    pht.style.left = "-100rem";
    basic.style.left = "1rem";
    document.getElementById("post_btn").style.display = "none";
}

function AddressTab() {
    let valid = true;
    let required_fields = document.querySelectorAll("#basic_tab input[required]");
    for (let i = 0; i < required_fields.length; i++) {
        if (!(required_fields[i].checkValidity())) {
            valid = false;
            break;
        }
    }
    if (!valid) {
        document.getElementById('valid_basic').style.display = 'block';
    }
    else {
        document.getElementById('valid_basic').style.display = 'none';
        var active_tab = document.getElementsByClassName("active-tab")[0];
        active_tab.classList.remove("active-tab");
        document.getElementById("address").classList.add("active-tab");
        basic.style.left = "-50rem";
        pht.style.left = "-100rem";
        add.style.left = "1rem";
        document.getElementById("post_btn").style.display = "none";
    }
}

function PhotoTab() {
    let valid = true;
    let required_fields = document.querySelectorAll("#address_tab input[required]");
    for (let i = 0; i < required_fields.length; i++) {
        if (!(required_fields[i].checkValidity())) {
            valid = false;
            break;
        }
    }
    if (!valid) {
        document.getElementById('valid_address').style.display = 'block';
    }
    else {
        var active_tab = document.getElementsByClassName("active-tab")[0];
        active_tab.classList.remove("active-tab");
        document.getElementById("photos").classList.add("active-tab");
        basic.style.left = "-50rem";
        add.style.left = "-100rem";
        pht.style.left = "1rem";
        document.getElementById("post_btn").style.display = "block";
    }
}

// Eliminating Several Elements depending on the Radio Buttons selected in Basic Tab
var rent_only = document.getElementsByClassName("rent-only");
var sale_only = document.getElementsByClassName("sale-only");

document.getElementById("sale").addEventListener('click', function (event) {
    rent_only[0].style.display = "none";
    rent_only[1].style.display = "none";
    sale_only[0].style.display = "block";
    if (!(document.querySelector(".sale-only #cost").hasAttribute('required'))) {
        document.querySelector(".sale-only #cost").setAttribute('required', 'true');
    }
    document.querySelector(".rent-only #m_rent").removeAttribute('required');
});

document.getElementById("rent").addEventListener('click', function (event) {
    sale_only[0].style.display = "none";
    rent_only[0].style.display = "block";
    rent_only[1].style.display = "block";
    if (!(document.querySelector(".rent-only #m_rent").hasAttribute('required'))) {
        document.querySelector(".rent-only #m_rent").setAttribute('required', 'true');
    }
    document.querySelector(".sale-only #cost").removeAttribute('required');
});

// Eliminating Several Elements depending on the Radio Buttons selected in Address Tab
var appartment_only = document.getElementsByClassName("appartment-only");
var villa_indp_only = document.getElementsByClassName("villa-indp-only");

document.getElementById("appartment").addEventListener('click', function (event) {
    appartment_only[0].style.display = "block";
    appartment_only[1].style.display = "flex";
    villa_indp_only[0].style.display = "none";
    if (!(document.querySelector(".appartment-only input").hasAttribute('required'))) {
        document.querySelector(".appartment-only input").setAttribute('required', 'true');
    }
    document.querySelector(".villa-indp-only input").removeAttribute('required');
});

document.getElementById("ind_house").addEventListener('click', function (event) {
    appartment_only[0].style.display = "none";
    appartment_only[1].style.display = "none";
    villa_indp_only[0].style.display = "block";
    if (!(document.querySelector(".villa-indp-only input").hasAttribute('required'))) {
        document.querySelector(".villa-indp-only input").setAttribute('required', 'true');
    }
    document.querySelector(".appartment-only #flat_n").removeAttribute('required');
    document.querySelector(".appartment-only #floor_n").removeAttribute('required');
    document.querySelector(".appartment-only #bsp").removeAttribute('required');
});

document.getElementById("villa").addEventListener('click', function (event) {
    appartment_only[0].style.display = "none";
    appartment_only[1].style.display = "none";
    villa_indp_only[0].style.display = "block";
    if (!(document.querySelector(".villa-indp-only input").hasAttribute('required'))) {
        document.querySelector(".villa-indp-only input").setAttribute('required', 'true');
    }
    document.querySelector(".appartment-only #flat_n").removeAttribute('required');
    document.querySelector(".appartment-only #floor_n").removeAttribute('required');
    document.querySelector(".appartment-only #bsp").removeAttribute('required');
});

// currency format
function format(input) {
    var nStr = input.value + '';
    nStr = nStr.replace(/\,/g, "");
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    input.value = x1 + x2;
}

// Photo Preview
var ImageInput = document.getElementById('add_photo_input')
var image_counter = 0;

ImageInput.addEventListener('change', function (event) {

    if (event.target.files.length == 0) {
        return;
    }
    for (let i = 0; i < event.target.files.length; i++) {
        if (image_counter == 10) {
            $("#max_limit").modal()
            return;
        }
        var TempUrl = URL.createObjectURL(event.target.files[i])
        var slot = document.createElement("div")
        var image = document.createElement("img");
        image.setAttribute('src', TempUrl)
        image.classList.add('photo')
        slot.appendChild(image)
        slot.innerHTML += "<span class='badge badge-info delete' onclick='DeletePhoto(this)'>X</span>";
        slot.classList.add('photo-preview')
        document.getElementById('photo_tab').appendChild(slot);
        image_counter += 1;
    }
});

// Deletion of a Photo
function DeletePhoto(sp) {
    $(sp).parent().remove();
    image_counter -= 1;
    return;
}



(function ($) {
    "use strict";


    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    var nav = $('nav');
    var navHeight = nav.outerHeight();


    /*--/ Navbar Collapse /--*/
    $('.navbar-toggle-box-collapse').on('click', function () {
        $('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
    });
    $('.close-box-collapse, .click-closed').on('click', function () {
        $('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
        $('.menu-list ul').slideUp(700);
    });

    /*--/ Navbar Menu Reduce /--*/
    $(window).trigger('scroll');
    $(window).bind('scroll', function () {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-default').addClass('navbar-reduce');
            $('.navbar-default').removeClass('navbar-trans');
        } else {
            $('.navbar-default').addClass('navbar-trans');
            $('.navbar-default').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

    /*--/ Property owl /--*/
    $('#property-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*--/ Property owl owl /--*/
    $('#property-single-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    /*--/ News owl /--*/
    $('#new-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            769: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*--/ Testimonials owl /--*/
    $('#testimonial-carousel').owlCarousel({
        margin: 0,
        autoplay: true,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeInUp',
        navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

})(jQuery);