import Navbar from "../../Shared/Navbar/Navbar";
import Articles from "../Articles/Articles";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pb-[1px] bg-slate-600"></div>
            <Banner></Banner>
            <Articles></Articles>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;