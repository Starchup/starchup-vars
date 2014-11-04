var states = {
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
    for (var key in states)
    {
        if(states.hasOwnProperty(key) && state_val == states[key])
        {
            state = states[key];
        }
    }
    return state;
}

exports.order_states = states;