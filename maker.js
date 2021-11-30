import MidiWriter from 'midi-writer-js';
import fs from 'fs';

let octave1 = new MidiWriter.NoteEvent({pitch: ['C2', 'G2', 'A2', 'D2'], duration: '1', sequential: true, repeat: '1'});
let track1 = new MidiWriter.Track();
track1.addEvent(octave1);

let write = new MidiWriter.Writer(track1);
let buffer = Buffer.from(write.buildFile());

fs.writeFile('track1.mid', buffer, err => {
  if (err) {
    console.error(err);
    return;
  }
});

let octave2 = new MidiWriter.NoteEvent({pitch: ['C3', 'G3', 'A3', 'D3'], duration: '2', sequential: true, repeat: '2'});
let track2 = new MidiWriter.Track();
track2.addEvent(octave2);

write = new MidiWriter.Writer(track2);
buffer = Buffer.from(write.buildFile());

fs.writeFile('track2.mid', buffer, err => {
  if (err) {
    console.error(err);
    return;
  }
});

let octave3 = new MidiWriter.NoteEvent({pitch: ['C4', 'G4', 'A4', 'D4'], duration: '4', sequential: true, repeat: '4'});
let track3 = new MidiWriter.Track();
track3.addEvent(octave3);

write = new MidiWriter.Writer(track3);
buffer = Buffer.from(write.buildFile());

fs.writeFile('track3.mid', buffer, err => {
  if (err) {
    console.error(err);
    return;
  }
});

let octave4 = new MidiWriter.NoteEvent({pitch: ['C5', 'G5', 'A5', 'D5'], duration: '8', sequential: true, repeat: '8'});
let track4 = new MidiWriter.Track();
track4.addEvent(octave4);

write = new MidiWriter.Writer(track4);
buffer = Buffer.from(write.buildFile());

fs.writeFile('track4.mid', buffer, err => {
  if (err) {
    console.error(err);
    return;
  }
});