import Sidebar from './components/Sidebar';
import Posts from './components/Posts';

const App = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar className='fixed top-0 left-0 w-1/4 h-full bg-gray-900 z-10 overflow-y-auto' />
      <div className='flex flex-col ml-1/4 w-3/4 h-full overflow-y-auto'>
        <Posts />
      </div>
    </div>
  );
};

export default App;
