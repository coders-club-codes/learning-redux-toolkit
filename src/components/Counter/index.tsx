/* eslint-disable react-redux/useSelector-prefer-selectors */
import { useSelector } from 'react-redux';

import { ReduxStore } from '../../store/types';
import * as S from './styles';

const Counter = () => {
  const counter = useSelector<ReduxStore>((state) => state.counter.value);

  return <S.Container>{`${counter}`.padStart(2, '0')}</S.Container>;
};

export default Counter;
