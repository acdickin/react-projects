import { useState } from 'react';
import { Synonym } from './Synonym';
import './search.css'
import Header from '../Header';
import fetchSynonyms from './fetchSynonyms';
import { useQuery } from "react-query";

function SynonymsSearch() {
  const [word, setWord]= useState<string>('');
  const { data, isLoading } = useQuery(
    ["synonyms", word], 
    ()=>fetchSynonyms(word)
    );

  const handleFetchSynonyms =(e:React.FormEvent)=>{
    e.preventDefault();
    fetchSynonyms(word)
  }
  
  const handleSynonymsClick=(newWord:string)=>{
    setWord(newWord);
    fetchSynonyms(newWord);
  }

const loader =()=><p>Loading ...</p>
  const synonymsTable=()=>{
    return(
      <table className="table" >
        <tbody>
          <tr >
            <th>Word</th>
            <th>Word Score</th>
          </tr>
          
          {data.map((syn:Synonym)=>{
            return(
              
            <tr key={syn.word}>
                <td onClick={()=>handleSynonymsClick(syn.word)}>{syn.word} </td>
                <td>{syn.score}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return(
    <>
    <Header/>
    <div className="search">
      <h1>Synonym Search Page</h1>
      <form onSubmit={handleFetchSynonyms}>
        <div>
          <label className="label" htmlFor="word-input">Your word</label>
          <input className="inputBox"
            value={word}
            onChange={(e)=> setWord(e.target.value)} 
            id="word-input"
          />
        </div>
       
        <button style={{margin:"20px 0"}}>Submit</button>
      </form>
      {
        isLoading
          ?loader()
            : data.length>0 && synonymsTable()
      }
    </div>
    </>
  ) 
}
export default SynonymsSearch;