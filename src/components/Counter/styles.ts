import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'grid',
  placeContent: 'center',
  padding: 24,
  marginLeft: 'auto',
  width: 200,
  height: 200,
  fontSize: 120,
  color: '#f9c8ca',
  background: '$bgHighLight',
  border: '1px solid $border',
  borderRadius: '$huge',
});
