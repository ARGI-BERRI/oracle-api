import { fate } from "./constants";
import { Env } from "./env";
import { OracleMachine } from "./oracle";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const searchParams = new URL(request.url).searchParams;
    // NOTE: Zod でバリデーションしたほうがいいけど、面倒なので端折ります
    const options = {
      funny: searchParams.get("funny") == "true" ? true : false,
    };

    const oracle = new OracleMachine(fate);
    const payload = {
      id: crypto.randomUUID(),
      fate: oracle.receive(),
      options,
    };

    const json = JSON.stringify(payload, null, 2);
    return new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  },
};
