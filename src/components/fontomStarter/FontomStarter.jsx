import React, { useEffect, useState, Suspense } from "react";
import LazyLoad from "react-lazyload";
import "./fontomStart.css";
import NewsCard from "./NewsCard";

const accessToken = "0B5CjrCi5GMN24L6rv08xaxhTFhIFfDm95f77Db9yCw";
const spaceId = "ner8ic2s1dif";

const query = `
    {
        postCollection{
            items{
                title
                content{
                    json
                }
                coverImage{
                    url
                }
                slug
                excerpt
                author{
                    name
                }
                date
            }
        }
    }
`;

const FontomStarter = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setItems(data.postCollection.items);
      });
  });

  const slicedItems = items.slice(0, 3);
  return (
    <LazyLoad className="news">
      <img
        src="images/back-news.png"
        loading="lazy"
        alt=""
        className="back-img"
      />
      <img
        src="images/back-news-m.png"
        loading="lazy"
        alt=""
        className="back-img back-img-m"
      />
      <div className="news-det">
        <div className="heading">
          <h1>Web3 Investment Blog</h1>
        </div>
        <div className="news-para">
          <p>
            Stay up to date with the latest trends and exclusive analysis of
            blockchain and web3 investments
          </p>
        </div>
        <div className="news-cards">
          {slicedItems.map((item) => (
            <NewsCard item={item} key={item.slug} />
          ))}
        </div>
      </div>
    </LazyLoad>
  );
};

export default FontomStarter;
