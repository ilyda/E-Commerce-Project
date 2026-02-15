import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="font-semibold text-[#23A6F0]">CONTACT US</p>

          <h1 className="text-5xl font-bold text-[#252B42] leading-tight">
            Get in touch <br /> today!
          </h1>

          <p className="text-gray-500 max-w-md">
            We know how large objects will act,
            but things on a small scale
          </p>

          <div className="space-y-2 font-semibold text-[#252B42]">
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>

          <div className="flex gap-4 text-[#252B42]">
            <Twitter />
            <Facebook />
            <Instagram />
            <Linkedin />
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src={assets.technology}
            alt="family"
            className=" object-contain"
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto text-center py-20 px-6">
        <p className="text-sm font-semibold text-gray-500">
          VISIT OUR OFFICE
        </p>

        <h2 className="text-3xl font-bold text-[#252B42] mt-2 mb-12">
          We help small businesses with big ideas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-4 flex justify-center flex-col min-h-[403px]">
            <Phone className="mx-auto text-[#23A6F0]" size={40}/>
            <p className="text-gray-500 text-sm">
              georgia.young@example.com
            </p>
            <p className="font-semibold">Get Support</p>

            <button className="border border-[#23A6F0] text-[#23A6F0] rounded-full px-5 py-2 text-sm font-semibold">
              Submit Request
            </button>
          </div>
          <div className="bg-[#252B42] text-white p-8  shadow-md space-y-4 scale-105 min-h-[403px] flex justify-center flex-col">
            <MapPin className="mx-auto" size={40}/>
            <p className="text-gray-300 text-sm">
              georgia.young@example.com
            </p>
            <p className="font-semibold">Get Support</p>

            <button className="bg-[#23A6F0] px-5 py-2 rounded-full text-sm font-semibold">
              Submit Request
            </button>
          </div>
          <div className="bg-white p-8 shadow-sm space-y-4 flex justify-center flex-col min-h-[403px]">
            <Mail className="mx-auto text-[#23A6F0]" size={40}/>
            <p className="text-gray-500 text-sm">
              georgia.young@example.com
            </p>
            <p className="font-semibold">Get Support</p>

            <button className="border border-[#23A6F0] text-[#23A6F0] rounded-full  px-5 py-2 r text-sm font-semibold">
              Submit Request
            </button>
          </div>

        </div>
      </section>


      <section className="text-center py-24">
        <p className="text-gray-500 font-semibold mb-2">
          WE CAN’T WAIT TO MEET YOU
        </p>

        <h2 className="text-4xl font-bold text-[#252B42] mb-6">
          Let’s Talk
        </h2>

        <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold">
          Try it free now
        </button>
      </section>

    </div>
  );
};

export default Contact;
