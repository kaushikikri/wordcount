//page not found page
import { Link } from "react-router-dom";
import Photo from "../assets/page-not-found.jpg";

export const Pagenotfound = () => {
  return (
    <main>
      <div className="md:w-96 border shadow-md md:p-7 p-2 text-center m-auto">
        <h3 className="text-3xl mb-5">Oops - Page Not Found!</h3>
        <img src={Photo} alt="not-found" />
        <Link to="/" >
          <button className="mt-5 bg-indigo-900 text-white text-xl py-2 px-2 md:w-60 rounded">Go To Word Counter</button>
        </Link>
      </div>
    </main>
  )
}
