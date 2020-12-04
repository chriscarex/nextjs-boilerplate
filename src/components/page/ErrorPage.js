import PropTypes from 'prop-types';

const errors = [
  {
    code: 400,
    title: 'Something went wrong',
  },
  {
    code: 403,
    title: 'Unauthorised',
  },
  {
    code: 404,
    title: 'Page not found',
    message: 'If you entered a web address please check it was correct.',
  },
  {
    code: 503,
    title: 'Service unavailable',
    message: 'Sorry, but this service is currently unavailable. Please try again later.',
  }
];

const ErrorPage = ({ statusCode }) => {
  let error = errors.find((e) => e.code === statusCode);
  if (!error) error = errors.find((e) => e.code === 400);

  return (
    <>
      <div>
        <h1 id="error-heading">
          {error.title}
        </h1>
        <div>
          {statusCode === 400 || statusCode === 403
            ? (
              <p>
                Sorry, but an error has occurred with the service.
              </p>
            )
            : <p>{error.message}</p>}
        </div>
      </div>
    </>
  );
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default ErrorPage;
