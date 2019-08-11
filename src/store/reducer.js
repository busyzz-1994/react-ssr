const defaultState = {
  name: 'qzz',
  list: [],
  langList: [],
};

export default (state = defaultState, action) => {
  let type = action.type;
  switch (type) {
    case 'change':
      return {
        name: 'age',
      };
    case 'add':
      return {
        ...state,
        list: [...state.list, action.value],
      };
    case 'setList':
      return {
        ...state,
        list: action.value,
      };
    case 'setLangList':
      return {
        ...state,
        langList: action.value,
      };
    default:
      return state;
  }
};
