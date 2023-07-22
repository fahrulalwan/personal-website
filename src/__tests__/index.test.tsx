import { render } from '@testing-library/react';
import Home from '../pages';

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
  });

  it('renders home with allPostsData', () => {
    const homeComponent = (
      <Home allPostsData={[{ date: '2021-10-10', title: 'test', id: 'test' }]} />
    );

    const listElement = '<li';

    render(homeComponent);

    expect(listElement).toBeInTheDocument();
    expect(homeComponent).not.toContain(listElement);
  });
});
