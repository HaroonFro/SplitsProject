import MainPosts from "../components/MainPosts"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="px-8 md:px-[200px]">
            <MainPosts />
            <MainPosts />
            <MainPosts />
            <MainPosts />
            <MainPosts />
        </div>
        <Footer />
        </>
    )
}

export default Home