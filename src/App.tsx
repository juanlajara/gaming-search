import Form from "./components/Form";
// import { useState } from "react";
import Hit from "./components/Hits";
import RatingMenu from "./components/RatingMenu";
import algoliasearch from "algoliasearch/lite";
import {
	InstantSearch,
	SearchBox,
	Hits,
	RefinementList,
	Pagination,
	Configure,
	Index,
} from "react-instantsearch";
import { Autocomplete } from "./components/Autocomplete";

function App() {
	// const [alertVisible, setAlertVisibility] = useState(false);
	const searchClient = algoliasearch(
		"AJRNF83HF1",
		"b026d2a27d609c5f767fb59a5257507a"
	);
	return (
		<div>
			<InstantSearch searchClient={searchClient} insights={true}>
				<Index indexName="transformed_onboarding_bestbuy_index_query_suggestions">
					<Autocomplete
						placeholder="Search products"
						detachedMediaQuery="none"
						openOnFocus
					/>
				</Index>
				<Index indexName="transformed_onboarding_bestbuy_index">
					<div className="left-panel">
						<h2>Brands</h2>
						<RefinementList attribute="brand" />
						<h2>Ratings</h2>
						<RatingMenu attribute="rating" />
					</div>
					<div className="right-panel">
						<Configure hitsPerPage={40} />
						<SearchBox autoFocus placeholder="Search for products" />
						<Hits hitComponent={Hit} />
						<Pagination />
					</div>
				</Index>
			</InstantSearch>
		</div>
	);
}

export default App;
