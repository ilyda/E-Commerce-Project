import { assets } from "../assets/assets";


export const TeamHeroSection = () => {
  return (
<section class="pt-16 pb-20">
  <div class="px-6 text-center max-w-4xl mx-auto">
    <p class="text-sm tracking-widest uppercase">
      What We Do
    </p>

    <h1 class="text-4xl md:text-5xl font-bold text-[#252B42] mt-4">
      Innovation tailored for you
    </h1>

    <p class="text-sm  mt-4">
      Home <span class="mx-2">›</span> Team
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
    <div class="w-full">
      <img 
       src={assets.hero1}
        class="w-full h-full object-cover"
      />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <img src={assets.hero2} class="w-full h-full object-cover" />
      <img src={assets.hero3} class="w-full h-full object-cover" />
      <img src={assets.hero4} class="w-full h-full object-cover" />
      <img src={assets.hero5} class="w-full h-full object-cover" />
    </div>

  </div>
</section>

  );
};
