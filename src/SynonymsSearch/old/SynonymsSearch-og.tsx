import { useState } from 'react';
import { useGetSynonyms,Synonym } from './useGetSynonyms';
import './search.css'
import Header from '../../Header';

function SynonymsSearch() {
  const [word, setWord]= useState<string>('');
  const {isLoading,synonyms,getSynonyms} = useGetSynonyms();

  const handleFetchSynonyms =(e:React.FormEvent)=>{
    e.preventDefault();
    getSynonyms(word)
  }
  
  const handleSynonymsClick=(newWord:string)=>{
    setWord(newWord);
    getSynonyms(newWord);
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
          
          {synonyms.map((syn:Synonym)=>{
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
          :synonyms.length>0 && synonymsTable()
      }
    </div>
    </>
  ) 
}
export default SynonymsSearch;