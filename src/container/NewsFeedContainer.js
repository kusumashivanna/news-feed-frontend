import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewsFeed from "../component/NewsFeed.js";
import { getNewsFeed} from "../action/newsFeedAction.js";

const mapDispatchToProps = dispatch => {
  return {
    getNewsFeed: () => {
      dispatch(getNewsFeed());
    }
  };
};
const mapStateToProps = state => {
  return {
    newsFeed: state.newsData
  };
};

const NewsFeedConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewsFeed)
);
export default NewsFeedConatiner;
