import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
const UnderDevelopment: NextPage = () => {
  const [count, setCount] = useState<number>(10);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold   mt-4 font-rubik">Not ready yet!</h1>
        <div className="flex flex-col gap-4">
          <p className="mt-2 text-gray-600">
            This page is currently under development.
          </p>
          <Button type="button" withBackground>
            <Link href="/">GO HOME</Link>
          </Button>
          {count > 0 && (
            <p className="mt-2 text-gray-600">
              You will be redirected to the homepage in {count} seconds.
            </p>
          )}
          {count === 0 && (
            <p className="mt-2 text-gray-600">
              Redirecting to the homepage now...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
