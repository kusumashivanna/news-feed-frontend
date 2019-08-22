import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Newsfeed from "../component/Newsfeed.js";
import { GetNews } from "../action/Newsfeedaction.js";

const mapDispatchToProps = dispatch => {
  return {
    GetNew: () => {
      dispatch(GetNews());
    }
  };
};
const mapStateToProps = state => {
  return {
    UserData: state.newsData
  };
};

const Newsfeedconatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Newsfeed)
);
export default Newsfeedconatiner;
