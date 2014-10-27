# Starchup Variables module
Simple way to store and change various Starchup configs & vars

# Installation

    npm install starchup-vars

# Components:

* Order States

# Usage
    var starchup = require('starchup-vars');

    if (order.state === starchup.order_states.PENDING_PICKUP) { //Do stuff }
    
    starchup.state_for_order(order.state);
