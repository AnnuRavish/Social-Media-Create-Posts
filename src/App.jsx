import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './compo/Header';
import Footer from './compo/Footer';
import Sidebar from './compo/Sidebar';
import CreatePost from './compo/CreatePost';
import PostList from './compo/PostList';
import { useState } from 'react';
import PostProvider from './store/Post-list-store';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className='content'>
          <Header />
          {selectedTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}

          <Footer />

        </div>
      </div>
    </PostProvider>
  )
}


export default App;
