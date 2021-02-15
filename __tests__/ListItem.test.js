import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListItem from '../src/components/ListItem';

describe('ListItem', () => {
  it('should be render with props', () => {
    const {getByText} = render(
      <ListItem
        onPress={() => {}}
        title="title test"
        description="description test"
        byline="name author"
      />,
    );
    expect(getByText('title test')).not.toBeNull();
    expect(getByText('description test')).not.toBeNull();
    expect(getByText('name author')).not.toBeNull();
  });

  it('should be call function', () => {
    const action = jest.fn();

    const {getByText} = render(
      <ListItem onPress={action} title="press" description="" byline="" />,
    );
    fireEvent.press(getByText('press'));
    expect(action).toHaveBeenCalled();
  });
});
