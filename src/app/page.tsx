
import MoonSVG from '@/components/MoonSvg';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col align-middle min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <MoonSVG />
      <h1 className='text-cyan-400 text-shadow-lg text-7xl transform animate-pulse cursor-default'>sleepiecharms</h1>
      <section className='text-5xl text-shadow-md'>handmade, grass fed, cage-free jewelry</section>
      <Link href="/products" className='text-shadow-md hover:underline hover:text-cyan-950 text-4xl underline-offset-8 text-shadow-2xs'>view available products :{")"} </Link>
      <footer className='text-shadow-md font-thin'>-cm 2025</footer>
    </div>
  );
}
