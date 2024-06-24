import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Premium from './components/Premium'

const App = () => {
  return (
    <div className='flex h-screen overflow-hidden justify-center'>
      <Sidebar className='fixed top-0 left-0 w-1/4 h-full bg-gray-900 z-10 overflow-y-auto' />
      <div className='flex overflow-y-auto'>
        <Posts />
        <Premium  className='sticky top-0'/>
      </div>
      <div className='overflow-y-auto'>
      
      </div>
    </div>
  );
};

export default App;
