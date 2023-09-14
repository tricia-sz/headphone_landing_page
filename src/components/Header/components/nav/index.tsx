import Image from 'next/image';
import Link from 'next/link';
import logoTrxHead from 'public/logoTrxHead.svg'

export function Nav() {
  return (
    <nav className='w-full flex justify-center items-center gap-8 py-20 text-white'>
      <Link href='/' className='mr-64'>
        <Image
          src={logoTrxHead}
          alt='Logo of site Trx Head'
          quality={100}
          priority={true}
        />
      </Link>
      <Link href='/' className='flex gap-1'>
        Home
      </Link>
      <Link href='/product' className='flex gap-1'>
        Product
      </Link><Link href='/serv' className='flex gap-1'>
        Service
      </Link>
      <Link href='/about' className='flex gap-1'>
        About
      </Link>
      <button className='flex  text-white  p-2 px4 rounded-md'>
        Sign In
      </button>
    </nav>
  );
}
