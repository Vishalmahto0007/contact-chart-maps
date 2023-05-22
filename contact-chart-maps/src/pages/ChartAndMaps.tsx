import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MyMap from "../features/chartsAndMaps/MyMap";
import LineGraph from "../features/chartsAndMaps/LineGraph";
import Header from "../features/chartsAndMaps/Header";



function ChartAndMaps() {
    const [isShowMaps, setIsShowMaps] = useState(false)

    return (
        <div>
            <Navbar />
            <div className="flex">

                <Sidebar />
                <div className="flex-1 pt-16">
                    <Header setIsShowMaps={setIsShowMaps} isShowMaps={isShowMaps} />
                    {isShowMaps ? <MyMap /> : <LineGraph />
                    }
                </div>
            </div>
        </div >
    )
}


export default ChartAndMaps;