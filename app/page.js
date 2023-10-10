import UpperNavbar from './components/UpperNavbar'
import Navmenu from "./components/Navmenu"
import Hero from './components/Hero'
import FurnituresCollection from './components/FurnituresCollection'
import Rooms from './components/Rooms'


export default function Home() {
  return (
   <main>
    <UpperNavbar />
    <Navmenu />
    <Hero />
    <FurnituresCollection />
    <Rooms />
   </main>
  )
}