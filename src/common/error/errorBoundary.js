import React, { useEffect, useState } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleCatch = (error, errorInfo) => {
    setHasError(true);
    console.error(error);
    // 추가적인 에러 처리 로직을 구현할 수 있습니다.
  };

  useEffect(() => {
    const handleError = (event) => {
      handleCatch(event.error, event.error); // 매개변수로 event.error를 전달
      // 추가적인 에러 처리 로직을 구현할 수 있습니다.
    };

    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <p>이 페이지는 에러가 났습니다.</p>;
  }

  return children;
}

export default ErrorBoundary;
// import React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     componentDidCatch(error, errorInfo) {
//     }

//     render() {
//         if (this.state.hasError) {
//             return <p>Something went wrong.</p>;
//         }

//         return this.props.children;
//     }
// }

// export default ErrorBoundary;
