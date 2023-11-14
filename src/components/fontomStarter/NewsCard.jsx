import React from 'react';
import './fontomStart.css';

const NewsCard = (item) => {
    // truncate string
    var stringTruncate = function(str, length){
        var dots = str.length > length ? '...' : '';
        return str.substring(0, length)+dots;
      };
    const truncatedString = stringTruncate(item.item.excerpt, 150)

    return(
        <div className="news-card"> 
            <a href={`https://main--comfy-brioche-7de6d4.netlify.app/posts/${item.item.slug}`} className="imgContainer">
            <img className='news-card-img' src={`${item.item.coverImage.url}`} alt="card img" />
            </a>
            <div className="news-card-det">
                <p className="article-sm">Medium Article - {item.item.date}</p>
                <a href={`https://main--comfy-brioche-7de6d4.netlify.app/posts/${item.item.slug}`} className='news-card-head'>{item.item.title}</a>
                <p className="news-card-brief">{truncatedString}</p>
                <a href={`https://main--comfy-brioche-7de6d4.netlify.app/posts/${item.item.slug}`} className="read-more">Read more - 2 min read</a>
            </div>
        </div>
    )
}

export default NewsCard