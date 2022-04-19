import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
} from "firebase/firestore";
import InputOption from "./InputOption";
import { database } from "./Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const sendPost = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(database, "posts"), {
        name: "Dipesh Kuwarbi",
        description: "this is the test",
        message: input,
        photo: "",
        // timestamp: db.FieldValue.serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(async () => {
    let id, data;
    let emparray = [];
    const querySnapshot = await getDocs(collection(database, "posts"));
    querySnapshot.forEach((doc) => {
      id = doc.id;
      data = doc.data();
      console.log("before", data);
      emparray.push(data);
    });
    setPosts(emparray);
  }, [posts]);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}></input>
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {console.log(posts)}
      {posts.map((id) => (
        <Post
          key={id.id}
          name={id.name}
          description={id.description}
          message={id.message}
          photoURL={id.photo}
        />
      ))}
    </div>
  );
}

export default Feed;
