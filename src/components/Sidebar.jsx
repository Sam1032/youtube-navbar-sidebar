import React from 'react';
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";

const Sidebar = ({ showSidebar }) => {
  const items = [
    { link: home, data: "Home" },
    { link: game_icon, data: "Gaming" },
    { link: automobiles, data: "Automobiles" },
    { link: sports, data: "Sports" },
    { link: entertainment, data: "Entertainment" },
    { link: tech, data: "Technology" },
    { link: music, data: "Music" },
    { link: blogs, data: "Blogs" },
    { link: news, data: "News" },
  ];

  const subscribed = [
    { link: jack, name: "Jack" },
    { link: simon, name: "Simon" },
    { link: tom, name: "Tom" },
    { link: megan, name: "Megan" },
  ];

  return (
    <div
      className={`${
        showSidebar ? "w-[5%]" : "w-[15%]"
      } h-screen flex flex-col gap-5 pl-3 pt-4 text-gray-500`}
    >
      <div>
        {items.map(({ link, data }) => (
          <div
            key={data}
            className="flex items-center gap-3 py-2 cursor-pointer px-2"
          >
            <img src={link} alt={data} className="w-6 h-6" />
            {!showSidebar && <p className="text-sm">{data}</p>}
          </div>
        ))}
      </div>

      <hr className="border-gray-300" />

      {!showSidebar && (
          <p className="text-red-500 font-semibold mb-2 px-2">Subscribed</p>
           )}
          {subscribed.map(({ link, name }) => (
            <div
              key={name}
              className="flex items-center gap-3 cursor-pointer px-2 transition"
            >
              <img src={link} alt={name} className="w-8 h-8 rounded-full" />
            {!showSidebar &&  <p className="text-sm">{name}</p>} 
            </div>
          ))}
     
    </div>
  );
};

export default Sidebar;
