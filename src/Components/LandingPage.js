import React from "react";
import {useHistory} from "react-router-dom";
import SideBar from "./SideBar";
import Content from "./Content";
import Newsletter from "./Newsletter";

const HomePage = ({}) => {
    const history = useHistory()


    return (
<div>
    <div>
        <div className="bg-black dark:bg-gray-800 overflow-hidden relative  ">

            <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 ">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">

                    <span className="block text-indigo-500">
                How to save those extra bucks while shopping
            </span>
                </h2>
                <p className="text-xl mt-4 text-gray-400">
                  Save more then 50% with these habits!
                </p>
            </div>
            <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" className="absolute h-full w-1/4 hidden lg:block right-0 border-l-2 border-opacity-25 top-0"/>
        </div>
    </div>


    <SideBar/>


</div>

    );
};

export default HomePage;
