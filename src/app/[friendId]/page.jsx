
import FriendDetails from "@/components/FriendDetails";



const friends = [
  {
    "id": 1,
    "name": "Arafat Rahman",
    "picture": "https://i.ibb.co.com/h1DPDftc/Ellipse-1.png",
    "email": "arafat.rahman@gmail.com",
    "days_since_contact": 18,
    "status": "overdue",
    "tags": ["school", "football buddy"],
    "bio": "Played football together in high school. Still supports Real Madrid.",
    "goal": 7,
    "next_due_date": "2026-05-10"
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "picture": "https://i.ibb.co.com/pjHC0RCM/Ellipse-1-1.png",
    "email": "nusrat.jahan@gmail.com",
    "days_since_contact": 5,
    "status": "on-track",
    "tags": ["university", "group study"],
    "bio": "Classmate from university. We often studied together before exams.",
    "goal": 14,
    "next_due_date": "2026-05-15"
  },
  {
    "id": 3,
    "name": "Sakib Hasan",
    "picture": "https://i.ibb.co.com/MDfgPRHv/Ellipse-1-2.png",
    "email": "sakib.hasan@yahoo.com",
    "days_since_contact": 12,
    "status": "almost due",
    "tags": ["office", "developer"],
    "bio": "Colleague from my first job. Loves JavaScript and coffee.",
    "goal": 14,
    "next_due_date": "2026-05-08"
  },
  {
    "id": 4,
    "name": "Farzana Akter",
    "picture": "https://i.ibb.co.com/s9bckjqC/Ellipse-1-3.png",
    "email": "farzana.akter@gmail.com",
    "days_since_contact": 25,
    "status": "overdue",
    "tags": ["neighbor", "childhood"],
    "bio": "Grew up in the same neighborhood. Haven’t talked in a while.",
    "goal": 10,
    "next_due_date": "2026-05-06"
  },
  {
    "id": 5,
    "name": "Imran Hossain",
    "picture": "https://i.ibb.co.com/XQJVfhK/Ellipse-1-4.png",
    "email": "imran.hossain@gmail.com",
    "days_since_contact": 9,
    "status": "almost due",
    "tags": ["gym", "fitness"],
    "bio": "Gym partner. Always pushes me to stay consistent.",
    "goal": 10,
    "next_due_date": "2026-05-09"
  },
  {
    "id": 6,
    "name": "Tanjila Islam",
    "picture": "https://i.ibb.co.com/Mygs69bB/Ellipse-1-5.png",
    "email": "tanjila.islam@gmail.com",
    "days_since_contact": 3,
    "status": "on-track",
    "tags": ["freelance", "design"],
    "bio": "Met during a freelance project. Great UI/UX designer.",
    "goal": 14,
    "next_due_date": "2026-05-18"
  },
  {
    "id": 7,
    "name": "Rafiul Karim",
    "picture": "https://i.ibb.co.com/xtsjHY91/Ellipse-1-6.png",
    "email": "rafiul.karim@gmail.com",
    "days_since_contact": 15,
    "status": "overdue",
    "tags": ["college", "close friend"],
    "bio": "One of my closest college friends. We used to travel together.",
    "goal": 7,
    "next_due_date": "2026-05-05"
  },
  {
    "id": 8,
    "name": "Mehedi Hasan",
    "picture": "https://i.ibb.co.com/wZ3MT3L1/Ellipse-1-7.png",
    "email": "mehedi.hasan@gmail.com",
    "days_since_contact": 6,
    "status": "on-track",
    "tags": ["client", "business"],
    "bio": "Worked with him on a web development project. Very professional.",
    "goal": 14,
    "next_due_date": "2026-05-16"
  },
  {
    "id": 9,
    "name": "Sharmin Sultana",
    "picture": "https://i.ibb.co.com/ZznzY49Y/Ellipse-1-8.png",
    "email": "sharmin.sultana@gmail.com",
    "days_since_contact": 20,
    "status": "overdue",
    "tags": ["family", "cousin"],
    "bio": "My cousin. We used to meet every Eid but lost regular contact.",
    "goal": 10,
    "next_due_date": "2026-05-07"
  },
  {
    "id": 10,
    "name": "Tanvir Ahmed",
    "picture": "https://i.ibb.co.com/5gP2hwSd/Ellipse-1-9.png",
    "email": "tanvir.ahmed@gmail.com",
    "days_since_contact": 11,
    "status": "almost due",
    "tags": ["startup", "co-founder"],
    "bio": "Worked together on a startup idea. Always full of energy.",
    "goal": 14,
    "next_due_date": "2026-05-08"
  }
];



const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;
  const friend = friends.find(f => f.id === parseInt(friendId));
  console.log(friendId, 'show me params');
  

  return (
       <FriendDetails  friend={friend}></FriendDetails>
  );
};

export default FriendDetailPage;