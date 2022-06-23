import { render } from '@testing-library/react';
import Home from '../pages';
import '@testing-library/jest-dom';

describe('App Environment', () => {
  it('runs in test environment', () => {
    expect(process.env.NODE_ENV).toEqual('test');
  });
});

describe('Home', () => {
  it('renders home', () => {
    const homeComponent = <Home allPostsData={[]} />;

    render(homeComponent);

    expect(homeComponent).toBeInTheDocument();
    expect(homeComponent.props.allPostsData).toBeEmpty();
  });
});
