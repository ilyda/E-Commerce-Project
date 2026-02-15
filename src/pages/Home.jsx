import HomeSlider from "../components/HomeSlider";
import CollectionBox from "../components/CollectionBox";
import BestSeller from "../components/BestSeller";
import { assets } from "../assets/assets";
import HomeBanner from "../components/HomeBanner";
import FeaturedPosts from "../components/FeaturedPosts";



const heroSlider1 = [
  {
    subTitle: "SUMMER 2019",
    title: "NEW COLLECTION",
    text: "We know how large objects will act, but things on a small scale",
    img: assets.home_slider_1,
    buttonText: "SHOP NOW",
  },
    {
    subTitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    text: "We know how large objects will act, but things on a small scale",
     img: assets.home_slider_1,
    buttonText: "SHOP NOW",
  },
];
const heroSlider2 = [
  {
    subTitle: "SUMMER 2020",
  title:  "Vita Classic\nProduct",
    text: "We know how large objects will act, but things on a small scale",
     img: assets.home_slider_2,
       price:"$16.48",
    buttonText: "ADD TO CART",
  },
    {
    subTitle: "SUMMER 2020",
    title: `Vita Classic </br>Product`,
    text: "We know how large objects will act, We know how are objects will act, We know",
     img: assets.home_slider_2,
     price:"$16.48",
    buttonText: "ADD TO CART",
  },
];

const Home = () => {
  return (
    <div>
      <HomeSlider slides={heroSlider1} />
      <CollectionBox />
      <BestSeller />
      <HomeSlider slides={heroSlider2} />
      <HomeBanner/>
      <FeaturedPosts/>
    </div>
  );
};

export default Home;
