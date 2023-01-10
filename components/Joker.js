import React from 'react';
import PropTypes from 'prop-types';

export default function Joker({ joke, btnText }) {
  return (
    <>
      <div>{joke.setup}</div>
      <div>{btnText !== 'Get Punchline' ? joke.punchline : ''}</div>
    </>
  );
}

Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
