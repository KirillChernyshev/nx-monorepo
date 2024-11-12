import { sharedUtils } from '@dig/shared-utils';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const onClick = () => console.log(sharedUtils());

  return (
    <StyledApp>
      <h1>
        <span> Hello there, </span>
        Welcome vitejs-app 👋
      </h1>
      <button onClick={onClick}>log from shared package</button>
    </StyledApp>
  );
}

export default App;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: typeof import('@testing-library/react').render;

  beforeEach(async () => {
    render = (await import('@testing-library/react')).render;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome vitejs-app/gi)).toBeTruthy();
  });
}
