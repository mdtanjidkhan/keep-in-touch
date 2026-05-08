'use client';
import { FriendContext } from "@/components/FriendsProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CiVideoOn } from "react-icons/ci";
import { FiArchive, FiDelete } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import { MdDelete, MdTextsms } from "react-icons/md";

// dynamic status colors
const statusclors = {
  "overdue": "bg-red-500",
  "on-track": "bg-[#244D3F]",
  "almost due": "bg-yellow-500"
}
const FriendDetails = ({ friend }) => {
  const { handleCall, handleText,handleVideo } = useContext(FriendContext);
  const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;

  const action = {
    call: "https://i.ibb.co.com/Gv59NRcy/call.png",
    text: "https://i.ibb.co.com/mVckbCsV/text.png",
    video: "https://i.ibb.co.com/QvRCSBsY/video.png"
  };
  return (

    <div className="bg-base-200 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-4 lg::w-7xl mx-auto p-8 ">
        <div className="left">
          <div className="bg-white p-8 rounded-md shadow-md  flex flex-col items-center justify-center hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer ">
            <Image
              src={picture}
              alt={name}
              width={50}
              height={50}>

            </Image>

            <h3 className="font-bold text-lg mt-2">{name}</h3>
            <span className="text-gray-500"> {days_since_contact}d ago</span>

            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#CBFADB] text-[#244D3F] px-2 py-1 rounded-full mt-2 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href={`/${friend.id}`}>
              <div className={`text-white px-3 py-1 rounded-full text-sm mt-3 ${statusclors[status]}`}>
                {status}
              </div>
            </Link>

            <p className="text-gray-400 font-medium text-xs mt-2">{bio}</p>
            <span className="text-gray-400 font-medium mt-2">Email: {email}</span>

          </div>
          <div className="w-full mt-5">
            <p className="px-4 py-2 bg-white rounded-md shadow-md flex  justify-center items-center gap-1 font-bold "><HiOutlineBellSnooze></HiOutlineBellSnooze> Snooze 2 weeks</p>
            <p className="px-4 py-2 bg-white rounded-md shadow-md flex  justify-center items-center gap-1 mt-3 font-bold"><FiArchive></FiArchive> Archive</p>
            <p className="px-4 py-2 bg-white rounded-md shadow-md flex  justify-center items-center gap-1 mt-3 text-red-500 font-bold"> <MdDelete></MdDelete>Delete</p>
          </div>
        </div>
        {/* Days Since Contact, Goal (Days),Next Due section */}
        <div className="">
          <div className="grid md:grid-cols-3 gap-10 ">
            <div className="bg-white rounded-md p-10 shadow-md  ">
              <div className="flex flex-col justify-center items-center hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer">
                <p className="font-bold"><strong>{days_since_contact}</strong></p>
                <h4 className="text-gray-400 font-medium">Days Since Contact</h4>
              </div>
            </div>
            <div className="bg-white  rounded-md shadow-md p-10  flex flex-col justify-center items-center hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer">
              <p className="font-bold"><strong>{goal}</strong></p>
              <h4 className="text-gray-400 font-medium">Goal (Days)</h4>
            </div>
            <div className="bg-white rounded-md p-10 shadow-md flex flex-col justify-center items-center hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer">
              <p className="font-bold"><strong>{next_due_date}</strong></p>
              <h4 className="text-gray-400 font-medium">Next Due</h4>
            </div>

          </div>
          {/* Relationship Goal card */}
          <div className="w-full p-8 bg-white rounded-2xl shadow-md mt-3  hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer">
            <div className="flex justify-between">
              <p className="font-medium text-xl">Relationship Goal</p>
              <h4 className="px-3 py-2 font-medium bg-base-200 rounded-md shadow-md">Edit</h4>
            </div>
            <p className="font-bold"><small className="text-gray-400 font-medium">Connect every</small> {days_since_contact} days</p>

          </div>
          {/* Call Text Video section */}
          <div className="bg-white w-full p-4 mt-3 rounded-2xl shadow-sm">
            <h3>Quick Check-In</h3>
            {/*  */}
            <div className="grid md:grid-cols-3 gap-3 p-2 ">
              <div className="bg-base-200 p-4 rounded-md shadow-md hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer">
                <div onClick={() => handleCall(friend, action.call)} className="flex flex-col justify-center items-center ">
                  {/*  */}
                  <p className="font-bold text-[#1F2937]"><LuPhoneCall></LuPhoneCall> Call</p>
                </div>
              </div>
              <div onClick={() => handleText(friend, action.text)} className="bg-base-200 p-4 flex flex-col justify-center items-center rounded-md shadow-md hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer">
                <p className="font-bold text-[#1F2937]"><MdTextsms></MdTextsms> Text</p>
              </div>
              <div onClick={() => handleVideo(friend, action.video)} className="bg-base-200 p-4 flex flex-col justify-center items-center rounded-md shadow-md hover:drop-shadow-lg transition-all duration-400 hover:translate-y-2 cursor-pointer">
                <p className="font-bold text-[#1F2937]"><CiVideoOn></CiVideoOn>Video</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
};

export default FriendDetails;