import { Highlight } from "react-instantsearch";
import { AddToCartButton } from "./AddToCartButton";

function Hit({ hit }) {
	return (
		<article>
			<a href={hit.url} style={{ textDecoration: "none", color: "inherit" }}>
				<img src={hit.image} alt={hit.name} />
				<h4>
					<Highlight attribute="name" hit={hit} />
				</h4>
				<p>{hit.description}</p>
				<p>${hit.price}</p>
			</a>
			<button
				className="addtocart"
				onClick={() =>
					sendEvent("conversion", hit, "Added To Cart", {
						// Special subtype
						eventSubtype: "addToCart",
						// An array of objects representing each item added to the cart
						objectData: [
							{
								// The discount value for this item, if applicable
								discount: hit.discount || 0,
								// The price value for this item (minus the discount)
								price: hit.price,
								// How many of this item were added
								quantity: 1,
							},
						],
						// The total value of all items
						value: hit.price,
						// The currency code
						currency: "USD",
					})
				}
			>
				<div className="pretext">
					<i className="fas fa-cart-plus"></i> ADD TO CART
				</div>

				<div className="pretext done">
					<div className="posttext">
						<i className="fas fa-check"></i> ADDED
					</div>
				</div>
			</button>
		</article>
	);
}

export default Hit;
