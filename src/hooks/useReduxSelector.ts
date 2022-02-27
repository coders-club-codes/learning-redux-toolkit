import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { ReduxStore } from '../store/types';

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
