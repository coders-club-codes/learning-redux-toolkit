import { useCallback } from 'react';

import { useReduxSelector } from '../../hooks';
import * as S from './styles';

const Counter = () => {
  const counter = useReduxSelector(
    useCallback((state) => state.counter.value, []),
  );

  return <S.Container>{`${counter}`.padStart(2, '0')}</S.Container>;
};

export default Counter;
