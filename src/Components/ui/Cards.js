import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const truncateStr = (str, lim, type) => {
  const ellipsis = type === 'description' ? '...READ MORE' : '...';
  return str.length > lim ? str.slice(0, lim > 3 ? lim - 3 : lim) + ellipsis : str;
}
export default class Cards extends Component {
  render() {
    // let x = 0;
    const { cards, goToArticle, type } = this.props;
    return (
      <div className="main-cards-bg">
        <main className="main-cards-board">
          <ul className="cards">
            {cards.map( (article, index) => (
              <li key={`${article.article_id}`} onClick={() => goToArticle(index, type, article.title)}>
                <Link to="/article" className="article-lnk">
                  <img src={article.image_url} alt=""/>
                  <h2>{truncateStr(article.title, 75, 'title')}</h2>
                  <h3 className="source">{`${article.source_name} ${ article.creator !== null ? ' - ' + article.creator : '' }`}</h3>
                  <p>{article.description !== false ? truncateStr(article.description, 200, 'description') : ''}</p>
                  {/* <p>{article.content}</p> */}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}