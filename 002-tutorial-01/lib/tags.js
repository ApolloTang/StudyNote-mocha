exports = module.exports = {};

exports.parse = function(args, defaults){
    // expect args to be [],  default to be {}

    var options = {};
    // make sure it is an object
    if (typeof defaults === "object" && !( defaults instanceof Array )) {
        options = defaults;
    }

    for (var i in args){
        var arg = args[i];

        if ( arg.charAt(0) === "-" && arg.charAt(1) != "-" )  { // first char is "-" but second is not "-"
            arg = arg.substr(1);                 // discard the initial "-"
            if (arg.indexOf("=") !== -1 ) {      // if "=" exist then


            }
            return options;
        }
        /*
        if (arg.substr(0,2) === "--" ){           // check to see the first 2 chars is "--", if so this is long formed tag
            arg = arg.substr(2)                   // if it is long form tag save chas after "--" in arg
            if (arg.indexOf("=") !== -1 ) {       // if one or more delimiter ("=") exsits then
                arg = arg.split("=");             //    break string into fracgments at "=", fragments hold in array "arg"
                var key = arg.shift();            // get the first one, which is the key, fragments left in arg is the value
                var value = arg.join("=");        // second "=" is part of value, so concatenate all fragment into 1 piece
                if ( /^[0-9]+$/.test(value) ) {   // if value is type string and one or more digits only than
                    value = parseInt(value, 10);  //      cast into integer of base 10
                }
                options[key] = value;             // store k-v pair in objected call options
            } else {
                options[arg] = true;              // if there is no "=", then tag only has key and consist of no value
                                                  // it is then default to boolean "true"
            }
        }
        */
    }
    return options;
};

