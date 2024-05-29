import "server-only";

import { notFound } from "next/navigation";

export class RequestError extends Error {
  constructor(
    message: string,
    public status: number,
    public path: string,
    public raw: any
  ) {
    super(message);
  }
}

export const requestErrorHandler = (error: Error | RequestError) => {
  if (
    error instanceof RequestError &&
    (error.status === 404 || error.raw?.response?.status === 404)
  ) {
    return notFound();
  }
  throw error;
};
