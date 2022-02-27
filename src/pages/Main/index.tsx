import { ActionsSection, Counter } from '../../components';
import * as S from './styles';

const Main = () => (
  <S.Container>
    <S.Title>CodersClub RTK</S.Title>

    <S.Wrapper>
      <ActionsSection />

      <Counter />
    </S.Wrapper>

    <S.Footer>
      <img
        src="https://assets.memberkit.com.br/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMFE1Q2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--311e5667fc263e8420992ed5c740045ca065a1e9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDTEFGcE56b01jWFZoYkdsMGVXbHAiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--640107bd2579aa273ed8fa2a6b15890a28959578/LOGO-CODERS-CLUB-06.png"
        alt="CodersClub"
      />
    </S.Footer>
  </S.Container>
);

export default Main;
