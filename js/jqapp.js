$(document).ready(function(){
// Start Navbar 

// for navbutton
$('.navbuttons').click(function(){
    $('.navbuttons').toggleClass('changes');
});

// for navbar
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if (getscrolly >= 200) {
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }
});

// End Navbar

// Start Mission Section
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();

    if (getscrolly >= 650) {
        $('.cameraimgs').addClass('fromlefts');
        $('.missiontexts').addClass('fromrights');
    }else{
        $('.cameraimgs').removeClass('fromlefts');
        $('.missiontexts').removeClass('fromrights');
    }
});
// End Mission Section


// Start Gallery Section
$('.gallerylists').click(function(){
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter);

    if (datafilter === "all") {
        $('.filters').show();
    }else{
        $('.filters').not('.'=
    }

});
    // remove current active item
    
// End Gallery Section


// Start Footer Section

// End Footer Section
