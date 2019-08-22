import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewsFeed from "../component/NewsFeed.js";
import { getNews } from "../action/NewsFeedAction.js";

const mapDispatchToProps = dispatch => {
  return {
    getNew: () => {
      dispatch(getNews());
    }
  };
};
const mapStateToProps = state => {
  return {
    userData: state.newsData
  };
};

const NewsFeedConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewsFeed)
);
export default NewsFeedConatiner;
