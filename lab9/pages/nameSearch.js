import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
import main from './main.module.css'


const name = () => {
  return (
    <div className={main.body}>
      <Head>
        <title>Find that Pokemon!</title>
      </Head>
      <div>
        <h2 className={main.header}>Find that Pokemon!</h2>
      </div>
      <p>Search for a pokemon by its name.</p>
        <NameSearch/>
        <div id="reportingArea"></div>
      <p>
        <Link href="/index">
            <a className={main.link}>Go back to Home page!</a>
        </Link>
      </p>
    </div>
  );
}

export default name;
