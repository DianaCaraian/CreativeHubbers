/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import TestRedux from '../pages/users/index'
import TestStore from '../Components/TestStore';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


describe('RepoIndex page', () => {
    it('should test if it renders', () => {
     shallow(<TestRedux/>);
     const main = screen.getByTestId('customTest')
     expect(main).toBeInTheDocument();
});
});
// not done yet