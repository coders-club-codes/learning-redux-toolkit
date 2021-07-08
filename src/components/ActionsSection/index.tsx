import { Dispatch, SetStateAction } from 'react';

import { useReduxDispatch } from '../../hooks';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '../../store/slices/counter';
import Button from '../Button';
import * as S from './styles';

const ActionsSection = () => {
  const dispatch = useReduxDispatch();

  const increment = () => dispatch(incrementCounter());
  const decrement = () => dispatch(decrementCounter());
  const reset = () => dispatch(resetCounter());

  return (
    <S.Container>
      <p>
        Vamos aprender como implementar a última versão do Redux, utilizando o
        Redux Toolkit e Typescript.
      </p>

      <div>
        <Button type="button" onClick={increment}>
          Increment
        </Button>

        <Button type="button" onClick={decrement}>
          Decrement
        </Button>

        <Button type="button" onClick={reset}>
          Reset
        </Button>
      </div>
    </S.Container>
  );
};

export default ActionsSection;
