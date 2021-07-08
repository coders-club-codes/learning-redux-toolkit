import { useReduxSelector } from '../../hooks';
import * as S from './styles';

const Counter = () => {
  const counter = useReduxSelector((state) => state.conter.value);

  return <S.Container>{`${counter}`.padStart(2, '0')}</S.Container>;
};

export default Counter;
