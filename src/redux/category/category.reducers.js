const INITIAL_STATE = {
  fresh: {
    id: 1,
    title: "Some fresh food",
    entries: [
      {
        id: 1,
        title: "Bunana",
        description: "Banana description",
        type: "fruits",
      },
      {
        id: 2,
        title: "Appapapa",
        description: "Appapapa description",
        type: "fruits",
      },
      {
        id: 3,
        title: "Chicken",
        description: "Chicken description",
        type: "meat",
      },
    ],
  },
  frozen: {
    id: 2,
    title: "Some frozen goods",
    entries: [
      {
        id: 1,
        title: "Pizza",
        description: "Who wants pizza",
        type: "convience",
      },
      {
        id: 2,
        title: "Gambas",
        description: "Gabbambas description",
        type: "fish",
      },
    ],
  },
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoryReducer;
