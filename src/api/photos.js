export const getPhotos = props => {
  const API = '?key=39342845-b067dc268014f57340e74d554&q=';
  const BASEURL = 'https://pixabay.com/api/';
  let PAGE = props.page;

  const data = fetch(`${BASEURL}${API}${props.query}&page=${PAGE}`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('not found'));
    }
  );
  return data;
};
