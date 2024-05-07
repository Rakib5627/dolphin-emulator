import image from "../../../assets/imagee.png"

const Banner = () => {
    return (
        <div className="flex bg-[#001935] text-white">
            <div className="mx-6 w-1/2">
                <p className=" text-2xl my-5">Enjoy the best emulators of all times</p>
                <h3 className="text-6xl font-bold">Welcome to <br /> Dolphin Emulator</h3>
                <p className="text-lg my-5">Dolphin is a open source platform project which means it is available on all kind of hardware more recent versions only support 64-bit Windows, Mac OS 10, Linux, and Android operating system</p>
                <button className="px-5 py-2 bg-violet-500 rounded-md my-4">
                    Download Now
                </button>

            </div>
            <div className="w-1/2">
              <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;