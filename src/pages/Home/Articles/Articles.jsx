import blog1 from "../../../assets/blog1.jpg";
import blog2 from "../../../assets/blog2.jpg";
import blog3 from "../../../assets/blog3.jpg";
const Articles = () => {
    return (
        <div className="bg-[#001935] py-20">
            <h3 className="text-slate-100 text-5xl font-bold text-center my-8">Featured Blogs & Articles</h3>
            <div className="flex justify-between gap-4 mx-5 text-white">
                <div className="p-4 w-1/3 border bg-slate-700">
                    <img src={blog1} alt="" />
                    <h2 className="text-xl font-bold my-2">Exploring the Dolphin Emulator</h2>
                    <p>
                        The Dolphin emulator is one of the most powerful tool for gaming enthusiasts...
                    </p>
                </div>
                <div className="p-4 w-1/3 border bg-slate-700">
                <img src={blog2} alt="" />
                    <h2 className="text-xl font-bold my-2">Unlocking the Potential of Dolphin Emulator</h2>
                    <p>
                        Dolphin emulator opens up a world of possibilities for gamers...
                    </p>
                </div>
                <div className="p-4 w-1/3 border bg-slate-700">
                <img src={blog3} alt="" />
                    <h2 className="text-xl font-bold my-2">Diving Deep into Dolphin Emulator Features</h2>
                    <p>
                        Dolphin emulator boasts an array of features that redefine gaming experiences...
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="px-5 text-white py-2 bg-violet-500 rounded-md mt-5">
                    See All
                </button>
            </div>
        </div>
    );
};

export default Articles;
