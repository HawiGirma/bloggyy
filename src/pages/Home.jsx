import Landing from "../components/Landing";
import Search from "../components/Search";
import Body from "../components/Body";
import Chatbot from "../components/Chatbot";
import Post from "../components/Post";
const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-rose-300">
      <Landing />
      <Search />
      <Post />
      <Body />
      <Chatbot />
    </div>
  );
};

export default Home;
