exports = module.exports = {};

exports.parse = function(args){
    var options = {};
    for (var i in args){
        var arg = args[i];;
        // check for long formed tag
        // starting and including postion 0 for the length of 2
        if (arg.substr(0,2) === "--" ){
            arg = arg.substr(2) // starting and including position 2 to the end
            if (arg.indexOf("=") !== -1 ) {
                arg = arg.split("="); // break string at "=",
                                      // and push fragments into array arg
                var key = arg.shift(); // get the first one
                var value = arg.join("=");  // second "=" is part of value

                if ( /^[0-9]+$/.test(value) ) { // if value is type string
                    value = parseInt(value, 10);
                }

                options[key] = value;  // second "=" is part of value

            }
        }
    }
    return options;
};

