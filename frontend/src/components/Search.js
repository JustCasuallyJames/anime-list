import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({ HandleSearch, setSearch, search }) => {

	return (
		<div className="main-head">
			<Link to={`/${search}`}>
				<form
					className="search-box"
					onSubmit={HandleSearch}>
					<input
						type="search"
						placeholder="Search for an anime..."
						required
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</form>
			</Link>
		</div>
	)
}

export default Search
