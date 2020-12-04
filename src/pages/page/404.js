import HeadTags from '../../components/HeadTags';
import ErrorPage from '../../components/page/ErrorPage';

const Error404 = () => (
  <>
    <HeadTags
      title="Error 404"
      description="error 404"
    />

    <ErrorPage statusCode={404} />
  </>
);

export default Error404;
