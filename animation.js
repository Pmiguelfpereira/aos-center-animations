var animation = {
    'ecologo': {
        'class': "1",
        'data-aos': 'fade',
        'data-aos-offset': '-400',
        'data-aos-delay': '1000',
        'data-aos-duration': '500',
        'data-aos-easing': 'linear',
        'data-aos-mirror': 'false',
        'data-aos-once': 'true',
        'data-aos-anchor-placement': 'top-center',

    },
}

function callanimation() {
    $.each(animation, function (index, obj) {
        var selector = '';
        $.each(obj, function (key, value) {
            if (key == 'class') {
                if (value == 0) {
                    selector = "#" + index;
                } else {
                    selector = "." + index;
                }
            } else {
                $(selector).attr(key, value);
            }
        });
    });
}
