import { useState, useEffect } from "react";
import './MemoryBoard.css'
import FlipCard from "./FlipCard";

// TODO add a lock when correct
interface Card {
  value: number;
  isFlipped: boolean;
  isLocked: boolean;
}

const MemoryBoard = () => {
  //OPTIONS
  // 1. 2 dimentional array with a value and boolean
  // have to iterate over all objects to check if all are true
  // 2. array with just list, array with selected (list doesn't change,have to loop though selected array every item)
  // can just check if the num in the selected array = total num
  // 3.  array with object 
  //  have to iterate over array to check if true
  // 4. could have array of cards that includes an index to make updating nicer

  const [clicks, setClicks] = useState(0);
  const [selected, setSelected] = useState<number[]>([])
  const [win, setWin] = useState(false);
  const [disable, setDisable] = useState(false);

  const createBoard = () => {
    const board: Card[] = [];
    const list = [...Array(6).keys()].map(x => ++x)
    console.log(list)
    setWin(false)
    setClicks(0)
    let doubledlist = list.concat(list);
    doubledlist = doubledlist.sort(() => Math.random() - .5)
    doubledlist.forEach((value) => {
      board.push({ value: value, isFlipped: false, isLocked: false })
    })
    return board;
  }
  const [board, setBoard] = useState(() => createBoard());


  const updateCardStatus = (selected: number) => {
    const flip = board[selected].isFlipped ? false : true;
    setBoard(prevBoard => {
      return prevBoard.map((card, index) => {
        if (index == selected) {
          card.isFlipped = flip
        }
        return card
      })
    })
  }

  const handleSelect = (selected: number) => {
    setDisable(true)
    setClicks(prevClick => prevClick + 1);
    setSelected((prevSelected) => [...prevSelected, selected])
    updateCardStatus(selected);
    setTimeout(() => {
      setDisable(false)
    }, 600);
  }

  useEffect(() => {
    if (selected.length == 2) {
      setTimeout(() => {
        verify()
      }, 600)
    }


  }, [selected])

  useEffect(() => {
    if (clicks > 10 && clicks % 2 == 0) {
      checkIfWin()
    }
  }, [board])


  const checkIfWin = () => {
    console.log("checkboard win:", board);
    let isWin = board.every((card: Card, i: number) => {
      console.log(`${i}:${card.isLocked}`)
      return card.isLocked
    })
    console.log(isWin)
    if (isWin) {
      setWin(true);
    }
  }
  const verify = () => {
    if (board[selected[0]].value !== board[selected[1]].value) {
      setBoard(prevBoard => {
        return prevBoard.map((card, index) => {
          if (index == selected[0] || index == selected[1]) {
            card.isFlipped = false
          }
          return card
        })
      })
    } else {
      setBoard(prevBoard => {
        return prevBoard.map((card, index) => {
          if (selected[0] == index || selected[1] == index) {
            card.isLocked = true
          }
          return card
        })
      })
    }
    setSelected(() => []);

  }

  const displayBoard = () => {
    return board.map((card: Card, index: number) =>
      <FlipCard key={index} index={index} value={card.value} isFlipped={card.isFlipped} isLocked={card.isLocked} isDisabled={disable} handleSelect={handleSelect} />
    )
  }

  const tries = Math.floor(clicks / 2);
  return (
    <>
      <div>
        <h1>MemoryBoard</h1>
        <h3>Tries:{tries}</h3>

        {
          (!win)
            ? <div className="grid">{displayBoard()}</div>
            : <div><h1>YOU WIN!!!</h1> <button onClick={() => setBoard(createBoard)}>Restart</button></div>
        }

      </div>
    </>
  )
}

export default MemoryBoard;