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

function displayObjects() {
  for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
  }
}
displayObjects();
