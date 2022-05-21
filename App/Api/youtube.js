import axios from 'axios';

const KEY = 'AIzaSyCCVvitDcy7KFSuIpEXuTUFLH3g4O4DkL8';

const youtube = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});

const search = async query => {
  try {
    const res = await youtube.get('/search', {
      params: {
        q: query + ' yoga',
      },
    });
    return res.data.items.map(item => {
      return {
        id: item.id.videoId,
        url: 'https://www.youtube.com/watch?v=' + item.id.videoId,
        title: item.snippet.title,
        desc: item.snippet.description,
        img: item.snippet.thumbnails.default.url,
      };
    });
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default search;
