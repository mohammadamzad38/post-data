import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigation();
  return (
    <div>
      <Header></Header>
      {navigate.state === "loading" ? <p>Loading......</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Home;
