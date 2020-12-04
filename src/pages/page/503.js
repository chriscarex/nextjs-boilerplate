import HeadTags from '../../components/HeadTags';
import ErrorPage from '../../components/page/ErrorPage';

const Error503 = () => (
  <>
    <HeadTags
      title="Error 503"
      description="error 503"
    />

    <ErrorPage statusCode={503} />
  </>
);

export default Error503;
