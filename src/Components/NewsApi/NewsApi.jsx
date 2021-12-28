import React, { useEffect, useState } from 'react';

function NewsApi() {

    const [News, setNews] = useState([]);

    useEffect(() => {

        fetch("https://newsapi.org/v2/everything?q=Apple&language=en&sortBy=publishedAt,relevancy,popularity&pageSize=6&apiKey=df44ef38cd2a46e8a797cd2d72ccd731")

            // fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=1919db465b61490796dc96088d167f85")

            .then((response) => response.json())
            .then((data) => {
                const newsData = data.articles
                setNews(newsData);
                console.log(newsData);
            });
    }, []);


    return (

        <div className="container-flued ">
            <div className="container text-center title">
                <h1> Apple
							Latest
							News</h1>
            </div>

            {News.map((singleNews, index) => {

                let image = singleNews.urlToImage;

                let newsWrapper = (


                    <div key={index} className="container text-center ">

                        <div className="new-alert singleNews">
                            <h2>News</h2>
                        </div>

                        <div className="title-wraper bold black">
                            <a
                                href={
                                    singleNews.url
                                }
                                target="_blank"
                            >
                                {
                                    singleNews.title
                                }
                            </a>
                        </div>
                        <div className="newsImage">
                            <a
                                href={
                                    singleNews.url
                                }
                                target="_blank"
                            >
                                <img
                                    src={
                                        image
                                    }
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="description-wrapper black">

                            <a
                                href={
                                    singleNews.url
                                }
                                target="_blank"
                            >
                                {
                                    singleNews.description
                                }
                            </a>
                        </div>



                        <div className="links-wrapper">

                            <a href={singleNews.url}>{
                                singleNews.title
                            }</a>

                        </div>
                    </div>

                    //   <div>

                    //     <div className="container text-center title"> <h2>News</h2> 
                    //     <a href={newsLink}> </a>
                    //     </div>
                    //     <div className="container text-center title">{News}  </div>
                    // </div>
                );
                return newsWrapper;
          }
            )
                }
         
            
        </div>
     
     

     
    );
}

export default NewsApi;



// https://newsapi.org/v2/top-headlines?country=us&apiKey=1919db465b61490796dc96088d167f85

// 1919db465b61490796dc96088d167f85