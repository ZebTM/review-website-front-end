import { Routes, Route }  from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from './NavBar';
import '../componentsCSS/App.css';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const CreateReview = lazy(() => import('./CreateReview'));
const NoMatch = lazy(() => import('./NoMatch'));

const App = () => {
  return (
    <>
    <NavBar />
      <Suspense fallback={<div className='container'>Loading...</div>} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createReview" element={<CreateReview />} />
          <Route path="/about" element={<About />} />


          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
