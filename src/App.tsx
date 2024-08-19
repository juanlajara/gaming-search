import Form from "./components/Form";
import Hit from "./components/Hits";
import RatingMenu from "./components/RatingMenu";
import { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
	InstantSearch,
	SearchBox,
	Hits,
	RefinementList,
	Pagination,
	Configure,
} from "react-instantsearch";

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
				indexName="transformed_onboarding_bestbuy_index"
				insights
			>
				<div className="left-panel">
					<RefinementList attribute="brand" />
					<RatingMenu attribute="rating" />
				</div>
				<div className="right-panel">
					<Configure hitsPerPage={40} />
					<SearchBox autoFocus placeholder="Search for products" />

					<Hits hitComponent={Hit} />
					<Pagination />
				</div>
			</InstantSearch>
		</div>
	);
}

export default App;
