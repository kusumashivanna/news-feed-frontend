import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewsFeed from "../component/NewsFeed.js";
import { getNewsFeed} from "../action/NewsFeedAction.js";

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => {
      dispatch(getNewsFeed());
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
