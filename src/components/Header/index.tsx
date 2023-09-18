import { MainNav } from './components/main_nav';
import { Nav } from './components/nav';

export function Header() {
  return (
    <header
    className=" w-full h-64 items-center justify-center"
     >
      <Nav />
      <MainNav />
    </header>
  );
}
