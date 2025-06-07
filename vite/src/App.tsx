import { Button } from "./components/ui/button";
import { handleCommand } from "./packages/db/commands";

function App() {
	return (
		<>
			<h1>sample pglite mock up </h1>

			<Button onClick={() => handleCommand()}>Command</Button>
		</>
	);
}

export default App;
