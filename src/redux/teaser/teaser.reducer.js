const INITIAL_STATE = {
  homepage: [
    {
      id: 1,
      title: "Best teaser ever",
      imageUrl: "https://via.placeholder.com/150",
      url: "/categories/fresh",
    },
    {
      id: 2,
      title: "Amazing stuff here",
      imageUrl: "https://via.placeholder.com/150",
      url: "/categories/frozen",
    },
  ],
};

const teaserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default teaserReducer;
