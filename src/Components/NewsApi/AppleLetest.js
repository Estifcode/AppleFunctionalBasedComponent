import React, { useState, useEffect } from "react";
import "../../css/style.css";
import "../../css/bootstrap.css";

function ApppleLatestNews() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?q=Apple&language=en&sortBy=publishedAt,relevancy,popularity&pageSize=6&apiKey=df44ef38cd2a46e8a797cd2d72ccd731"
		)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				const articlesData = data.articles;
				setArticles(articlesData );
			});
	}, []);

	console.log(articles);
	// title, urlToImage, description
	return (
		<div className="allNewsWrapper">
			<div className="container-fluid">
				<div className="row h-100 align-items-center justify-content-center text-center">
					<div className="col-12">
						<div className="title-wrapper bold">
							Apple
							Latest
							News
						</div>
					</div>
					{articles.map(
						(
							theNews,
							index
						) => {
							let image =
								theNews.urlToImage;
							let newsWrapper =
								(
									<div key={	index	} className="row col-sm-12 col-md" >
										<div className="singleNewsWrapper">
											<div className="newsTitle">
												<a
													href={
														theNews.url
													}
													target="_blank"
												>
													{
														theNews.title
													}
												</a>
											</div>
											<div className="newsImage">
												<a
													href={
														theNews.url
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
											<div className="newsDescription">
												<a
													href={
														theNews.url
													}
													target="_blank"
												>
													{
														theNews.description
													}
												</a>
											</div>
										</div>
									</div>
								);
							return newsWrapper;
						}
					)}
				</div>
			</div>
		</div>
	);
}

export default ApppleLatestNews;
