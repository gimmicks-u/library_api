class AppError extends Error {
  public httpCode: number;

  constructor(httpCode: number, message?: string) {
    super(message);
    this.httpCode = httpCode;
  }
}

export { AppError };
