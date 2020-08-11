const INITIAL_STATE = {
  fresh: {
    id: "fresh",
    title: "Fresh",
    url: "/categories/fresh",
    facets: [
      { id: "fruits", name: "Fruits", active: false },
      { id: "meat", name: "Meat", active: false },
    ],
    entries: [
      {
        id: 1,
        title: "Bunana",
        description:
          "Banana description Banana descriptionBanana descriptionBanana descriptionBanana description",
        type: "fruits",
        imageUrl: "https://source.unsplash.com/300x200/?banana",
      },
      {
        id: 2,
        title: "Appapapa",
        description:
          "Appapapa description ppapapa descriptionppapapa descriptionppapapa descripti",
        type: "fruits",
        imageUrl: "https://source.unsplash.com/300x200/?apple",
      },
      {
        id: 3,
        title: "Chicken",
        description:
          "Chicken description Chicken descriptionChicken descriptionChicken descriptionChicken description",
        type: "meat",
        imageUrl: "https://source.unsplash.com/300x200/?chicken",
      },
      {
        id: 4,
        title: "Beef",
        description:
          "Beef description Beef descriptionBeef descriptionBeef descriptionBeef descriptionBeef description",
        type: "meat",
        imageUrl: "https://source.unsplash.com/300x200/?steak",
      },
      {
        id: 5,
        title: "Peaches",
        description:
          "Banana peaches Banana peaches peaches peachesdas ada sdasd description",
        type: "fruits",
        imageUrl: "https://source.unsplash.com/300x200/?peaches",
      },
      {
        id: 6,
        title: "Plums",
        description: "Plumpa plumbi plumba descriotion some stuff",
        type: "fruits",
        imageUrl: "https://source.unsplash.com/300x200/?plums",
      },
      {
        id: 7,
        title: "Pineapple",
        description:
          "Chicken description Chicken descriptionChicken descriptionChicken descriptionChicken description",
        type: "meat",
        imageUrl: "https://source.unsplash.com/300x200/?pineapple",
      },
      {
        id: 8,
        title: "Coconut",
        description:
          "Coconut description Coconut Coconut descriptionBeef descriptionBeef descriptionBeef description",
        type: "meat",
        imageUrl: "https://source.unsplash.com/300x200/?coconut",
      },
    ],
  },
  frozen: {
    id: "frozen",
    title: "Frozen",
    url: "/categories/frozen",
    facets: [
      { id: "convience", name: "Convience", active: false },
      { id: "fish", name: "Fish", active: false },
    ],
    entries: [
      {
        id: 1,
        title: "Pizza",
        description:
          "Who wants pizza Who wants pizza Who wants pizza Who wants pizza Who wants pizza",
        type: "convience",
        imageUrl: "https://source.unsplash.com/300x200/?pizza",
      },
      {
        id: 2,
        title: "Gambas",
        description:
          "Gabbambas description Gabbambas description Gabbambas description",
        type: "fish",
        imageUrl: "https://source.unsplash.com/300x200/?shrimps",
      },
      {
        id: 3,
        title: "Ice Cream",
        description:
          "I scream for icecream I scream for icecream I scream for icecream I scream for icecream",
        type: "convience",
        imageUrl: "https://source.unsplash.com/300x200/?icecream",
      },
      {
        id: 4,
        title: "Ice cubes",
        description:
          "You are as cold as ice You are as cold as ice You are as cold as ice",
        type: "fish",
        imageUrl: "https://source.unsplash.com/300x200/?icecubes",
      },
    ],
  },
  drinks: {
    id: "drinks",
    title: "Drinks",
    url: "/categories/drinks",
    facets: [
      { id: "soft", name: "Softdrink", active: false },
      { id: "alcohol", name: "Alcohol", active: false },
    ],
    entries: [
      {
        id: 1,
        title: "Coke",
        description:
          "Who wants Coke Who wants Coke Who wants Coke Who wants Coke Who wants Coke",
        type: "soft",
        imageUrl: "https://source.unsplash.com/300x200/?coke",
      },
      {
        id: 2,
        title: "Whiskey",
        description: "Whiskey Whiskey Whiskey Whiskey Whiskey description",
        type: "alcohol",
        imageUrl: "https://source.unsplash.com/300x200/?whiskey",
      },
      {
        id: 3,
        title: "Scotch",
        description:
          "I scream for icecream I scream for icecream I scream for icecream I scream for icecream",
        type: "alcohol",
        imageUrl: "https://source.unsplash.com/300x200/?scotch",
      },
      {
        id: 4,
        title: "Beer",
        description: "To beer or not to beer! Beer beer! I root for Beer!",
        type: "alcohol",
        imageUrl: "https://source.unsplash.com/300x200/?beer",
      },
    ],
  },
};

const setVisibilityFilter = (state, action) => {
  const category = state[action.categoryId];
  const facets = category.facets.map((facet) =>
    facet.id === action.facet.id ? { ...facet, active: !facet.active } : facet
  );
  return {
    ...state,
    [action.categoryId]: {
      ...category,
      facets: [...facets],
    },
  };
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      console.log("VISIBILITY FILTER");
      return setVisibilityFilter(state, action);
    default:
      return state;
  }
};

export default categoryReducer;
