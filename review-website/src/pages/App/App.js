import { Routes, Route }  from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from '../NavBar/NavBar';
import './App.css';

const Home = lazy(() => import('../Home/Home.js'));
const About = lazy(() => import('../About/About.js'));
const CreateReview = lazy(() => import('../CreateReview/CreateReview'));
const NoMatch = lazy(() => import('../NoMatch/NoMatch'));

const App = () => {
  return (
    <>
    <NavBar />
      <Suspense fallback={<div className='container'>Loading...</div>} >
        <div className='routes'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createReview" element={<CreateReview />} />
            <Route path="/about" element={<About />} />

            {/* This is needs to be at the end since it takes all the routes */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
};

export default App;
