//the joke page
import { Header } from "../component/Header";
import { RandomJoke } from "../component/RandomJoke";

export const Jokepage = () => {
  const title = "ChuckNorris Jokes";
  const subtitle = "Free JSON API for hand curated Chuck Norris facts";

  return (
    <>
      <Header title={title} subTitle={subtitle} />
      <RandomJoke />
    </>
  )
}
