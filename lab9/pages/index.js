import Head from 'next/head';
import Link from 'next/link';
import main from './main.module.css'

const Home = () => {
  return (
    <div className={main.body}>
      <Head>
        <title>Find that Pokemon!</title>
      </Head>
      <div>
        <h2 className={main.header}>Find that Pokemon!</h2>
      </div>
      <div>
        <Link href="/nameSearch">
           <a className={main.link}>Name Search</a>
        </Link>
      </div>
      <div>
        <Link href="/idSearch">
           <a className={main.link}>ID Search</a>
        </Link>
      </div>
      <div>
        <Link href="/typelistSearch">
           <a className={main.link}>Typelist Search</a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
