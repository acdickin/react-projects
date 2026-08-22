import { useState } from 'react'
import { useQuery } from 'react-query'
import { Synonym } from './Synonym'
import fetchSynonyms from './fetchSynonyms'

function SynonymsSearch() {
  const [word, setWord] = useState<string>('')
  const { data, isLoading } = useQuery(['synonyms', word], () =>
    fetchSynonyms(word)
  )

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault()
    fetchSynonyms(word)
  }

  const handleSynonymsClick = (newWord: string) => {
    setWord(newWord)
    fetchSynonyms(newWord)
  }

  const loader = () => <p>Loading ...</p>
  const synonymsTable = () => {
    return (
      <table className="mx-auto text-2xl">
        <tbody>
          <tr>
            <th>Word</th>
            <th>Word Score</th>
          </tr>

          {data.map((syn: Synonym) => {
            return (
              <tr key={syn.word}>
                <td onClick={() => handleSynonymsClick(syn.word)}>
                  {syn.word}{' '}
                </td>
                <td>{syn.score}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1>Synonym Search Page</h1>
        <form onSubmit={handleFetchSynonyms}>
          <div>
            <label className="text-2xl" htmlFor="word-input">
              Your word
            </label>
            <input
              className="mx-2.5 h-[30px] w-[300px] border border-black text-center text-lg"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              id="word-input"
            />
          </div>

          <button className="my-5">Submit</button>
        </form>
        {isLoading ? loader() : data.length > 0 && synonymsTable()}
      </div>
    </div>
  )
}
export default SynonymsSearch
