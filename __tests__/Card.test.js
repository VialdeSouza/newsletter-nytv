import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Card from '../src/components/Card';

const url =
  'https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80';

describe('Card', () => {
  it('should be render image cover', () => {
    const tree = renderer
      .create(<Card description="" title="" url={url} onPress={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be render with props', () => {
    const {getByText} = render(
      <Card
        url={url}
        onPress={() => {}}
        title="title test"
        description="description test"
      />,
    );
    expect(getByText('title test')).not.toBeNull();
    expect(getByText('description test')).not.toBeNull();
  });

  it('should be call function', () => {
    const action = jest.fn();

    const {getByTestId} = render(
      <Card
        url={url}
        onPress={action}
        title="title test"
        description="description test"
      />,
    );
    fireEvent.press(getByTestId('button'));
    expect(action).toHaveBeenCalled();
  });
});
