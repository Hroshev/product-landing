$('.telegram-form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData();

    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append('Ім`я', $('[name="name"]', form).val());
    data.append('Телефон', $('[name="phone"]', form).val());
    data.append('Кількість товару', $('[name="sale"]', form).val());
    data.append('Посилання на товар', window.location.href);

    $.ajax({
        url: 'telegram.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        let percentage = (e.loaded / e.total) * 100;
                        percentage = percentage.toFixed(0);
                        $('.submit', form).html(percentage + '%');
                    }
                }, false);
            }

            return myXhr;
        },
        error: function(jqXHR, textStatus) {
            // Handle error
        },
        complete: function() {
            window.location.href = 'thank-you-page.html';
            form.reset();
        }
    });

    return false;
});