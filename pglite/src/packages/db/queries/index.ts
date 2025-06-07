import { pgliteClient } from "../client";

const ret = await pgliteClient.query(`
  SELECT * from todo WHERE id = 1;
`);
console.log(ret.rows);
