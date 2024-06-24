import axios from 'axios';
export async function fetchImages(input, page) {
  const responce = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '44332433-14e648e3fb9b6b454bfecc559',
      q: input,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: '15',
      page: page,
    },
  });
  return responce.data;
}
document.cookie = 'username=JohnDoe; SameSite=None; Secure';
