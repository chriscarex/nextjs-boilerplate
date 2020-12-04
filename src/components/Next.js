import Link from 'next/link';
import { ROUTE_HOME } from '../constants/routes';

const Next = () => (
  <div>
    <h1>
      Welcome to the next page!
    </h1>

    <div>
      <Link href={ROUTE_HOME}>
        <a>Click here to go to the previous page</a>
      </Link>
    </div>

  </div>
);

export default Next;
