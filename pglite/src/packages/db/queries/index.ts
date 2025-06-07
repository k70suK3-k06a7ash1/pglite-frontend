import { pgliteClient } from "../client";


interface MyRow {
  id: number;
  task: string
  done: boolean 

}


export const getQuery = async() => {
const ret = await pgliteClient.query<MyRow>(`
  SELECT * from todo WHERE id = 1;
`);

return {result : ret.rows}
}

