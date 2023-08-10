import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/MyWork'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="contact" index element={<Contact />} />
          <Route path="mywork" index element={<MyWork />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
