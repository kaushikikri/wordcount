import { useEffect, useState } from "react"

//to fetch random joke feom api
export const RandomJoke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setJoke(data.value);
    }
    fetchData();
  }, [])

  return (
    <main>
      <section id="jokes">

        <div className="border md:w-3/5 my-20 mx-auto rounded p-2 text-lg">
          <span className="font-semibold">{joke}</span>
          <span> -api.chucknorris.io</span>
        </div>

      </section>
    </main>
  )
}
