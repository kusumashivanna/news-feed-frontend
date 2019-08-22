import * as newsAction from "../action/Newsfeedaction.js";
const NewsData = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.status) {
    case newsAction.REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case newsAction.SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        newsData: action.newsdata
      });

    case newsAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        newserror: action.newserror
      });
    default:
      return state;
  }
};
export default NewsData;
