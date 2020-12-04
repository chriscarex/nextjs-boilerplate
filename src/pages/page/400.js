import PropTypes from 'prop-types';
import HeadTags from '../../components/HeadTags';
import ErrorPage from '../../components/page/ErrorPage';

const Error400 = ({ startAgainLink }) => (
  <>
    <HeadTags
      title="Error 400"
      description="error 400"
    />

    <ErrorPage statusCode={400} startAgainLink={startAgainLink} />
  </>
);

Error400.propTypes = {
  startAgainLink: PropTypes.string
};

Error400.defaultProps = {
  startAgainLink: ''
};

export default Error400;
