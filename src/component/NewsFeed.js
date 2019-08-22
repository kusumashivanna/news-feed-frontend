import React, { Component } from "react";
import News from "./News";
import styles from "./NewsFeed.module.css";
export default class NewsFeed extends Component {
  componentDidMount = () => {
    this.props.getNew();
  };
  render() {
    return (
      <div className={styles.base}>
        {this.props.userData &&
          this.props.userData.articles &&
          this.props.userData.articles.map(news => {
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
