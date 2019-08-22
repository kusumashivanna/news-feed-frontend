export const SUCCESS = "SUCCESS";
export const REQUEST = "REQUEST";
export const FAILURE = "FAILURE";
export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export function GetNewsRequest() {
  return {
    type: GET_NEWS_REQUEST,
    status: REQUEST
  };
}

export function GetNewsSuccess(data) {
  return {
    type: GET_NEWS_SUCCESS,
    status: SUCCESS,
    newsdata: data
  };
}

export function GetNewsFailure(error) {
  return {
    type: GET_NEWS_FAILURE,
    status: FAILURE,
    newserror: error
  };
}

export function GetNews() {
  return async dispatch => {
    dispatch(GetNewsRequest());
    try {
      const result = await fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-22&sortBy=publishedAt&apiKey=1f02327de8724a96aabfe0202a93a7c1");
      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(GetNewsSuccess(resultJson));
    } catch (e) {
      dispatch(GetNewsFailure(e.message));
    }
  };
}
