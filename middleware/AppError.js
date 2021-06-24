class AppError extends Error {
  constructor(message, status, stack) {
    super();
    this.message = message;
    this.status = status;
    this.stack = stack;
  }
}

module.exports = AppError;
