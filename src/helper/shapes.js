import propTypes from 'prop-types';

const hsl = propTypes.shape({
  a: propTypes.number,
  h: propTypes.number,
  l: propTypes.number,
  s: propTypes.number,
});
const hex = propTypes.string;
const rgb = propTypes.shape({
  r: propTypes.number,
  g: propTypes.number,
  b: propTypes.number,
  a: propTypes.number,
});
const hsv = propTypes.shape({
  h: propTypes.number,
  s: propTypes.number,
  v: propTypes.number,
  a: propTypes.number,
});

const tinycolor = propTypes.shape({
  hsl,
  hex,
  rgb,
  hsv,
});

export default {
  hsl,
  hex,
  rgb,
  hsv,
  tinycolor,
};
