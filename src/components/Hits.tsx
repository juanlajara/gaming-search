import { Highlight } from "react-instantsearch";

function Hit({ hit }) {
	return (
		<article>
			<a href={hit.url} style={{ textDecoration: "none", color: "inherit" }}>
				<img src={hit.image} alt={hit.name} />
				<h1>
					<Highlight attribute="name" hit={hit} />
				</h1>
				<p>{hit.description}</p>
				<p>${hit.price}</p>
			</a>
		</article>
	);
}

export default Hit;