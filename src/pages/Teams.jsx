import { Facebook, Instagram, Twitter ,Linkedin} from "lucide-react";
import { TeamMembers } from "../components/TeamMembers";
import { TeamHeroSection } from "../components/TeamHeroSection";

const Teams = () => {
  return (
    <>
       <TeamHeroSection></TeamHeroSection>
    <TeamMembers></TeamMembers>
    <section className="py-24 ">
      <div className="max-w-2xl mx-auto text-center px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
          Start your 14 days free trial
        </h2>

        <p className="text-gray-500 mt-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor
          do met sent. RELIT official consequat.
        </p>

        <button className="mt-8 bg-[#23A6F0] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition">
          Try it free now
        </button>

        <div className="flex justify-center gap-6 mt-8 text-[#23A6F0]">
          <Twitter size={20} />
          <Facebook size={20} />
          <Instagram size={20} />
          <Linkedin size={20} />
        </div>

      </div>
    </section>
 
 
    </>
  )
}

export default Teams

