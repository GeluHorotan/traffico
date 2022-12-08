import { motion, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Image from '../components/Image';

const Error404: React.FC = () => {
  const controls = useAnimationControls();
  const router = useRouter();
  // Initialize the countdown state with 15 seconds
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    controls.start({
      x: '60%',
      transition: { duration: 1, type: 'tween' },
    });
  }, []);

  useEffect(() => {
    controls.start({
      x: 0,
      transition: { duration: 15, type: 'tween' },
    });
  }, [controls]);

  // Run this effect when the component is first rendered
  useEffect(() => {
    // Start the countdown by running a function that updates the countdown state every second
    const interval = setInterval(() => {
      // Decrement the countdown state by 1
      setCountdown(countdown - 1);
    }, 1000);

    // Stop the countdown when it reaches 0
    if (countdown === 0) {
      clearInterval(interval);

      // Redirect to the homepage
      router.push('/');
    }

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="flex w-screen  items-center justify-center h-screen bg-gray-200 relative">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-8 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-gray-800 font-rubik">
            404 - Your route doesn&apos;t exist.
          </h1>

          <p className="text-gray-600 ">
            Your truck will arrive back to the homepage in {countdown} seconds.
          </p>
        </div>
        <Button type="button" withBackground>
          <Link href="/">GO HOME</Link>
        </Button>
      </div>
      <div className="w-full absolute bottom-0 left-0  overflow-hidden ">
        <motion.div initial={{ x: '60%' }} animate={controls}>
          <Image
            src={'/truck.png'}
            width={'532'}
            height={'352'}
            alt="Truck"
            className="   pointer-events-none max-lg:w-[40%] "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Error404;
