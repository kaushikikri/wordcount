import { useRef, useState } from "react";

//to have word count UI and functionality with totalword and character
export const Counter = () => {

  const disableClass = "bg-slate-400 text-white cursor-not-allowed";
  const activeClass = "bg-red-700";

  const [char, setChar] = useState("");
  const [word, setWord] = useState(0);
  const [sen, setSen] = useState(0);
  const [para, setPara] = useState(0);

  const textref = useRef();  //this holds the reference

  function handleAll() {
    let val = textref.current.value;
    setChar(val);
    val.length && setWord(val.trim().split(" ").length);
    val.length && setSen(val.trim().split(/[.?]/).length - 1);
    val.length && setPara(val.trim().split('\n').length);
  }

  function handleClear(e) {
    e.preventDefault();
    e.target.content.value = "";
    setChar("");
    setWord(0);
    setSen(0);
    setPara(0);
  }

  return (
    <main>
      <section id="counter" className="md:m-10 text-center m-2">

        <form onSubmit={(e) => handleClear(e)}>
          <textarea onChange={handleAll} ref={textref} className="border p-2 focus:outline-none resize-none shadow-md text-lg w-full md:w-3/4" name="content" id="" cols="20" rows="10" autoComplete="off" placeholder="Type or paste your text" autoFocus="on"></textarea>
          <br />
          <button type="submit" className={`px-12 py-1 m-5 text-lg rounded text-white ${char.length ? activeClass : disableClass}`} disabled={char.length ? false : true}>Clear</button>
        </form>

        <div className="flex justify-evenly md:w-3/4 w-full md:px-20 m-auto flex-wrap gap-5">
          <span className="bg-indigo-900 text-white text-xl py-2 w-60 rounded">Character: {char.length}</span>
          <span className="bg-indigo-900 text-white text-xl py-2 w-60 rounded">Word: {word}</span>
          <span className="bg-indigo-900 text-white text-xl py-2 w-60 rounded">Sentence: {sen}</span>
          <span className="bg-indigo-900 text-white text-xl py-2 w-60 rounded">Paragraph: {para}</span>
        </div>

      </section>
    </main>
  )
}
