import { usePGlite } from "@electric-sql/pglite-react";

interface MyRow {
	id: number;
	task: string;
	done: boolean;
}

export const getQuery = async () => {

	const pgliteClient = usePGlite()
	const ret = await pgliteClient.query<MyRow>(`
  SELECT * from todo WHERE id = 1;
`);

	return { result: ret.rows };
};
