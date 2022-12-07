import axios from 'axios';

export const fetchFaq = async () => {
  try {
    const res = await axios.get(
      'https://lxpi9qne2a.api.quickmocker.com/getReactFAQs'
    );

    return await res.data.response;
  } catch (error) {
    return error;
  }
};
