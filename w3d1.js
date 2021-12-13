/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visited indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(que) {
    count = 0
    first = false;
    for (let i = 0; i < que.length; i++){
        if(que[i] == 1 && first == false){
            first = true;
            count = 0;
        }
        if (que[i] == 0){
            count++;
        }
        if (que[i] == 1 && count < 6){
            return false;
        }
        if (que[i] == 1 && count > 6){
            continue;
        }
    }
    return true;
}

socialDistancingEnforcer(queue1)

module.exports = { socialDistancingEnforcer };
