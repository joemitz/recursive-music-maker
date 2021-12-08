import MidiWriter from 'midi-writer-js';
import fs from 'fs';

const make = (melody, octave = 2, maxOctave = 6, duration = 1, repeat = 1, tracks = []) => {

  if (octave === maxOctave) {
    let trackNum = 1;

    tracks.forEach(track => {
      let write = new MidiWriter.Writer(track);
      let buffer = Buffer.from(write.buildFile());

      fs.writeFile(`midi/track${trackNum}.mid`, buffer, err => {
        if (err) {
          console.error(err);
          return;
        }
      });
      trackNum++;
    });

  } else {
    let transposedNotes = melody.map(note => {
      return `${note}${octave}`;
    });

    let track = new MidiWriter.Track();
    let notes = new MidiWriter.NoteEvent({pitch: transposedNotes, duration, repeat, sequential: true});

    track.addEvent(notes);
    tracks.push(track);

    make(melody, octave + 1, maxOctave, duration * 2, repeat * 2, tracks);
  }
};

let noteString = 'C,G,A,D';
let melody = noteString.split(',');
make(melody);