export type Fate = string | { label: string; weight: number };
export type FateList = Fate[];

export class OracleMachine {
  candidates: String[] = [];

  constructor(fateList: FateList) {
    for (const fate of fateList) {
      if (typeof fate === "string") {
        this.candidates.push(fate);
        continue;
      }

      [...Array(fate.weight)].forEach((_) => this.candidates.push(fate.label));
    }
  }

  receive() {
    return this.candidates[Math.floor(Math.random() * this.candidates.length)];
  }
}
