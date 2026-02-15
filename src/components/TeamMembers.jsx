import { Facebook, Instagram, Twitter } from "lucide-react";
import { assets } from "../assets/assets";

const teamMembers = [
  { id: 1, image: assets.team_user1 },
  { id: 2, image: assets.team_user2},
  { id: 3, image: assets.team_user3 },
  { id: 4, image: assets.team_user4 },
  { id: 5, image: assets.team_user5 },
  { id: 6, image: assets.team_user6 },
  { id: 7, image: assets.team_user7 },
  { id: 8, image: assets.team_user8},
  { id: 9, image: assets.team_user9},
];

export const TeamMembers = () => {
  return (
   <section className=" py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">

              <img
                src={member.image}
                alt=""
                className="w-full h-[300px] object-cover"
              />

              <h3 className="mt-6 font-semibold text-[#252B42]">
                Username
              </h3>

              <p className="text-gray-500 text-sm">
                Profession
              </p>

              <div className="flex gap-4 mt-4 text-[#23A6F0]">
                <Facebook size={18} />
                <Instagram size={18} />
                <Twitter size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
