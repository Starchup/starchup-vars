
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

   var time = Math.floor(timeConv).toString() + ":" + Math.floor(minutes).toString();

   return time;
}

exports.timeslots_per_hour = timeslotsPerHour;


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