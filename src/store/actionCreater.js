export function changeName() {
  return {
    type: 'change',
  };
}
export function addList(value) {
  return {
    type: 'add',
    value,
  };
}
export function setList() {
  return (dispatch, getState, request) => {
    return request.get('/newsList').then(res => {
      let list = res.data.data;
      dispatch({
        type: 'setList',
        value: list,
      });
    });
  };
}
export function setLangList() {
  return (dispatch, getState, request) => {
    return request.get('/langList-').then(res => {
      let list = res.data.data;
      dispatch({
        type: 'setLangList',
        value: list,
      });
    });
  };
}
