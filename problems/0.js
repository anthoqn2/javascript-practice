/**
 * Problem 0: If statements
 * 
 * Given a percentage, return the letter grade for that percentage. 
 * (Don't worry about +/-).
 * 
 * A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
 * 
 * @example 92 -> "A", 75 -> "B"
*/
function problem(percentage) {
    let counter = 1;
    while(percentage > 68) {
        if (percentage > tests[counter][0])
        {
            return tests[counter-1][1];
        } 
        else if (percentage == tests[counter][0])
        {
            return tests[counter][1];
        }
        else {
            counter += 1;
        }
    }; 
    return 'F'
}

const tests= [
    [100, "A"],
    [92, "A"],
    [90, "A"],
    [85, "B"],
    [70, "C"],
    [69, "D"],
    [0, "F"]
]

module.exports = {problem, tests};