import HeadTags from '../../components/HeadTags';
import ErrorPage from '../../components/page/ErrorPage';

const Error403 = () => (
  <>
    <HeadTags
      title="Error 403"
      description="error 403"
    />

    <ErrorPage statusCode={403} />
  </>
);

export default Error403;
