import { styled } from '../../styles';

const Button = styled('button', {
  background: '$brand',
  color: '$readableBrandText',
  transition: '$hover',

  '&:not(:disabled):hover': {
    background: '$brandHover',
  },

  '&:not(:disabled):active': {
    background: '$brandActive',
  },
});

export default Button;
