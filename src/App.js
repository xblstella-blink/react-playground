import "./styles.css";
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css'

export default function App() {
  return (
    <div className = 'container'>
      <h1 className='text-primary'>My Blog</h1>
      <Posts/>
      <Pagination/>
    </div>  

  );
}
