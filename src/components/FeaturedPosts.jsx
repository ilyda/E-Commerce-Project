import { assets } from "../assets/assets";

const posts = [
  { id: 1, image: assets.featured2, title: "Loudest à la Madison #1 (L'integral)" },
  { id: 2, image: assets.featured, title: "Loudest à la Madison #1 (L'integral)" },
  { id: 3, image: assets.featured1, title: "Loudest à la Madison #1 (L'integral)" },
];

export default function FeaturedPosts() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs md:text-sm text-[#23A6F0] font-semibold">
            Practice Advice
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-[#252B42]">
            Featured Posts
          </h2>
          <p className="text-[#737373] mt-3 md:mt-4 max-w-xl mx-auto text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="text-xs text-[#737373] mb-2 md:mb-3 space-x-2">
                  <span className="text-[#23A6F0]">Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-[#252B42] mb-2 md:mb-3">
                  {post.title}
                </h3>

                <p className="text-sm text-[#737373] mb-4 md:mb-5 leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It’s only
                  a keystroke away.
                </p>

                <div className="flex items-center justify-between text-xs text-[#737373] mb-3 md:mb-4">
                  <span>22 April 2021</span>
                  <span>10 comments</span>
                </div>

                <button className="text-[#23A6F0] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
