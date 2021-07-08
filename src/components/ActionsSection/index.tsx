import { Dispatch, SetStateAction } from 'react';

import Button from '../Button';
import * as S from './styles';

type ActionsSectionProps = {
  setCounter: Dispatch<SetStateAction<number>>;
};

const ActionsSection = ({ setCounter }: ActionsSectionProps) => {
  const incrementCounter = () => setCounter((prevState) => prevState + 1);

  const decrementCounter = () =>
    setCounter((prevState) => {
      if (prevState === 0) {
        return prevState;
      }

      return prevState - 1;
    });

  const resetCounter = () => setCounter(0);

  return (
    <S.Container>
      <p>
        Vamos aprender como implementar a última versão do Redux, utilizando o
        Redux Toolkit e Typescript.
      </p>

      <div>
        <Button type="button" onClick={incrementCounter}>
          Increment
        </Button>

        <Button type="button" onClick={decrementCounter}>
          Decrement
        </Button>

        <Button type="button" onClick={resetCounter}>
          Reset
        </Button>
      </div>
    </S.Container>
  );
};

export default ActionsSection;
