
import  { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [priceValue, setPriceValue] = useState(30);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (destination.trim() !== "" && date.trim() !== "") {
      setIsLoading(true);
      // Simulate a delay to demonstrate loading state
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      // Display toast alert if fields are not filled
      toast.error("Please fill in all the required fields.");
    }
  };

  return (
    <>

    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
              onClick={handleSearch}
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? (
                <FaSpinner className="animate-spin h-5 w-5" />
              ) : (
                "Search Now"
              )}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;

