function CountBox() {
    dateNow = new Date();
    amount = ((23 - dateNow.getHours()) * 60 * 60 + (59 - dateNow.getMinutes()) * 60 + (60 - dateNow.getSeconds())) * 1000;
    delete dateNow;
    if (amount < 0) {
        var list = document.getElementsByClassName("countbox");
        for (var i = 0; i < list.length; i++) {
            list[i].getElementsByClassName('countbox-hours1')[0].innerHTML = '<span></span>'+hours1;
            list[i].getElementsByClassName('countbox-hours2')[0].innerHTML = '<span></span>'+hours2;

            list[i].getElementsByClassName('countbox-mins1')[0].innerHTML = '<span></span>'+mins1;
            list[i].getElementsByClassName('countbox-mins2')[0].innerHTML = '<span></span>'+mins2;

            list[i].getElementsByClassName('countbox-secs1')[0].innerHTML = '<span></span>'+secs1;
            list[i].getElementsByClassName('countbox-secs2')[0].innerHTML = '<span></span>'+secs2;
        }
        setTimeout("CountBox()", 10000)
    } else {
        days = 0;
        days1 = 0;
        days2 = 0;
        hours = 0;
        hours1 = 0;
        hours2 = 0;
        mins = 0;
        mins1 = 0;
        mins2 = 0;
        secs = 0;
        secs1 = 0;
        secs2 = 0;
        out = "";
        amount = Math.floor(amount / 1e3);
        days = Math.floor(amount / 86400);
        days1 = (days >= 10) ? days.toString().charAt(0) : '0';
        days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
        hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
        mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
        amount = amount % 60;
        secs = Math.floor(amount);
        secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
        secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
        var list = document.getElementsByClassName("countbox");
        for (var i = 0; i < list.length; i++) {
            list[i].getElementsByClassName('countbox-hours1')[0].innerHTML = '<span></span>'+hours1;
            list[i].getElementsByClassName('countbox-hours2')[0].innerHTML = '<span></span>'+hours2;

            list[i].getElementsByClassName('countbox-mins1')[0].innerHTML = '<span></span>'+mins1;
            list[i].getElementsByClassName('countbox-mins2')[0].innerHTML = '<span></span>'+mins2;

            list[i].getElementsByClassName('countbox-secs1')[0].innerHTML = '<span></span>'+secs1;
            list[i].getElementsByClassName('countbox-secs2')[0].innerHTML = '<span></span>'+secs2;
        }
        setTimeout("CountBox()", 1e3)
    }
}
window.onload = function() {
    CountBox()
}
