import { useState } from "react";
import fetchSynonyms from "../fetchSynonyms";
export type Synonym={
  word:string;
  score:number;
}

export const useGetSynonyms = () =>{
  const [synonyms, setSynonyms]= useState<Synonym[]>([]);
  const [isLoading, setIsLoading]= useState<Boolean>(false);
  
  const getSynonyms =(word:string)=>{
    setIsLoading(true);
    fetchSynonyms(word).then(setSynonyms);
    setIsLoading(false);
  }

  return {isLoading,synonyms,getSynonyms}
}