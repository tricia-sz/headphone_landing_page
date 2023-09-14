import Image from 'next/image';
import Link from 'next/link';
import logoTrxHead from 'public/logoTrxHead.svg'

export function Nav() {
  return (
    <nav className='w-full flex justify-center items-center gap-8 py-20 text-white'>
      <Link href='' className='mr-64'>
        <Image
          src={logoTrxHead}
          alt='Logo of site Trx Head'
          quality={100}
          priority={true}
        />
      </Link>
      <Link href='' className='flex gap-1'>
        Home
      </Link>
      <Link href='' className='flex gap-1'>
        Product
      </Link>
      <Link href='' className='flex gap-1'>
      </Link>
      <Link href='' className='flex gap-1'>
        About
      </Link>
      <button className='flex font-bold text-slate-600 bg-white p-4 px-10 rounded-md'>
        Sign In
      </button>
    </nav>
  );
}
