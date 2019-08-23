import React, { Component } from "react";
import News from "./News";
import styles from "./NewsFeed.module.css";
export default class NewsFeed extends Component {
  componentDidMount = () => {
    this.props.getNewsFeed();
  };
  render() {
    return (
      <div className={styles.base}>
        {this.props.newsFeed &&
          this.props.newsFeed.articles &&
          this.props.newsFeed.articles.map(news => {
            return (
              <News
                image={news.urlToImage}
                title={news.title}
                content={news.content}
              />
            );
          })}
      </div>
    );
  }
}
