import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderComponent = styled.div`
	border: 4px solid #c5c5c5;
	border-top: 4px solid #3498db;
	border-radius: 50%;
	width: 32px;
	height: 32px;
	animation: ${spin} 0.8s linear infinite;
	margin: auto;
`;

const Loader = () => {
	return <LoaderComponent />;
};

export default Loader;
