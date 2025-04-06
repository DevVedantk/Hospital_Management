import { Heart, Menu, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import FlowingMenu from '../components/FlowingMenu';
import { Footer } from '../components/footer';
import SpotlightCard from '../components/SpotLightCard';

const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

export const Home=()=>{
  const navigate=useNavigate();

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="px-6 py-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-purple-600" />
          <span className="text-lg font-medium">Medicare</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" className="text-sm text-gray-700 hover:text-purple-600">About</a>
          <a href="#" className="text-sm text-gray-700 hover:text-purple-600">LogOut</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button  onClick={()=>navigate("/Patient-detail")}className="text-sm  cursor-pointer px-4 py-2 text-gray-700 hover:text-purple-600">
          DashBoard
          </button>
          <button className="text-sm px-6 py-2.5  cursor-pointer bg-black text-white rounded-full hover:bg-gray-800 flex items-center gap-2">
            Contact Us
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </button>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-16 md:py-32">
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-24 h-[1px] bg-purple-300"></div>
            <Heart className="w-5 h-5 text-purple-600" />
            <div className="w-24 h-[1px] bg-purple-300"></div>
          </div>

          <h1 className="text-5xl md:text-[80px] font-bold leading-tight tracking-[-0.02em]">
            Discover Our Mission and Values in Patient-Centered Healthcare
          </h1>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-6 tracking-wide">
            we are dedicated to providing exceptional healthcare through a compassionate, patient-centered approach.
          </p>

          <button  onClick={()=>navigate("/Patient-detail")} className="text-sm cursor-pointer px-8 py-3.5 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2 mx-auto">
            DashBoard
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </button>
        </div>
      </main>

<div>
    <h1 className='w-full flex items-center justify-center text-7xl font-poppins font-semibold'>What Features We Provides</h1>
</div>

    
    <div>
    <div className='bg-black' style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
    </div>

        <div className='w-full bg-black h-[1000px] p-20 flex-wrap gap-16 items-center justify-center h-64 flex '>
        <SpotlightCard  className="custom-spotlight-card" spotlightColor="rgba(247, 251, 251, 0.49)">
        “Physical fitness is not only one of the most important keys to a healthy body, it is the basic of dynamic and creative intellectual activity.” 
</SpotlightCard>

<SpotlightCard  className="custom-spotlight-card" spotlightColor="rgba(247, 251, 251, 0.47)">
"What most people don’t realize is that food is not just calories: It’s information. It actually contains messages that communicate to every cell in the body.” 
</SpotlightCard>


<SpotlightCard  className="custom-spotlight-card" spotlightColor="rgba(247, 251, 251, 0.55)">
“The doctor of the future will give no medicine, but will instruct his patients in care of the human frame, in diet, and in the cause and prevention of disease.”
</SpotlightCard>
<SpotlightCard  className="custom-spotlight-card" spotlightColor="rgba(247, 251, 251, 0.47)">
“Some things you have to do every day. Eating seven apples on Saturday night instead of one a day just isn’t going to get the job done.”
</SpotlightCard>
        </div>

    <div>
        <Footer/>
    </div>

    </div>
  );
}




