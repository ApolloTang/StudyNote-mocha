exports = module.exports = {};

exports.parse = function(args, defaults){
    var options = {};
    // make sure it is an object
    if (typeof defaults === "object" && !( defaults instanceof Array )) {
        options = defaults;
    }

    for (var i in args){
        var arg = args[i];
        if (arg.substr(0,2) === "--" ){           // check to see the first 2 chars is "--"  this is long formed tag
            arg = arg.substr(2)                   // if it is long form tag save everything after "--" in arg
            if (arg.indexOf("=") !== -1 ) {       // if one or more delimiter ("=") exsits
                arg = arg.split("=");             //    break string into fracgments at "=", fragments hold in array "arg"
                var key = arg.shift();            // get the first one, which is the key, fracgemts left in arg is now value(s)
                var value = arg.join("=");        // second "=" is part of value, so concatenate all fragment into 1 piece
                if ( /^[0-9]+$/.test(value) ) {   // if value is type string and digits than
                    value = parseInt(value, 10);  //      cast into integer of base 10
                }
                options[key] = value;             // store k-v pair in objected call options
            } else {
                options[arg] = true;              // if there is no "=", then tag only has key and no value
                                                  // it is then default to boolean "true"
                console.log(key , options[key])
            }
        }
    }
    return options;
};

