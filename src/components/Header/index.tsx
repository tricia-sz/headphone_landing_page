import { MainNav } from './components/main_nav';
import { Nav } from './components/nav';

export function Header() {
  return (
    <header
    className="w-full h-screen bg-[url('/head2.jpeg')] bg-cover items-center justify-center"
     //  className='w-full bg-gradient-to-r from-slate-500 from-10% via-slate-400  via-30% to-slate-700 to-90% text-white'
     >
      <Nav />
      <MainNav />
    </header>
  );
}
