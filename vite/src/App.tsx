import { useEffect } from "react";
import { Button } from "./components/ui/button";
import { handleCommand } from "./packages/db/commands";
import { getQuery } from "./packages/db/queries";

function App() {
	useEffect(() => {
		(async() => {
			const {result} = await getQuery()
			console.log({result})
		})()
	},[])
	return (
		<>
			<h1>sample pglite mock up </h1>

			<Button onClick={async() => await handleCommand()}>Command</Button>
		</>
	);
}

export default App;
