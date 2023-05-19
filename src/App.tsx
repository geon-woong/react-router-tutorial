import { Routes,Route } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Articles } from './pages/Articles'
import { Article } from './pages/Article'
import {NotFound} from './pages/NotFound'
function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile/:name" element={<Profile/>} />
        <Route path="/articles" element={<Articles/>}>
          <Route path=":id" element={<Article/>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App
