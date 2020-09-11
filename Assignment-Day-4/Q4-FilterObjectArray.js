let students = [
  {
    name: "Shubham",
    age: 18,
    country: "India",
    hobbies: [
      "Singing",
      "Writing",
      "Sketching",
      "Programming",
      "Video Conferencing",
      "Laughing Unnecesarrily",
    ],
  },
  {
    name: "Priya",
    age: 50,
    country: "India",
    hobbies: [
      "Dancing",
      "Programming",
      "Listening to music",
      "Getting Angry",
      "Chatting",
      "Drinking Coffee",
    ],
  },
  {
    name: "Stephen",
    age: 40,
    country: "USA",
    hobbies: [
      "Dancing",
      "Programming",
      "Listening to music",
      "Watching Series",
      "Guitar",
      "Reading Books",
    ],
  },
];

function ageLessThan() {
  console.log("Students with age less than 30: ");
  for (let index = 0; index < students.length; index++) {
    if (students[index].age < 30) {
      console.log(students[index]);
    }
  }
}
ageLessThan();

function selectCountry() {
  console.log("Students from India: ");
  for (let index = 0; index < students.length; index++) {
    if (students[index].country == "India") {
      console.log(students[index]);
    }
  }
}
selectCountry();
