export type ServiceFunction<I, O> = I extends void ? () => Promise<O> : (input: I) => Promise<O>;
