import {Oscillator, Sequence} from "tone";

export interface User {
  id: number | string;
  fullName: string;
}

export interface Project {
  id: string;
  name: string;
  tracks?: Track[];
}
export interface Track {
  id: number;
  name: string;
  synth: Oscillator;
  isSelected: boolean;
  sequence: Sequence<any>;
}

export interface Osc {
  id: string;
  wave: Wave;
  tune: number | string;
  pan: number | string;
}

declare enum Wave {
  Sin,
  Square,
  Rect,
  Saw,
}

export interface Filter {
  id: string;
  freq: number;
  reso: number;
  env: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

export interface Amp {
  id: string;
  env: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

export interface Reverb {
  id: string;
  mix: number;
  decay: number;
}

export interface Delay {
  id: string;
  mix: number;
  length: number;
  decay: number;
}

export interface Sequence {
  id: string;
  steps: Step[];
}

export interface Step {
  id: string;
  isActive: boolean;
}
