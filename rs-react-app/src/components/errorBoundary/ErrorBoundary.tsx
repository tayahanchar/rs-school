import { Component } from 'react';
import type {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from '../../types/types';
import './ErrorBoundary.css';

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="error-title">
          Something went wrong. Please try to reload the page.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
