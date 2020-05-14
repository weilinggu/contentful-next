
function createPageContext() {
  return {
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).

  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT__) {
    // @ts-ignore
    global.__INIT__ = createPageContext();
  }
  return global.__INIT__;
}
