import FriendsCard from "@/components/FriendsCard";
import friends from "../../public/data.json";

 export default function Home(){
    // const res = await fetch("http://localhost:3000/data.json");
    // const friends = await res.json();
    console.log(friends);
  return (
    <div className=" bg-base-200 min-h-screen">
      <div className="text-center mt-10 space-y-4">
        <h1 className="font-bold md:text-[48px] text-[#1F2937]">Friends to keep close in your life</h1>
        <p className="text-[#64748B] font-medium">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
          relationships that matter most.</p>
        <button className="btn bg-[#244D3F] text-white font-bold">Add a Friend</button>
      </div>

      {/* stats Card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-4 pt-7">
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center space-y-3 ">
          <span className="font-bold text-xl">{friends.length}</span>
          <p className="font-medium text-[#64748B]">Total Friends</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center space-y-3 ">
          <span className="font-bold text-xl">{friends.filter(f => f.status === "on-track").length}</span>
          <p className="font-medium text-[#64748B]"> On Track</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center space-y-3 ">
          <span className="font-bold text-xl">6</span>
          <p className="font-medium text-[#64748B]">Need Attention</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center space-y-3 ">
          <span className="font-bold text-xl">12</span>
          <p className="font-medium text-[#64748B]">Interactions This Month</p>
        </div>

      </div>
      <hr className="w-11/12 mx-auto text-gray-400 mt-10"></hr>
      {/*  */}
      <div className="w-11/12 mx-auto mt-10">
        <h2 className="font-bold text-xl">Your Friends</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-7 ">
          {
            friends.map(friend => (
              <FriendsCard key={friend.id} friend={friend} />
            ))
          }
        </div>

      </div>



    </div>
  );
}
 
