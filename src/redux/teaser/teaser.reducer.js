const INITIAL_STATE = {
  homepage: [
    {
      id: 1,
      title: "Best teaser ever",
      imageUrl: "https://via.placeholder.com/150",
      url: "/categories/1",
    },
    {
      id: 2,
      title: "Amazing stuff here",
      imageUrl: "https://via.placeholder.com/150",
      url: "/categories/3",
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
