export const SUCCESS = "SUCCESS";
export const REQUEST = "REQUEST";
export const FAILURE = "FAILURE";
export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export function getNewsRequest() {
  return {
    type: GET_NEWS_REQUEST,
    status: REQUEST
  };
}

export function getNewsSuccess(data) {
  return {
    type: GET_NEWS_SUCCESS,
    status: SUCCESS,
    newsdata: data
  };
}

export function getNewsFailure(error) {
  return {
    type: GET_NEWS_FAILURE,
    status: FAILURE,
    newserror: error
  };
}

export function getNewsFeed() {
  return async dispatch => {
    dispatch(getNewsRequest());
    try {
      const query = "bitcoin";
      const fromDate = "2019-07-23";
      const sortBy = "publishedAt";
      const apiKey = "1f02327de8724a96aabfe0202a93a7c1";
      const result = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${apiKey}`
      );

      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(getNewsSuccess(resultJson));
    } catch (e) {
      dispatch(getNewsFailure(e.message));
    }
  };
}
