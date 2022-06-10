import { cleanup } from '@testing-library/react';
import ContactsReducer, { ContactsState, } from './productSlice';

describe('Contacts reducer', () => {
  afterEach(cleanup);

  const initialState: ContactsState = {
    value: [],
    status: 'idle',
  };

  it('should handle initial state', () => {
    expect(ContactsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });


});
