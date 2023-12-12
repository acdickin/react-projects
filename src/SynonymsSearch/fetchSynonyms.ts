  const queryString:string= "https://api.datamuse.com/words/?rel_syn=";
  
  const fetchSynonyms = (newWord:string ) =>{
    return fetch(queryString+newWord)
    .then((response)=> response.json())
    .catch(error=>console.log(error));
  }
  export default fetchSynonyms;