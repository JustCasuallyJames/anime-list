import React from 'react'
import Pagination from './Pagination.js';
import Posts from './Posts.js';
import Search from './Search.js';

const MainContent = (props) => {
    return (
        <main>
            <Search HandleSearch={props.HandleSearch} setSearch={props.setSearch} search={props.search} />
            <Posts animeList={props.animeList} show={props.show} setShow={props.setShow}/>
            {/* If it is loading, then that means it is already called. Which means if the api calls it, then it'll only display the pagination when it's already loaded */}
            {props.loaded ? <Pagination 
            postsPerPage={props.postsPerPage} 
            totalPosts={props.totalPosts}
            paginate={props.paginate}
            prevPage={props.prevPage}
            nextPage={props.nextPage}
            /> : null}
        </main>
        

    )
}

export default MainContent
