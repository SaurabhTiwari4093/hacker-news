import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from '../components/images/search.png';


export default function NewsComp(props) {
    const [articles, setArticles] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(12)
    const [serachQuery, setSearchQuery] = useState('');

    const updateNews = async () => {
        props.setProgress(0)
        props.setProgress(20)
        const url = `http://hn.algolia.com/api/v1/search?page=${page}&hitsPerPage=${pageSize}&query=${serachQuery}`;
        props.setProgress(40)
        let data = await fetch(url);
        props.setProgress(60)
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(parsedData.hits)
        props.setProgress(80)
        setTotalPage(parsedData.nbPages)
        props.setProgress(100)
    }

    const Next = async () => {
        const url = `http://hn.algolia.com/api/v1/search?page=${page + 1}&hitsPerPage=${pageSize}&query=${serachQuery}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.hits))
        setTotalPage(parsedData.nbPages)
    }

    useEffect(() => {
        updateNews()
    }, [])

    const callSearchApi=(query)=>{
        setSearchQuery(query);
        updateNews()
    }

    return (
        <>
            <div className="container input-group mb-4" style={{ marginTop: '100px', paddingRight: 30, paddingLeft: 30 }}>
                <span className="input-group-text">
                    <img src={SearchIcon} alt="search-icon" height={20} width={20} />
                </span>
                <input className="form-control" placeholder="Search" type="search" aria-label="Search" onChange={(e) => callSearchApi(e.target.value)} />
            </div>
            <InfiniteScroll
                dataLength={articles.length}
                next={Next}
                hasMore={page !== totalPage}
                loader={<div className='text-center my-5'><Spinner /></div>}
                style={{ overflow: "hidden" }}
            >
                <div className='container my-3'>
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4 my-4 d-flex justify-content-center" key={index}>
                                <NewsItems mode={props.mode} title={element.title ? element.title : (element.story_title ? element.story_title : (element.story_text ? element.story_text : " "))} author={element.author ? element.author : "Unknown"} time={element.created_at ? element.created_at : " "} url={element.url ? element.url : (element.story_url ? element.story_url : "#")} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
