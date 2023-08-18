export type TNameAnimation =
  | 'opacity'
  | 'translateRight'
  | 'translateLeft'
  | 'translateDown'
  | 'translateUp'
  | 'scale';

export interface IPresenceAnimation {
  animation: TNameAnimation;
  delay?: number;
  duration: number;
  timingFunction?:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'cubic-bezier';
  iterationCount?: 'infinite' | number;
  direction?: 'alternate' | 'alternate-reverse' | 'normal' | 'reverse';
  fillMode?: 'backwards' | 'both' | 'forwards' | 'none';
  playState?: 'paused' | 'running' | number;
}
