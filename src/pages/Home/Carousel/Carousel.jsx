import image1 from "../../../assets/images.jpg";
import image2 from "../../../assets/images_2.jpg";
import image3 from "../../../assets/images_3.jpg";
import image4 from "../../../assets/images_4.jpg"
const Carousel = () => {
    return (
        <div className="bg-[#001935] py-20">
            <div className=" flex items-center justify-between border-2 bg-slate-600 mx-32">
                <div className="">
                    <h3 className=" text-4xl font-bold ml-20 text-gray-100">Play Bigger Win Bigger</h3>
                </div>
                <div className="h-64 carousel carousel-vertical">
                    <div className="carousel-item h-full">
                        <img src={image4} className="w-96 h-72" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={image2} className="w-96 h-72" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={image3} className="w-96 h-72" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={image1} className="w-96 h-72" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;