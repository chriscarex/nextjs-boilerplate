import Link from 'next/link';
import { ROUTE_NEXT } from '../constants/routes';

const Home = () => (
  <div>
    <h1>
      Welcome to the NextJs boilerplate!
    </h1>

    <div>
      <Link href={ROUTE_NEXT}>
        <a>Click here to go to the next page</a>
      </Link>
    </div>

  </div>
);

export default Home;
