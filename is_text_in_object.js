function isTextInObject(text, object) {

    var lower = text.toLowerCase();

    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            var value = object[property];

            if (typeof object[property] == "string") {
                if (object[property].toLowerCase() == lower) {
                    return true;
                }
            } else if (typeof value === 'object') {
                if (isTextInObject(text, value)) {
                    return true;
                }
            }
        }
    }
    return false;
}


function test_isTextInObject() {

    var output = [];

    var object = {
        "key1": "val1", "key2": "val2", "key3": "val3",
        "key4": {
            "child_key_1": "child_value_1"
        }
    };

    output.push("test_partial_match: " + isTextInObject("val2", object));
    output.push("child_value_1: " + isTextInObject("child_value_1", object));
    output.push("child_value_1: " + (false == isTextInObject("child_value_0", object)));
    output.push("test_no_match: " + (false == isTextInObject("val0", object)));

    return output.join('<br>\n');
}