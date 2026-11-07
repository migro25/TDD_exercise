const table_string = 
    `Date; exercises
    01.11.; pushups, pullups, crunches
    03.11.; deadlifts, pushups
    06.11.; pushups, crunches, running
    08.11.; crawling, pullups
    `


function devideString(longString) {
    return longString
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line.length > 0);
}

function test_devideString() {
    const test_string =
    `bla
    blub`;
    const result = devideString(test_string);
    if (!Array.isArray(result)) {
        console.log("ERROR: Return type ist kein Array");
    }

    else if (result.length !== 2) {
        console.log("ERROR: länge passt nicht");
    }

    else if (result[0] !== "bla") {
console.log("ERROR:, erstes entry nicht ");
    }

    else if (result[1] !== "blub") {
console.log("ERROR:, erstes entry nicht ");
    }
    else {
        console.log("kein Fehler");
    }

}

test_devideString();