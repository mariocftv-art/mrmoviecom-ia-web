// lib/ai/aiStatus.ts

export type IAStatusState = 'online' | 'busy' | 'offline';

export interface IAStatus {
  state: IAStatusState;
}

let currentStatus: IAStatus = {
state: "offline",
};

export function getIAStatus(): IAStatus {
  return currentStatus;
}

export function setIAStatus(state: IAStatusState) {
  currentStatus = { state };
}
