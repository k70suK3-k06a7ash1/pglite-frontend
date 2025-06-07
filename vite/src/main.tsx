import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { PGliteProvider } from "@electric-sql/pglite-react"

import { PGlite } from "@electric-sql/pglite"
import { live } from "@electric-sql/pglite/live"


 const pgliteClient = await PGlite.create({
    dataDir: 'idb://my-database',
  extensions: { live }
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PGliteProvider db={pgliteClient}>
			<App />

		</PGliteProvider>
		
	</StrictMode>,
);
