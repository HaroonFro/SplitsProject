import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Comment from "../components/Comment"


const SplitDetails = () => {
    return (
    <div>
       <Navbar/>
       <div className="px-8 md:px-[200px] mt-8">
       <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">3 Uses of Push-Pull-Legs Split</h1>
        <div className="flex items-center justify-center space-x-2">
            <p><BiEdit/></p>
            <p><MdDelete/></p>
        </div>
       </div>
       <div className="flex items-center justify-between mt-2 md:mt-4">
       <p>@HaroonFrotan</p>
           <div className="flex space-x-2">
            <p>11/28/23</p>
            <p>11:16</p>
           </div>
       </div>

       </div>
       <img src="https://i.pinimg.com/550x/ef/bf/70/efbf70dbb1d7c4a86f5928b97b078cba.jpg" className="w-full mx-auto mt-8" alt="" />
       <p className="mx-auto mt-8">The push/pull/legs split is probably the most efficient workout split there is because all related muscle groups are trained together in the same workout. This means that you get the maximum overlap of movements within the same workout, and the muscle groups being trained get an overall benefit from this overlap.</p>
       <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>Catagories:</p>
        <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Workout</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Meals</div>
        </div>
       </div>
       <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
       <Comment/>
       <Comment/>
       </div>
       {/* write a new comment */}
       <div className="w-full flex flex-col mt-4 md:flex-row">
        <input type="text" placeholder="Write Comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
        <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
       </div>
       <Footer/>

    </div>
    )
}

export default SplitDetails