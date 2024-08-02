import Form from "./components/Form";
import Hit from "./components/Hits";
import { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	const searchClient = algoliasearch(
		"AJRNF83HF1",
		"b026d2a27d609c5f767fb59a5257507a"
	);
	return (
		<div>
			<InstantSearch
				searchClient={searchClient}
				indexName="onboarding_bestbuy_index"
			>
				<SearchBox />
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</div>
	);
}

export default App;
