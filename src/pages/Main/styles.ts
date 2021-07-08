import { styled } from '../../styles';

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
  width: '100%',
  minWidth: '80%',
});

export const Title = styled('h1', {
  fontSize: 42,
  marginBottom: 20,
});

export const Wrapper = styled('section', {
  display: 'flex',
  gap: 64,
  marginTop: 64,
});

export const Footer = styled('footer', {
  margin: 'auto',
  paddingTop: 280,
});
