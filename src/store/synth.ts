import {atom} from "jotai";
import * as Tone from "tone";

export const synthStartedAtom = atom(false);
export const frequencyAtom = atom(400);

export const sequencerAtom = atom(new Tone.Sequence());
