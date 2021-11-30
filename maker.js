import MidiWriter from 'midi-writer-js';
import fs from 'fs';

let track = new MidiWriter.Track();

// let notes = new MidiWriter.NoteEvent({pitch: ['C4', 'D4', 'E4'], duration: '4'});
// track.addEvent(notes);

// track.addEvent([
//     new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//     new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
//     new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//     new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
//     new MidiWriter.NoteEvent({pitch: ['C4', 'C4', 'C4', 'C4', 'D4', 'D4', 'D4', 'D4'], duration: '8'}),
//     new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//     new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'})
//     ], function(event, index) {
//     return {sequential: true};
//   }
// );

let write = new MidiWriter.Writer(track);
let buffer = Buffer.from(write.buildFile());
console.log(buffer);

fs.writeFile('test.mid', buffer, err => {
  if (err) {
    console.error(err);
    return;
  }
});