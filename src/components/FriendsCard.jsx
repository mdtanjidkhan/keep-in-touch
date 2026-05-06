import Image from "next/image";
import Link from "next/link";

const statusclors = {
    "overdue": "bg-red-500",
    "on-track": "bg-[#244D3F]",
    "almost due": "bg-yellow-500"
}

const FriendsCard = ({ friend }) => {
    return (
        <div className="bg-white p-8 rounded-md shadow-md mt-5 flex flex-col items-center justify-center">
            <Image
                src={friend.picture}
                alt={friend.name}
                width={50}
                height={50}>

            </Image>

            <h3 className="font-bold text-lg mt-2">{friend.name}</h3>
            <span className="text-gray-500"> {friend.days_since_contact}d ago</span>

            <div className="flex gap-2 flex-wrap">
                {friend.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-[#CBFADB] text-[#244D3F] px-2 py-1 rounded-full mt-2 text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

           <Link href={`/${friend.id}`}>
            <div className={`text-white px-3 py-1 rounded-full text-sm mt-3 ${statusclors[friend.status]}`}>
                {friend.status}
            </div>
           </Link>
        </div>

    );
};

export default FriendsCard;