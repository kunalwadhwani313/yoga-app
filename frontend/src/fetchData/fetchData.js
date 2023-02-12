
export const options2 = {
    method: 'GET',
   // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  
    headers: {
      'X-RapidAPI-Key': '4318c2e303msh644f6a35d21c2e4p1151cdjsn59014ad965bb',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url , options) => {
      
      const response = await fetch(url , options);
  
      const data = await response.json();
  
      return data;
  }