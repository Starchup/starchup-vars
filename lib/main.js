
/**
 * Facility Review variables
 */
var facilityReview = {
                // Internal starchup email to communicate rating issues with
                "EMAIL": "gefthefrench@gmail.com",
                
                // Minimum rating that triggers messages to starchup & facility
                "MIN_RATING": 3
            };

exports.facility_review = facilityReview;


/**
 * Schedule timeslots
 */
var timeslotsPerHour = 4;

exports.timeslot_to_time = function(timeslot_val)
{
   var timeConv = timeslot_val / timeslotsPerHour;
   var minutes = (timeConv - Math.floor(timeConv))*60;
   minutes = Math.floor(minutes).toString();
   if (minutes.length == 1) minutes = minutes + "0";

   var time = Math.floor(timeConv).toString() + ":" + minutes;

   return time;
}

timeToTimeslot = function(time_val)
{
    var hours = time_val.split(":")[0];
    var minutes = time_val.split(":")[1];

    var timeslot = (parseInt(hours)*4) + (Math.floor(parseInt(minutes)/60)*4);

    return timeslot;
}

exports.time_to_timeslot = timeToTimeslot;
exports.timeslots_per_hour = timeslotsPerHour;


/**
 * When a customer schedules an order, he only has options at least
 * orderScheduleDelay after the current time
 */
var orderScheduleDelay = "01:00";

exports.order_schedule_delay = timeToTimeslot(orderScheduleDelay);


/**
 * What percentage cut we take for each order
 */
exports.percentage_cut = 0.01; // 1%


/**
 * Order states
 */
var orderStates = {
                "UNKNOWN": 0,
                "CREATED": 1,
                "PENDING_SCHEDULING_PICKUP": 2,
                "PENDING_PICKUP": 3,
                "ONGOING_PICKUP": 4,
                "PICKED_UP": 5,
                "PROCESSING": 6,
                "PROCESSED": 7,
                "PENDING_SCHEDULING_DELIVERY": 8,
                "PENDING_DELIVERY": 9,
                "ONGOING_DELIVERY": 10,
                "DELIVERED": 11,
                "COMPLETED": 12
            };

exports.state_for_order = function(state_val)
{
   var state;
    for (var key in orderStates)
    {
        if(orderStates.hasOwnProperty(key) && state_val == orderStates[key])
        {
            state = orderStates[key];
        }
    }
    return state;
}

exports.order_states = orderStates;