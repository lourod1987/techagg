import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { headlines, article, setFullArticle } = this.props;
    return (
      <div>
        {(Object.entries(article).length === 0) ?
        <h3 className="refresh-warn">Start from homepage to load an individual article</h3> : (
          <ul className="card">
            <li>
              <a href={article.url || headlines.url} target="_blank" rel="noopener noreferrer" onClick={() => setFullArticle()}>
                <img src={article.image_url || headlines.image_url} alt=""/>
              </a>
              <h2>{article.title || headlines.title}</h2>
              <h3>{article.source_name + (article.creator !== null ? ' - ' + article.creator : '') || headlines.source_name + (article.creator !== null ? ' - ' + article.creator : '')}</h3>
              <p>{`${ article.description !== false ? article.decription : '' || headlines.description !== false ? headlines.description : '' }`}</p>
            </li>
            <a href={article.link || headlines.link} target="_blank" rel="noopener noreferrer" className="external-lnk">
              <button className="external-btn" onClick={() => setFullArticle()}>View on {article.source_name}</button>
            </a>
          </ul>
        )}
      </div>

    );
  }
}