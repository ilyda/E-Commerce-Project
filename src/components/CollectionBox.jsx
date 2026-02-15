import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const CollectionBox = () => {

    return (
        <div className="bg-[#FAFAFA] py-12">
            <div className="text-center mb-10">
                <Title
                    text1="EDITOR’S PICK"
                    text2="Problems trying to resolve the conflict between"
                />
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

                <div className="md:col-span-6">
                    <Link to="/women"><img src={assets.collection_1} className="w-full h-full object-cover" /></Link>
                </div>

                <div className="md:col-span-3">
                    <Link to="/women"><img src={assets.collection_2} className="w-full h-full object-cover" /></Link>
                </div>

                <div className="md:col-span-3 flex flex-col gap-4">
                    <Link to="/women"><img src={assets.collection_3} className="w-full h-full object-cover" /></Link>
                    <Link to="/women"><img src={assets.collection_4} className="w-full h-full object-cover" /></Link>
                </div>

            </div>

        </div>
    );
};

export default CollectionBox;
