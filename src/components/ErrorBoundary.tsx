// import React, { ReactNode } from "react";
// import { log } from "../utils/log";

// interface ErrorBoundaryProps {
//   children: ReactNode;
// }

// interface ErrorBoundaryState {
//   hasError: boolean;
// }

// class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//     // You can also log the error to an error reporting service
//     // logErrorToMyService(error, errorInfo);
//     log(`ERROR React WSOD: ${error} ### ${errorInfo}`)
//     window.location.reload();
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children; 
//   }
// }

// export default ErrorBoundary;


import React, { ReactNode } from "react";
import { log } from "../utils/log";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false, 
      errorMessage: null 
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { 
      hasError: true,
      errorMessage: error.message 
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service or console
    log(`ERROR React WSOD: ${error} ### ${errorInfo}`);
    // Optionally log to a service: logErrorToMyService(error, errorInfo);

    // Reload the page (consider user experience implications)
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI displaying the error message
      return <h1>{`Something went wrong: ${this.state.errorMessage}`}</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;