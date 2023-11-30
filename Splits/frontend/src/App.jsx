
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SplitDetails from './pages/SplitDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'


const App = () => {
  return (
    <div>
      
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/write" element={<CreatePost/>}/>
      <Route exact path="/posts/post/:id" element={<SplitDetails/>}/>
      <Route exact path="/edit/:id" element={<EditPost/>}/>
      <Route exact path="/profile/:id" element={<Profile/>}/>
      </Routes>
      
    </div>
  )
}

export default App