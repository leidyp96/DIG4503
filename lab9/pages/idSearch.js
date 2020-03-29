import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch'
import main from './main.module.css'



const id = () => {
  return (
    <div className={main.body}>
      <Head>
        <title>Find that Pokemon!</title>
      </Head>
      <div>
        <h2 className={main.header}>Find that Pokemon!</h2>
      </div>
      <p>Search for a pokemon by its ID.</p>
        <IdSearch/>
        <div id="reportingArea"></div>
      <p>
        <Link href="/index">
            <a className={main.link}>Go back to Home page!</a>
        </Link>
      </p>
    </div>
  );
}

export default id;
