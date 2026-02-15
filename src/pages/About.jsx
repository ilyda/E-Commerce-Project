
import { assets } from "../assets/assets";
import Brands from "../components/Brands";
import ContactSection from "../components/ContactSection";
import { Facebook, Instagram, Twitter ,Contact} from "lucide-react";
export default function About() {
  const teamMembers = [
  {
    id: 1,
    name: "Username",
    profession: "Profession",
     image: assets.team_user1,
  },
  {
    id: 2,
    name: "Username",
    profession: "Profession",
    image: assets.team_user2,
  },
  {
    id: 3,
    name: "Username",
    profession: "Profession",
      image: assets.team_user3,
  },
];
  return (
    <div className="w-full bg-white">
     <section className="relative w-full overflow-hidden mb-[50px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 min-h-[634px]">
          <div className="flex flex-col justify-center py-20 text-center md:text-left justify-evenly md:max-w-[300px] ">
             <p className="text-sm text-gray-400 uppercase mb-2">About Company</p>
          <h1 className="text-4xl font-bold mb-6">
            ABOUT US
          </h1>
          <p className="text-gray-500 mb-8">
We know how large objects will act, 
but things on a small scale          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Get Quote Now
          </button>
          </div>
  
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[45%]">
          <img
            src={assets.none}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
 <section class="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col gap-16 mt-[50px]">
  <div class="flex flex-col gap-6">
    <div>
      <p class="text-red-500 font-medium mb-2">Problems trying</p>
      <h3 class="text-2xl font-bold">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </h3>
    </div>

    <p class="text-gray-500">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </p>
  </div>

  <div class="flex flex-col sm:flex-row flex-wrap gap-8  justify-between">
    <div class="flex-1">
      <h4 class="text-5xl font-bold">15K</h4>
    </div>

    <div class="flex-1">
      <h4 class="text-5xl font-bold">150K</h4>
    </div>

    <div class="flex-1">
      <h4 class="text-5xl font-bold">15</h4>
    </div>

    <div class="flex-1">
      <h4 class="text-5xl font-bold">100+</h4>
    </div>
  </div>

</section>


       <section className=" flex justify-center my-24">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Video"
            className="w-full h-80 object-cover w-[987px] h-[540px]"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl">
              ▶
            </div>
          </button>
        </div>
      </section>
       <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
          Meet Our Team
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              
              <div className="w-full max-w-[350px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[350px] object-cover"
                />
              </div>

              <h3 className="mt-6 font-semibold text-[#252B42]">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {member.profession}
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
     <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
          Big Companies Are Here
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics
        </p>

       <Brands></Brands>
      </div>
    </section>
  <ContactSection></ContactSection>
    </div>
  );
}
