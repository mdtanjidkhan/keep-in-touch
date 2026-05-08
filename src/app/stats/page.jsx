"use client"
import { FriendContext } from "@/components/FriendsProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";



const StatsPags = () => {
    const { friends, callCount, textCount, videoCount, } = useContext(FriendContext);
    console.log(friends, 'piCharts');
    const data = [
        { name: 'Call ', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },

    ];


    return (
        <div className=" w-11/12 mx-auto mb-10">
            <div className="">
                <div>
                    <h2 className="font-bold md:text-3xl p-4">Friendship Analytics</h2>
                </div>
                <div className=" bg-base-50 p-4">
                    <span className="font-medium text-xl text-black">By Interaction Type:</span>
                    {
                        friends.length === 0 ? <div>

                            <div className=" bg-white w-full rounded-2xl shadow-md flex justify-center items-center p-10 mt-2">

                                <p className="font-bold text-gray-400">Not A Found </p>
                            </div>
                        </div> :
                            <>
                                <div className="mt-3 flex flex-col justify-center items-center">
                                    <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                        <Pie
                                            data={data}
                                            innerRadius="80%"
                                            outerRadius="100%"
                                            // Corner radius is the rounded edge of each pie slice
                                            cornerRadius="50%"
                                            fill="#8884d8"
                                            // padding angle is the gap between each pie slice
                                            paddingAngle={5}
                                            dataKey="value"
                                            isAnimationActive={true}
                                        />
                                        {/* <RechartsDevtools /> */}
                                        <Legend></Legend>
                                        <Tooltip></Tooltip>
                                    </PieChart>

                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default StatsPags;