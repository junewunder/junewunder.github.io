let GLOBALS = require('./globals.js');
let patterns = require('./patterns.js');
let _ = require('underscore')
/**
 * yields time for note
 */
function *metronome({step: step}) {
  console.log(step);
  let time = 0;
  while (true) {
    time += step;
    yield GLOBALS.beat * time;
  }
}
/**
 * yields note from scale
 */
function *noteGenerator({scale: scale, pattern: pattern}) {
  scale = scale.split(' '); // split scale into an array
  let finalScale = [];
  for (let i = _.random(0,1); i < scale.length; i += 2) { //start at either 0 or 1
    finalScale.push(scale[i]); // get the odds from the scale into 'finalScale'
  }

  let index = 0;
  while (true) {
    yield finalScale[index % finalScale.length]; //play notes from finalScale
    index++;
  }
}
/**
 * yields octange from range
 */
function *octaveGenerator({range: range, pattern: pattern}) {
  let index = -1;
  while (true) {
    index++;
    index %= pattern.length
    yield range[pattern[index]];
  }
}
/**
 * yields current intrument info for song
 */
function *instrumentGenerator({type:type}) {
  //instantiate generators
  let metro = new metronome({
    step: 0.5
  });
  let noteGen = new noteGenerator({
    scale: _.sample(patterns.scales), // get random scale
    pattern: _.sample(patterns.note)  // get random note patten
  });
  let octaveGen = new octaveGenerator({
    range: [2,3,4], // no randomness on this yet
    pattern: _.sample(patterns.octavePatterns) // random octave pattern
  })
  // do generator magic
  for (let i of Number.range(16)) {
    yield {
      pitch: noteGen.next().value + octaveGen.next().value, // concatonate note and octave
      wait: metro.next().value // get time value
    }
  }
}

module.exports = {
  *noteGenerator: noteGenerator,
  *octaveGenerator: octaveGenerator,
  *metronome: metronome,
  *instrumentGenerator: instrumentGenerator
}