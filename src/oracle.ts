const labels = ['大吉', '中吉', '吉', '小吉', '末吉', '凶', '大凶'] as const;

type Fate = { [key in (typeof labels)[number]]: number };

export const fate: Fate = {
	大吉: 1,
	中吉: 2,
	吉: 3,
	小吉: 4,
	末吉: 3,
	凶: 2,
	大凶: 1,
};

type FateKeys = keyof typeof fate;

export class OracleMachine {
	/**
	 * 出目の集合
	 */
	fates: string[] = [];

	constructor(fate: Fate) {
		Object.keys(fate).map((f) => {
			const weight = fate[f as FateKeys];
			[...Array(weight)].map(() => this.fates.push(f));
		});
	}

	draw() {
		return this.fates[Math.floor(Math.random() * this.fates.length)];
	}
}
