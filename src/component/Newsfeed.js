import React, { Component } from "react";
import News from "./News";
import styles from "./Newsfeed.module.css";
export default class Test extends Component {
  componentDidMount = () => {
    this.props.GetNew();
  };
  render() {
    console.log(this.props);
    return (
      <div className={styles.base}>
        {this.props.UserData &&
          this.props.UserData.articles &&
          this.props.UserData.articles.map(news => {
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
