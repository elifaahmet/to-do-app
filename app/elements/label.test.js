import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Label } from './label';

describe('Testing Label Component', () => {
  test('it should be rendered', async () => {
    const component = (
      <Label>
        Testing
      </Label>
    );

    const { getByText, toJSON } = render(component);
    
    const element = getByText('Testing');
    expect(element.children.length).toEqual(1);

    expect(toJSON()).toMatchSnapshot();
  });

});