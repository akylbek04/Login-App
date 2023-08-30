import { createContext, useState } from "react";


export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {

  const [isSwitchedOff, setIsSwitchedOff] = useState(false);
  const [loggedIn, setLoggedIn] = useState({});
  const [userData, setUserData] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "johndoe@example.com",
      password: "Sunshine123",
      age: 30,
      city: "New York",
      interests: ["Travel", "Photography", "Music"],
      friendID: [2, 3, 4],
      profilePic: "https://tunezjam.com/images/Burna-Boy-ProfilePic.jpg",
      posts: [
        {
          id: 1,
          content: "Hello, Facebook!",
          timestamp: "2023-08-01 09:00:00",
          likes: ["jane_smith", "alice_johnson"],
          comments: [
            { user: "jane_smith", text: "Hi, John!" },
            { user: "alice_johnson", text: "Nice to see you here!" },
          ],
        },
      ],
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "janesmith@example.com",
      password: "CozyWinter",
      age: 28,
      city: "Los Angeles",
      interests: ["Art", "Cooking", "Hiking"],
      friendID: [1, 3],
      profilePic:
        "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
      posts: [
        {
          id: 2,
          content: "Loving this sunny day!",
          timestamp: "2023-08-02 15:30:00",
          likes: ["johndoe", "alice_johnson"],
          comments: [
            { user: "johndoe", text: "Beautiful weather!" },
            {
              user: "alice_johnson",
              text: "Agreed! Let's go for a hike soon!",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      username: "alicejohnson",
      email: "alicejohnson@example.com",
      password: "GreenApple7",
      age: 25,
      city: "San Francisco",
      interests: ["Technology", "Books", "Yoga"],
      friendID: [1, 2],
      profilePic:
        "https://e1.pxfuel.com/desktop-wallpaper/534/172/desktop-wallpaper-stylish-people-to-follow-on-instagram-instagram-girl-profile-pic-thumbnail.jpg",
      posts: [
        {
          id: 3,
          content: "Just finished reading a great book!",
          timestamp: "2023-08-03 18:45:00",
          likes: ["johndoe"],
          comments: [{ user: "johndoe", text: "Which book was it?" }],
        },
      ],
    },
    {
      id: 4,
      firstName: "David",
      lastName: "Brown",
      username: "davidbrown",
      email: "davidbrown@example.com",
      password: "BeachBreeze12",
      age: 32,
      city: "Chicago",
      interests: ["Sports", "Movies", "Gardening"],
      friendID: [1],
      profilePic:
        "https://e1.pxfuel.com/desktop-wallpaper/998/4/desktop-wallpaper-asian-boy-asian-men-thumbnail.jpg",
      posts: [
        {
          id: 4,
          content: "Go Bulls!",
          timestamp: "2023-08-04 12:15:00",
          likes: ["janesmith"],
          comments: [
            { user: "janesmith", text: "Let's watch the game together!" },
          ],
        },
      ],
    },
    {
      id: 5,
      firstName: "Emily",
      lastName: "Wilson",
      username: "emilywilson",
      email: "emilywilson@example.com",
      password: "HappyDay99",
      age: 27,
      city: "Miami",
      profilePic:
        "https://c8.alamy.com/comp/ANBC0J/beautiful-smiling-modern-young-asian-oriental-chinese-girl-semi-profile-ANBC0J.jpg",
      interests: ["Fashion", "Travel", "Dancing"],
      friendID: [],
      posts: [],
    },
  ]);

  const handleMode = () => {
    setIsSwitchedOff(!isSwitchedOff);
  };

  const args = {
    loggedIn,
    setLoggedIn,
    userData,
    isSwitchedOff, 
    setIsSwitchedOff,
    setUserData
  };

  return <MyContext.Provider value={args}>{children}</MyContext.Provider>;
};
