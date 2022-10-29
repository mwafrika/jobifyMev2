class customAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default customAPIError;
