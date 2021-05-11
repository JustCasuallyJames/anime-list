import React from 'react'

const Search = ({ HandleSearch, setSearch, search }) => {
	return (
		<div className="main-head">
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
		</div>
	)
}

export default Search
