const getAllContacts = (state) => state.contacts.enteties;
const getFilter = (state) => state.contacts.filter;
const getloading = (state) => state.contacts.isLoading;
const getIsFetchingCurrenUser = (state) => state.auth.isFetchingCurrentUser;
const getFiltredContacts = (state) => {
  const AllContacts = getAllContacts(state);
  const Filter = getFilter(state).toLowerCase();

  const res = AllContacts.filter((item) =>
    item.name.toLowerCase().includes(Filter)
  );
  return res;
  //   return AllContacts;
};

const getToken = (state) => state.auth.token;
const getIsLogged = (state) => state.auth.isLoggedIn;

// const getContactsWithoutDeleted = (state) => {};

export default {
  getAllContacts,
  getFilter,
  getFiltredContacts,
  getloading,
  getToken,
  getIsLogged,
  getIsFetchingCurrenUser,
};
