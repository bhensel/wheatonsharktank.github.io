
// set the date we're counting down to
var target_date = moment("2014-11-13T21:00:00").toDate().getTime();

// variables for time units
var days, hours, minutes, seconds; 

// get tag element
var countdownElement = document.getElementById("countdown");

var countdown = function() {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
    
    // format countdown string + set tag value
    countdownElement.innerHTML = days + " days, " + hours + " hours, " 
	+ minutes + " minutes, " + seconds + " seconds";   

}

// update the tag with id "countdown" every 1 second
setInterval(countdown, 1000);

countdown();


$(document).ready(function() {
    
    $(".registration").submit(function(e) {
        
        var values = [];
        values.push($("textarea[name='shark_tank_idea']"));
        values.push($("textarea[name='describe_customer']"));
        values.push($("textarea[name='team_skills']"));
        values.push($("textarea[name='point_person']"));
        values.push($("textarea[name='point_person_email']"));
        values.push($("textarea[name='kingdom_god']"));
        values.push($("textarea[name='won_what_now']"));
        values.push($("textarea[name='idea_excel']"));
        
        var shouldReturn = true;
        
        for (var i = 0; i < values.length; i++) {
            if (values[i].val().length <= 0) {
                values[i].addClass("red");
                shouldReturn = false;
            } else {
                values[i].removeClass("red");
            }
        }
        
        if (!shouldReturn) {
            alert("Please fill in all of the fields!");
        }
        
        return shouldReturn;
    });
});