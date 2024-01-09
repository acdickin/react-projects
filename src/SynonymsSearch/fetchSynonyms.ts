import axios from "axios";

  const queryString:String= "https://api.datamuse.com/words/?rel_syn=";
  const fetchSynonyms = async (newWord:string) =>{
    const { data }= await axios.get(queryString+newWord)
    return data;
  }
  export default fetchSynonyms;
