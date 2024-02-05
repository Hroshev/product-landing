$(document).ready(function() {
	/* timer */
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").html( pad(hrs));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();

	/* Curent date */
	const comment = document.querySelectorAll("#currentDate");
	function getCurrentDate(a) {
		var currentDate = new Date();
		var day = currentDate.getDate() - a;
		var month = currentDate.getMonth() + 1;
		var year = currentDate.getFullYear();

		if (day < 10) {
			day = "0" + day;
		}
		if (month < 10) {
			month = "0" + month;
		}

		var formattedDate = day + "." + month + "." + year;
		return formattedDate;
	}
	comment.forEach((item, idx) => {
		if (idx === 0) {
			item.innerHTML = getCurrentDate(0);
		}
		if (idx === 1) {
			item.innerHTML = getCurrentDate(1);
		}
		if (idx === 2) {
			item.innerHTML = getCurrentDate(1);
		}
		if (idx === 3) {
			item.innerHTML = getCurrentDate(2);
		}
		if (idx === 4) {
			item.innerHTML = getCurrentDate(2);
		}
	});

});