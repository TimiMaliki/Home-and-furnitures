import React from 'react'
import Coin from "../../../public/coin.jpg";
import Image from "next/image";
import Subscription from '@/app/components/Subscription';

const blog = () => {
  return (
    <div className=''>
      <div className=''>
      <div className="grid place-content-center">
      <Image src={Coin} width={"1000px"} height={300} />
      </div>
     
    <svg className='-mt-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
<path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
<path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
<path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
</svg>
</div>

<div className='card  p-24 grid place-content-center mb-16'>
  <div className='w-96 h-80 b rounded-lg border  relative'>
  <Image src={Coin}  className='absolute w-96 h-80  rounded-lg border-blue-900' />
  </div>
</div>


<div className='p-28'>

<p className='mb-4'>
Vento Furniture was established in 2002 in Turkey and decided to carry its facilities to Nigeria and Canada.</p>

<p className='mb-4'>
Vento targeted the best quality products to its customers. Vento Furniture always presented the new modern designs developed by its customers taste and always brought the best.
</p>

<p className='mb-4'>
Our attention to detail ensures that when you purchase a piece of furniture from Vento Furniture, it will provide superior value and comfort. Our products are designed with safety in mind as well, creating pieces that are long-lasting and safe for all family members. We strive to ensure our customers enjoy their experience with us by providing the highest quality product and unbeatable customer service whenever you buy a Vento Furniture Product.
</p>

<p className='mb-4'> 
Vento Furniture got many customers within a short time because we are aware that our customers understand high quality of products very well.
</p>

<p className='mb-4'>
Our main goal is not to sell furniture, but to bring you together with comfortable, stylish and peaceful furniture.
</p>

<p className='mb-4'>With the technical support we provide after selling the furniture, we make our customers feel that we are always with them and provide support.</p>

<p className='mb-4'>
The leader of the furniture industry, Vento has been a pioneer in the industry and a brand that sets the trends since the day it was founded. It continues on its way without slowing down with the superiority of its production capacity, the importance it attaches to technology in design, and the understanding of merchandising that always prioritizes customer satisfaction.
</p>

<p className='mb-4'>
Acting with the awareness of the responsibility of being a leading company in every field in the sector, Vento produces collections at the most affordable and accessible prices for customer needs while realizing designs beyond the age with technology and innovation. Vento Furniture offers you hundreds of products from sitting groups to dining rooms, from bedrooms to children's and teenage rooms, from beds, bases to garden furniture.
</p>

<p className='mb-4'>
Among the goals of the brand is to keep the brand always young and dynamic, as well as the turnover achieved through sustainable innovative projects.
Among the goals of the brand is to keep the brand always young and dynamic, as well as the turnover achieved through sustainable innovative projects.
</p>

<p>
Vento Furniture also continues its efforts to increase its market share with the number of specialized stores implemented and to reach unreachable consumer profiles.
</p>

</div>

<div className='border border-gray-200  w-full  mb-2'></div>

<div className='flex justify-center gap-4 text-xl p-20'>
  <h2>Socials</h2>
  <h2>Socials</h2>
  <h2>Socials</h2>
  <h2>Socials</h2>
</div>


<div className='card  p-24 grid place-content-center mb-16'>
  <div className='rounded-lg  border border-blue-400'>
  <Image src={Coin} width={600} height={300} className='rounded-lg' />
  </div>
</div>

<div className='p-20'>
  <Subscription/>
</div>

    </div>
  )
}

export default blog
