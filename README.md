```
❯ yarn tsc
yarn run v1.22.10
src/index.ts:26:36 - error TS2345: Argument of type '<TReturn, TArgs, TContext>({ document, variables, context, info, }: { document: any; variables: TArgs; context: TContext; info: any; }) => Promise<FetchResult<TReturn, Record<string, any>, Record<string, any>>>' is not assignable to parameter of type 'AsyncExecutor'.
  Types of parameters '__0' and 'params' are incompatible.
    Type 'ExecutionParams<TArgs, TContext>' is not assignable to type '{ document: any; variables: TArgs | undefined; context: TContext | undefined; info: any; }'.
      Property 'variables' is optional in type 'ExecutionParams<TArgs, TContext>' but required in type '{ document: any; variables: TArgs | undefined; context: TContext | undefined; info: any; }'.

26     schema: await introspectSchema(executor),
                                      ~~~~~~~~

src/index.ts:27:5 - error TS2322: Type '<TReturn, TArgs, TContext>({ document, variables, context, info, }: { document: any; variables: TArgs; context: TContext; info: any; }) => Promise<FetchResult<TReturn, Record<string, any>, Record<string, any>>>' is not assignable to type 'Executor'.
  Types of parameters '__0' and 'params' are incompatible.
    Type 'ExecutionParams<TArgs, TContext>' is not assignable to type '{ document: any; variables: TArgs | undefined; context: TContext | undefined; info: any; }'.
      Property 'variables' is optional in type 'ExecutionParams<TArgs, TContext>' but required in type '{ document: any; variables: TArgs | undefined; context: TContext | undefined; info: any; }'.

27     executor,
       ~~~~~~~~

  node_modules/@graphql-tools/delegate/types.d.ts:109:5
    109     executor?: Executor;
            ~~~~~~~~
    The expected type comes from property 'executor' which is declared here on type 'SubschemaConfig<any, any, any>'

src/index.ts:28:5 - error TS2322: Type '<TReturn, TArgs, TContext>({ document, variables, context, info, }: { document: any; variables: TArgs; context: TContext; info: any; }) => Promise<AsyncIterable<unknown>>' is not assignable to type 'Subscriber'.
  Types of parameters '__0' and 'params' are incompatible.
    Type 'ExecutionParams<TArgs, TContext>' is not assignable to type '{ document: any; variables: TArgs | undefined; context: TContext | undefined; info: any; }'.
      Property 'variables' is optional in type 'ExecutionParams<TArgs, TContext>' but required in type '{ document: any; variables: TArgs | undefined; context: TContext | undefined; info: any; }'.

28     subscriber,
       ~~~~~~~~~~

  node_modules/@graphql-tools/delegate/types.d.ts:110:5
    110     subscriber?: Subscriber;
            ~~~~~~~~~~
    The expected type comes from property 'subscriber' which is declared here on type 'SubschemaConfig<any, any, any>'


Found 3 errors.
```
