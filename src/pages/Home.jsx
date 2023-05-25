//Work count page is home page
import { Header } from "../component/Header";
import { Counter } from "../component/Counter";

export const Home = () => {
    const title = "Word Counter";
    const subtitle = "Free online character and word counter tool";

    return (
        <>
            <Header title={title} subTitle={subtitle} />
            <Counter />
        </>
    )
}
