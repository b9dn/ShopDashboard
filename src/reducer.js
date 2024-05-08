export const initialState = {
  opinion: [
    {
      name: "adam",
      comment: "This app is ok",
      rating: 4,
    },
    {
      name: "adamEx",
      comment: "",
      rating: 3.5,
    },
    {
      name: "JohnnyDone",
      comment: "Could have more options",
      rating: 3,
    },
    {
      name: "Nope",
      comment: "Awesome!!!!!!!",
      rating: 5,
    },
    {
      name: "Hope",
      comment:
        "Jest super !! ma wiele opcji, zrozumiane działanie i o wiele wiecej. Wczesniej korzystalem z konkurencji ale nie na dlugo",
      rating: 5,
    },
  ],
  offer: [
    {
      name: "Piłka",
      link: "https://img.freepik.com/free-photo/baseball-ball-white_144627-15758.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=sph",
      valueOne: 651,
      valueTwo: 3201,
    },
    {
      name: "Krzesło",
      link: "https://sanyang.com.ph/wp-content/uploads/2022/04/300127-W-3.jpg",
      valueOne: 563,
      valueTwo: 2708,
    },
    {
      name: "Słuchawki",
      link: "https://johnlewis.scene7.com/is/image/JohnLewis/headphones-sony-topbanner-gb-070623",
      valueOne: 431,
      valueTwo: 2401,
    },
    {
      name: "Pióro",
      link: "https://www.montblanc.com/variants/images/22527730565448096/A/w2500.jpg",
      valueOne: 403,
      valueTwo: 2001,
    },
    {
      name: "Ładowarka",
      link: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0H3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692901449464",
      valueOne: 394,
      valueTwo: 1912,
    },
  ],
  quality: {
    averageQuality: 75,
    averageMark: "dobry",
    worstCategories: [
      {
        name: "Rozwój produktów",
        value: 45,
      },
      {
        name: "Strategie cenowe",
        value: 39,
      },
      {
        name: "Zarządzanie zespołem",
        value: 23,
      },
    ],
  },
  user: {
    username: "admin",
    connected: ["adek", "Janosz", "Mirek211", "admin"],
  },
};
export function Reducer(state, action) {
  if (action?.type === "leastBought") {
    return {
      ...state,
      offer: [
        {
          name: "Zeszyt",
          link: "https://www.bigbasket.com/media/uploads/p/l/40132691_1-cellpage-notebook-a5-size-interleaf-brown-soft-cover.jpg",
          valueOne: 10,
          valueTwo: 345,
        },
        {
          name: "Butelka na wodę",
          link: "https://pebel.in/cdn/shop/products/IMG_0762copy_1100x.jpg?v=1701780276",
          valueOne: 12,
          valueTwo: 321,
        },
        {
          name: "Słownik",
          link: "https://www.collinsdictionary.com/images/full/dictionary_168552845.jpg",
          valueOne: 25,
          valueTwo: 301,
        },
        {
          name: "Zapalniczka",
          link: "https://www.areyouami.com/cdn/shop/products/are-you-am-i_custom-lighter-case_2000x.jpg?v=1515542414",
          valueOne: 31,
          valueTwo: 300,
        },
        {
          name: "Pierścień",
          link: "https://www.meritomasa.com/7214-thickbox_default/one-ring-of-the-lord-of-the-rings.jpg",
          valueOne: 42,
          valueTwo: 299,
        },
      ],
    };
  }
  if (action?.type === "mostBought") {
    return {
      ...state,
      offer: [
        {
          name: "Piłka",
          link: "https://img.freepik.com/free-photo/baseball-ball-white_144627-15758.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=sph",
          valueOne: 651,
          valueTwo: 3201,
        },
        {
          name: "Krzesło",
          link: "https://sanyang.com.ph/wp-content/uploads/2022/04/300127-W-3.jpg",
          valueOne: 563,
          valueTwo: 2708,
        },
        {
          name: "Słuchawki",
          link: "https://johnlewis.scene7.com/is/image/JohnLewis/headphones-sony-topbanner-gb-070623",
          valueOne: 431,
          valueTwo: 2401,
        },
        {
          name: "Pióro",
          link: "https://www.montblanc.com/variants/images/22527730565448096/A/w2500.jpg",
          valueOne: 403,
          valueTwo: 2501,
        },
        {
          name: "Ładowarka",
          link: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0H3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692901449464",
          valueOne: 394,
          valueTwo: 2701,
        },
      ],
    };
  }
  if (action?.type === "allOpinion") {
    return {
      ...state,
      opinion: [
        {
          name: "adam",
          comment: "This app is ok",
          rating: 4,
        },
        {
          name: "adamEx",
          comment: "",
          rating: 3.5,
        },
        {
          name: "JohnnyDone",
          comment: "Could have more options",
          rating: 3,
        },
        {
          name: "Nope",
          comment: "Awesome!!!!!!!",
          rating: 5,
        },
        {
          name: "Hope",
          comment:
            "Jest super !! ma wiele opcji, zrozumiane działanie i o wiele wiecej. Wczesniej korzystalem z konkurencji ale nie na dlugo",
          rating: 5,
        },
      ],
    };
  }
  if (action?.type === "PositiveOpinion") {
    return {
      ...state,
      opinion: [
        {
          name: "Nope",
          comment: "Awesome!!!!!!!",
          rating: 5,
        },
        {
          name: "Hope",
          comment:
            "Jest super !! ma wiele opcji, zrozumiane działanie i o wiele wiecej. Wczesniej korzystalem z konkurencji ale nie na dlugo",
          rating: 5,
        },
        {
          name: "Hello World",
          comment: "",
          rating: 5,
        },
        {
          name: "Nope",
          comment: "Jest wspaniałe",
          rating: 5,
        },
        {
          name: "Nope",
          comment: "",
          rating: 4.5,
        },
      ],
    };
  }
  if (action?.type === "NegativeOpinion") {
    return {
      ...state,
      opinion: [
        {
          name: "TrashTalker",
          comment: "This is Trash",
          rating: 0,
        },
        {
          name: "Userer",
          comment: "Strona sklepu mocno zacina się dla windows xp",
          rating: 0,
        },
        {
          name: "XYZ",
          comment: "",
          rating: 0,
        },
        {
          name: "Pileczka",
          comment: "Ostatnia aktualizacja zepsóła wszystko",
          rating: 0,
        },
        {
          name: "Pomidorek",
          comment: "Przysyłka towaru trwa wieki",
          rating: 0.5,
        },
      ],
    };
  }
  if (action?.type === "login") {
    return {
      ...state,
      user: {
        username: action.payload,
        connected: ["adek", "Janosz", "Mirek211", "admin"],
      },
    };
  }
  if (action?.type === "changeUsername") {
    return {
      ...state,
      user: {
        ...state.user,
        username: action.payload,
      },
    };
  }
  if (action?.type === "logOut") {
    return {
      ...state,
      user: {
        username: "",
        connected: [],
      },
    };
  }
  return state;
}
