$(document).ready (function() {
    const $doc = $(document);
    const $header = $('.header');
    const $about = $('.section-about');
    const $prices = $('.section-prices');
    const $gallery = $('.section-gallery');
    const $contact = $('.section-contact');
    const $arrows = $('.arrow-box');
    const $arrowUp = $('.arrow-nav--up');
    const $arrowDown = $('.arrow-nav--down');
    const $burger = $('.navigation-burger');
    const $nav = $('.navigation');
    const $navList = $('.navigation__list');
    const $navItem = $('.navigation__item');
    const $navLink = $('.navigation__link');

    // Prevent default
    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    //Open/close burger
    $burger.on("click", function() {
        $nav.toggleClass('open');
        $burger.toggleClass('active-one');
    });

    //Change active class on navItem

    $navLink.click(function() {
        $navLink.removeClass('active');
        $(this).addClass('active');
        $burger.removeClass('active-one');
    })

    //Close burger after chosing the item

    $navItem.on('click', function() {
        $nav.removeClass('open');
    })

    //Arrow navigation
    $arrowUp.on("click", function() {
        $doc.scrollTop(0);
    });

    $arrowDown.on("click", function() {
        $('html, body').animate({scrollTop: $doc.height()}, .2);
        return false;
    });

    //Sections animations

    $doc.on("scroll", function() {
        const scrollPos = $doc.scrollTop();
        const headerHeight = $header.outerHeight();
        const aboutOffset = $about.offset().top;
        const aboutHeight = $about.outerHeight();
        const pricesHeight = $prices.outerHeight();
        const pricesOffset = $prices.offset().top;
        const galleryHeight = $gallery.outerHeight();
        const galleryOffset = $gallery.offset().top;
        const contactHeight = $contact.outerHeight();
        const contactOffset = $contact.offset().top;

        if(scrollPos > 400) {
            $arrows.css('display', 'flex');
        } else {
            $arrows.css('display', 'none');
        }

        if(scrollPos < aboutOffset) {
            $header.css('opacity', 1 - scrollPos / headerHeight);
        } else {
            $header.css('opacity', 1);
        }

        

        if(scrollPos > aboutHeight)  {
            $about.addClass('goGray');
        } else {
            $about.removeClass('goGray');
        }

        if(scrollPos > galleryOffset + galleryHeight / 2)  {
            $gallery.addClass('goGray');
        } else {
            $gallery.removeClass('goGray');
        }

        if(scrollPos > pricesOffset + pricesHeight / 2) {
            $prices.addClass('goFaded');
        } else {
            $prices.removeClass('goFaded');
        }

        // Active navLink dependence of scrolling

        const $linksNav = $navList.find('.navigation__link');
        $linksNav.each(function () {
            const currentLink = $(this);
            const refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $navLink.removeClass("active"); //added to remove active class from all a elements
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
        
    })
});
