import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Cover from "../../../components/Cover/Cover";

const Home = () => {
    const image=`https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  return (
    <div>
      <Helmet>
        <title>DormDine | Home</title>
      </Helmet>
      <Banner />
      <Cover img={image}  title="MEALS BY CATEGORY"/>
    </div>
  );
};

export default Home;
