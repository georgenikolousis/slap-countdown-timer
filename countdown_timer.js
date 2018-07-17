function countdown_timerLoad(){
	var deadline = 'December 31 2018 23:59:59 GMT+02:00';
	
	var days = document.getElementById("countdown_days");
	var hours = document.getElementById("countdown_hours");
	var minutes = document.getElementById("countdown_minutes");
	var seconds = document.getElementById("countdown_seconds");
	
	var timeinterval = setInterval(function(){
			var t = getTimeRemaining(deadline);
			
			days.innerHTML = t.days;
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
			
			if(t.total<=0){
				clearInterval(timeinterval);
			}
			
	},1000);
	
	
}

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
