export const data = {
  import_area: "simple bold\nnot bold\nFUCK!!!",
  template: "this text #re!aly bold#",
  phrases: {
    phrase123456: {
      based_template: "this text #re!aly bold#",
      keyword: "simple bold",
      colored: true,
      minuses: "-fear",
      length: 0,
      light: 50,
      words: [
        {
          word: "this",
          marker: false
        },
        {
          word: "text",
          marker: true
        },
        {
          word: "simple",
          marker: true
        },
        {
          word: "bold",
          marker: true
        }
      ]
    },
    phrase123457: {
      based_template: "this text #re!aly bold#",
      keyword: "not bold",
      colored: true,
      minuses: "-fear",
      length: 0,
      light: 50,
      words: [
        {
          word: "this",
          marker: false
        },
        {
          word: "text",
          marker: true
        },
        {
          word: "not",
          marker: true
        },
        {
          word: "bold",
          marker: true
        }
      ]
    },
    phrase123458: {
      based_template: "this text #re!aly bold#",
      keyword: "FUCK!!!",
      colored: false,
      minuses: "-fear",
      length: 0,
      light: 50,
      words: [
        {
          word: "this",
          marker: false
        },
        {
          word: "text",
          marker: true
        },
        {
          word: "FUCK!!!",
          marker: false
        }
      ]
    }
  },
  export_area: "",
  last_template: ""
}