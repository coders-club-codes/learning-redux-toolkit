import { styled } from '../../styles';

export const Container = styled('div', {
  '& > p': {
    marginBottom: 40,
  },

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
});
