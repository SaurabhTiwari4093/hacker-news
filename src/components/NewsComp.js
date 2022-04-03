import React,{useState,useEffect} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import noImage from './no-image.png'


export default function NewsComp(props){
    const [articles, setArticles] = useState([])
    const [totalResult, setTotalResult] = useState(0)
    const [page, setPage] = useState(1)
    const [pageSize,setPageSize] =useState(6)
    const [loading,setLoading] = useState(false)
    const [apiKey,setApiKey]=useState("3ef569b9e2fd48a49a2a7c52edcf6d45")

    const updateNews=async()=>{
        props.setProgress(0)
        setLoading(true)
        props.setProgress(20)
        const url=`https://newsapi.org/v2/top-headlines?country=in&apikey=${apiKey}&page=${page}&pageSize=${pageSize}&category=${props.category}`;
        props.setProgress(40)
        let data=await fetch(url);
        props.setProgress(60)
        let parsedData=await data.json();
        setArticles(parsedData.articles)
        props.setProgress(80)
        setTotalResult(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    
    const Next=async()=>{
            const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}&category=${props.category}`;
            setPage(page+1) 
            let data = await fetch(url);
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles))
            setTotalResult(parsedData.totalResults)
    }

    useEffect(() => {
            updateNews()
    }, [])

    const capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
   
    return (
        <>
            <h1 className='text-center' style={{ marginTop: '100px',textShadow: "1px 1px 1px #2222226b"}}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading&&<div className='text-center my-5'><Spinner/></div>}
            <InfiniteScroll
                dataLength={articles.length}
                next={Next}
                hasMore={articles.length!==totalResult}
                loader={<div className='text-center my-5'><Spinner/></div>}
                style={{overflow:"hidden"}}
            >
            <div className='container my-3'>
            <div className="row">
                {articles.map((element)=>{
                    return <div className="col-md-4 my-4 d-flex justify-content-center" key={element.url}>
                    <NewsItems mode={props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} author={element.author ? element.author: "Unknown"} time={element.publishedAt? element.publishedAt: "Unknown"} urlToImage={element.urlToImage?element.urlToImage:noImage} url={element.url} />
                </div>
                })}
            </div>
            </div>

            </InfiniteScroll>

        </>
    )


}
