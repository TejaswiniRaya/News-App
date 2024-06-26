import { useState } from 'react'
import { useEffect } from 'react'
import Newsitem from './Newsitem';

function Newsboard({category}){
    const [articles,setArticles]=useState([])
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=54527edc8670458880c4cd1d426fd24a`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]);
   return(
          <>
        <h2 className="text-center my-2">Latest<span className="badge bg-danger mx-2 px-2 py-2">News</span></h2>
        {articles.map((news,index)=>{
            return(
                <Newsitem key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage}></Newsitem>
            )
        })}

        
    
        
        </>

   )


}

export default Newsboard;