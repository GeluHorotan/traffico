import Head from 'next/head';

import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import HeroSection from '../components/HeroSection';
import HowToSection from '../components/HowToSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Traffico | Webamboos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AboutSection />
      <HowToSection />
      <FaqSection />
    </div>
  );
}
