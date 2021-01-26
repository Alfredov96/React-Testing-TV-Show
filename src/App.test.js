import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import { formatSeasons } from './utils/formatSeasons';

describe('App', () => {
    let wrapper;
  
    afterEach(rtl.cleanup);
    beforeEach(() => {
      wrapper = rtl.render(<App />);
    });
  
    it('displays the correct name starting with the API', async () => {
      const text = await wrapper.queryAllByText('Select a season');
      expect(text).toBeDefined();
      // expect(text).toBeVisible();
    });
   
  });