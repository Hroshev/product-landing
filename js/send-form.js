$('#telegram-form').on('submit', function (event) {
    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData();

    $('.submit', form).val('Відправлення...');
    $('input, textarea', form).attr('disabled', '');

    let nameValue = $('[name="name"]', form).val();
    let phoneValue = $('[name="phone"]', form).val();
    let emailValue = $('[name="email"]', form).val();
    let selectValue = $('[name="select"]', form).val();

    if (nameValue) {
        data.append('Ім`я', nameValue);
    }

    if (phoneValue) {
        data.append('Телефон', phoneValue);
    }

    if (emailValue) {
        data.append('Email', emailValue);
    }

    if (selectValue) {
        data.append('Пропозиція', selectValue);
    }

    data.append('Товар', window.location.href);

    $.ajax({
        url: 'telegram.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function () {
            let myXhr = $.ajaxSettings.xhr();

            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        let percentage = (e.loaded / e.total) * 100;
                        percentage = percentage.toFixed(0);
                        $('.submit', form).html(percentage + '%');
                    }
                }, false);
            }

            return myXhr;
        },
        error: function (jqXHR, textStatus) {
            // Handle error
        },
        complete: function () {
            window.location.href = '/thank-you-page.html';
            form.reset();
        }
    });

    return false;
});