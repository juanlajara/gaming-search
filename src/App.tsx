import Form from "./components/Form";
import { useState } from "react";

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	return (
		<div>
			<Form />
		</div>
	);
}

export default App;
