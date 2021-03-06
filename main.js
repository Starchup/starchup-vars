/**
 * Schedule timeslots
 */
var timeslotsPerHour = 2;

exports.timeslot_to_time = function(timeslot_val) {
    var timeConv = timeslot_val / timeslotsPerHour;
    var minutes = (timeConv - Math.floor(timeConv)) * 60;
    minutes = Math.floor(minutes).toString();
    if (minutes.length == 1) minutes = minutes + "0";

    var hours = Math.floor(timeConv).toString();
    if (hours.length == 1) hours = "0" + hours;

    var time = hours + ":" + minutes + ":00";

    return time;
}

timeToTimeslot = function(time_val) {
    var hours = time_val.split(":")[0];
    var minutes = time_val.split(":")[1];

    var timeslot = (parseInt(hours) * timeslotsPerHour) + Math.floor((parseInt(minutes) / 60) * timeslotsPerHour);

    return timeslot;
}

minutesToTimeslot = function(minutes_val) {

    var timeslot = Math.floor((parseInt(minutes_val) / 60) * timeslotsPerHour);
    return timeslot;
}

exports.time_to_timeslot = timeToTimeslot;
exports.minutes_to_timeslot = minutesToTimeslot;
exports.timeslots_per_hour = timeslotsPerHour;


/**
 * When a customer schedules an order, he only has options at least
 * orderScheduleDelay after the current time
 */
var orderScheduleDelay = "00:00";

exports.order_schedule_delay = timeToTimeslot(orderScheduleDelay);


/**
 * Order status
 */
var orderStatus = {
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

exports.status_for_order = function(status_val) {
    var status;
    for (var key in orderStatus) {
        if (orderStatus.hasOwnProperty(key) && status_val == orderStatus[key]) {
            status = key;
        }
    }
    return status;
}

exports.order_status = orderStatus;
