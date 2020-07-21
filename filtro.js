
$('.filter').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let nombre = $(this).attr('data-nombre');
    if (nombre == 'todos') {
        $('.caja').show('1000');
    } else {
        $('.caja').not('.' + nombre).hide('1000');
        $('.caja').filter('.' + nombre).show('1000');
    }
});
