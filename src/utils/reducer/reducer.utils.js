// export const createAction = (type, payload) => ({ type, payload });
export const createAction = (type, payload) => {
  const action = { type, payload };
  return action;
};
