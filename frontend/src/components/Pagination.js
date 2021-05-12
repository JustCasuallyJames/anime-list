import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate, prevPage, nextPage, search }) => {
	const pageNumbers = [];
	//the boolean expression evaluates to how many page numbers there are
	{ console.log("Total Posts:", totalPosts) }
	{ console.log("Total Post Per Page:", totalPosts) }

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav aria-label="Anime Navigation">
			<ul className="pagination justify-content-center pagination-lg">
				<li className="page-item">
					<Link to={`/${search}`} style={{ "text-decoration": "none" }}>
						<a className="page-link" href={`/${search}`} onClick={() => prevPage()}>Previous</a>
					</Link>
				</li>

				{pageNumbers.map(num => (
					<li className="page-item" key={num} onClick={() => paginate(num)}>
						<Link to={`/${search}`} style={{ "text-decoration": "none" }}>
							<a href={`/${search}`} className="page-link">{num}</a>
						</Link>
					</li>
				))}

				<li className="page-item">
					<Link to={`/${search}`} style={{ "text-decoration": "none" }}>

						<a className="page-link" href={`/${search}`} onClick={() => nextPage()}>Next</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Pagination
