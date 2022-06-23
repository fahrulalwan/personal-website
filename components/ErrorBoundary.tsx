import { Component, PropsWithChildren } from 'react';
import { logAnalyticException } from '../lib/gtag';

interface ComponentProps {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren, ComponentProps> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    logAnalyticException(error.name, true);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h2 className="text-center">Oops, there is an error!</h2>;
    }

    return children;
  }
}

export default ErrorBoundary;
