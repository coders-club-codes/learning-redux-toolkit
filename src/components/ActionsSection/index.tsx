import { useReduxDispatch } from '../../hooks/useReduxDispatch';
import {
  decrementCounter,
  incrementCounter,
  randomIncrementCounter,
  resetCounter,
} from '../../store/slices/counter';
import Button from '../Button';
import * as S from './styles';

const ActionsSection = () => {
  const dispatch = useReduxDispatch();

  const increment = () => dispatch(incrementCounter());

  const decrement = () => dispatch(decrementCounter());

  const reset = () => dispatch(resetCounter());

  const randomlyIncrement = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    dispatch(randomIncrementCounter(randomNumber));
  };

  return (
    <S.Container>
      <p>Learning Redux Toolkit :)</p>

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

        <Button type="button" onClick={randomlyIncrement}>
          Random Increment
        </Button>
      </div>
    </S.Container>
  );
};

export default ActionsSection;
