import Hero from "./components/Hero";
import FurnituresCollection from "./components/FurnituresCollection";
import Rooms from "./components/Rooms";
import BestSellers from "./components/BestSellers";
import Trending from "./components/Trending";
import NewProduct from "./components/NewProduct";
import BestSofa from "./components/BestSofa";
import WardRobe from "./components/WardRobe";
import PerfectDining from "./components/PerfectDining";
import BuyerTrust from "./components/BuyerTrust";
import Services from "./components/Services";
import Subscription from "./components/Subscription";

export default function Home() {
  return (
    <main>
      <Hero />
      <FurnituresCollection />
      <Rooms />
      <BestSellers />
      <Trending />
      <NewProduct />
      <BestSofa />
      <WardRobe />
      <PerfectDining />
      <BuyerTrust />
      <Services />
      <Subscription />
    </main>
  );
}
