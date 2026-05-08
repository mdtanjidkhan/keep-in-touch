'use client';
import { FriendContext } from "@/components/FriendsProvider";
import Image from "next/image";

const TimeLinePage = () => {

    const { friends } = useContext(FriendContext)
    console.log(friends, 'show me')
    console.log(friends[1])

    return (
        <div className="bg-base-200 p-4 h-min-screen mb-40 w-11/12 mx-auto">
            <div>
                <h2 className="text-2xl font-bold mt-5">Timeline</h2>
            </div>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Call</a></li>
                    <li><a>Text</a></li>
                    <li><a>Video</a></li>
                    <li><a>All</a></li>
                </ul>
            </div>
          
          
              <div className="">
                  {
                   friends.length === 0 ? <div className="px-5 py-3 bg-white w-full rounded-2xl shadow-md flex justify-center items-center">
                    <h2 className="text-xl font-bold p-8 text-gray-400">No calls yet!</h2>
                   </div>
                    : <>
                    {
                        friends.map((friend, i)=> <div key={i}>
                            <div className="p-8 bg-white rounded-2xl shadow-2xl mb-3 space-y-2">
                                
                                <Image width={50} height={40} src={friend.action} alt="" />
                                <h3 className="font-bold text-xl">With: {friend.name}</h3>
                                {/* <p>with:{}</p> */}
                                <p className="text-gray-400 font-medium text-xl">{new Date().toLocaleDateString('en-Bd')}</p>
                            </div>
                        </div>)
                    }
                    </>
                  }
              </div>

        </div>


    );
};

export default TimeLinePage;