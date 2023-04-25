import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos',{

    headers:{
        Authorization:'Client-ID MjiXLs1xPkvQpqPRKAUa6FVqFYsotEI8kf_XfyHMQG4'
    },
    params:{
        query: term,
    },
    });
    console.log(response);
    return response.data.results;
};

export default searchImages;
