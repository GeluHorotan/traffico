import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Traffico</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-l from-[transparent] to-[#EE4D47]  w-max  ">
        {/* <HeroBackground></HeroBackground> */}
        <Image
          src="/smallCircle.png"
          alt="heroBackground"
          width={'154'}
          height={'77'}
          className="absolute top-[48rem] left-[35%]"
        />
        <Image
          src="/circle.png"
          alt="heroBackground"
          width={'240'}
          height={'120'}
          className="absolute top-[47rem] left-[38%]"
        />

        <Image
          src="/heroBackground.png"
          alt="heroBackground"
          width={'1285'}
          height={'802'}
        />
        <Image
          src="/people.png"
          width={'365'}
          height={'502'}
          alt="heroBackground"
          className="z-10 absolute top-[28rem] left-[55%]"
        />
      </div>

      <Image
        src="/truck.png"
        width={'532'}
        height={'352'}
        alt="heroBackground"
        className="z-10 relative -mt-2"
      />
    </div>
  );
}
