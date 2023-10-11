/**
 * 神託機械を表現するクラス
 */
export class OracleMachine {
  /**
   * 出目の集合
   */
  fates: string[] = [];

  /**
   * コンストラクタ
   * @param fate インデックスが出目、その値が出目の重みである配列
   */
  constructor(fate: { [key: string]: number }) {
    Object.keys(fate).map((f) => {
      const weight = fate[f];
      [...Array(weight)].map(() => this.fates.push(f));
    });
  }

  /**
   * 神託機械から神託を受信する
   * @returns コンストラクタに与えた出目のうちいずれか一つ
   */
  receive(): (typeof this.fates)[number] {
    return this.fates[Math.floor(Math.random() * this.fates.length)];
  }
}
