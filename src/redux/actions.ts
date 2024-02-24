export const addUser = (user: any) => ({
  type: "ADD_USER",
  payload: user,
});

export const deleteUser = (userId: number) => ({
  type: "DELETE_USER",
  payload: userId,
});

export const updateUser = (user: any) => ({
  type: "UPDATE_USER",
  payload: user,
});
