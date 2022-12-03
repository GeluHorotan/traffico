import NextImage from 'next/image';

type Loader = {
  src: string;
};

const customLoader = ({ src }: Loader) => {
  return src;
};

export default function Image(props: any) {
  return <NextImage {...props} loader={customLoader} />;
}
