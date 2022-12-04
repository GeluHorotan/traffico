import { useContext } from 'react';
import { FaqContext } from '../providers/FaqProvider';

export const useFaq = () => {
  return useContext(FaqContext);
};
