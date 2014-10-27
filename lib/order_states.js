var states = {
                "UNKNOWN": 0,
                "CREATED": 1,
                "PENDING_PICKUP": 2,
                "PICKED_UP": 3,
                "PROCESSING": 4,
                "PROCESSED": 5,
                "PENDING_DELIVERY": 6,
                "GOING_HOME": 7,
                "DELIVERED": 8,
                "COMPLETED": 9
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