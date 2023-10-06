import { Env } from './env';
import { OracleMachine } from './oracle';

const fate = {
	大吉: 1,
	中吉: 2,
	吉: 3,
	小吉: 4,
	末吉: 3,
	凶: 2,
	大凶: 1,
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const oracle = new OracleMachine(fate);
		const payload = {
			id: crypto.randomUUID(),
			fate: oracle.receive(),
		};

		const json = JSON.stringify(payload, null, 2);
		return new Response(json, {
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		});
	},
};
