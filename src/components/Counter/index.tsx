import * as S from './styles';

type CounterProps = {
  value: number;
};

const Counter = ({ value }: CounterProps) => (
  <S.Container>{`${value}`.padStart(2, '0')}</S.Container>
);

export default Counter;
