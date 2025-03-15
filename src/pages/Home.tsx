import HeroSection from '../components/Home/HeroSection';
import QuickLinks from '../components/Home/QuickLinks';


export default function Home() {

  
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <QuickLinks />
    </div>
  );
}