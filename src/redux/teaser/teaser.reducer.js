const INITIAL_STATE = {
  homepage: [
    {
      id: 1,
      title: "Healthy & fresh!",
      imageUrl: "https://source.unsplash.com/600x400/?healthy",
      url: "/categories/fresh",
    },
    {
      id: 2,
      title: "Iced & cloudy!",
      imageUrl: "https://source.unsplash.com/600x400/?cream",
      url: "/categories/frozen",
    },
    {
      id: 3,
      title: "Stay hydrated!",
      imageUrl: "https://source.unsplash.com/600x400/?drinks",
      url: "/categories/drinks",
    },
    {
      id: 4,
      title: "Simply everything!",
      imageUrl: "https://source.unsplash.com/600x400/?groceries",
      url: "/categories/",
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
