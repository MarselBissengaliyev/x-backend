
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model ContentSetting
 * 
 */
export type ContentSetting = $Result.DefaultSelection<Prisma.$ContentSettingPayload>
/**
 * Model ScheduledPost
 * 
 */
export type ScheduledPost = $Result.DefaultSelection<Prisma.$ScheduledPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentSetting`: Exposes CRUD operations for the **ContentSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentSettings
    * const contentSettings = await prisma.contentSetting.findMany()
    * ```
    */
  get contentSetting(): Prisma.ContentSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledPost`: Exposes CRUD operations for the **ScheduledPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledPosts
    * const scheduledPosts = await prisma.scheduledPost.findMany()
    * ```
    */
  get scheduledPost(): Prisma.ScheduledPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Post: 'Post',
    ContentSetting: 'ContentSetting',
    ScheduledPost: 'ScheduledPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "post" | "contentSetting" | "scheduledPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      ContentSetting: {
        payload: Prisma.$ContentSettingPayload<ExtArgs>
        fields: Prisma.ContentSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>
          }
          findFirst: {
            args: Prisma.ContentSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>
          }
          findMany: {
            args: Prisma.ContentSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>[]
          }
          create: {
            args: Prisma.ContentSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>
          }
          createMany: {
            args: Prisma.ContentSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>[]
          }
          delete: {
            args: Prisma.ContentSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>
          }
          update: {
            args: Prisma.ContentSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>
          }
          deleteMany: {
            args: Prisma.ContentSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>[]
          }
          upsert: {
            args: Prisma.ContentSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSettingPayload>
          }
          aggregate: {
            args: Prisma.ContentSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentSetting>
          }
          groupBy: {
            args: Prisma.ContentSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentSettingCountArgs<ExtArgs>
            result: $Utils.Optional<ContentSettingCountAggregateOutputType> | number
          }
        }
      }
      ScheduledPost: {
        payload: Prisma.$ScheduledPostPayload<ExtArgs>
        fields: Prisma.ScheduledPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>
          }
          findFirst: {
            args: Prisma.ScheduledPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>
          }
          findMany: {
            args: Prisma.ScheduledPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>[]
          }
          create: {
            args: Prisma.ScheduledPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>
          }
          createMany: {
            args: Prisma.ScheduledPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>[]
          }
          delete: {
            args: Prisma.ScheduledPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>
          }
          update: {
            args: Prisma.ScheduledPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>
          }
          deleteMany: {
            args: Prisma.ScheduledPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>[]
          }
          upsert: {
            args: Prisma.ScheduledPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledPostPayload>
          }
          aggregate: {
            args: Prisma.ScheduledPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledPost>
          }
          groupBy: {
            args: Prisma.ScheduledPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledPostCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    post?: PostOmit
    contentSetting?: ContentSettingOmit
    scheduledPost?: ScheduledPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    posts: number
    ScheduledPost: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | AccountCountOutputTypeCountPostsArgs
    ScheduledPost?: boolean | AccountCountOutputTypeCountScheduledPostArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountScheduledPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledPostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    ScheduledPost: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduledPost?: boolean | PostCountOutputTypeCountScheduledPostArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountScheduledPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    method: number | null
  }

  export type AccountSumAggregateOutputType = {
    method: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    login: string | null
    password: string | null
    proxy: string | null
    method: number | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    login: string | null
    password: string | null
    proxy: string | null
    method: number | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    login: number
    password: number
    proxy: number
    method: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    method?: true
  }

  export type AccountSumAggregateInputType = {
    method?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    login?: true
    password?: true
    proxy?: true
    method?: true
    userAgent?: true
    createdAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    login?: true
    password?: true
    proxy?: true
    method?: true
    userAgent?: true
    createdAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    login?: true
    password?: true
    proxy?: true
    method?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    login: string
    password: string
    proxy: string | null
    method: number
    userAgent: string
    createdAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
    proxy?: boolean
    method?: boolean
    userAgent?: boolean
    createdAt?: boolean
    posts?: boolean | Account$postsArgs<ExtArgs>
    contentSettings?: boolean | Account$contentSettingsArgs<ExtArgs>
    ScheduledPost?: boolean | Account$ScheduledPostArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
    proxy?: boolean
    method?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
    proxy?: boolean
    method?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    login?: boolean
    password?: boolean
    proxy?: boolean
    method?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "login" | "password" | "proxy" | "method" | "userAgent" | "createdAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Account$postsArgs<ExtArgs>
    contentSettings?: boolean | Account$contentSettingsArgs<ExtArgs>
    ScheduledPost?: boolean | Account$ScheduledPostArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      contentSettings: Prisma.$ContentSettingPayload<ExtArgs> | null
      ScheduledPost: Prisma.$ScheduledPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      login: string
      password: string
      proxy: string | null
      method: number
      userAgent: string
      createdAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Account$postsArgs<ExtArgs> = {}>(args?: Subset<T, Account$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentSettings<T extends Account$contentSettingsArgs<ExtArgs> = {}>(args?: Subset<T, Account$contentSettingsArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ScheduledPost<T extends Account$ScheduledPostArgs<ExtArgs> = {}>(args?: Subset<T, Account$ScheduledPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly login: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly proxy: FieldRef<"Account", 'String'>
    readonly method: FieldRef<"Account", 'Int'>
    readonly userAgent: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.posts
   */
  export type Account$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Account.contentSettings
   */
  export type Account$contentSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    where?: ContentSettingWhereInput
  }

  /**
   * Account.ScheduledPost
   */
  export type Account$ScheduledPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    where?: ScheduledPostWhereInput
    orderBy?: ScheduledPostOrderByWithRelationInput | ScheduledPostOrderByWithRelationInput[]
    cursor?: ScheduledPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledPostScalarFieldEnum | ScheduledPostScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    content: string | null
    imageUrl: string | null
    hashtags: string | null
    targetUrl: string | null
    promoted: boolean | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    content: string | null
    imageUrl: string | null
    hashtags: string | null
    targetUrl: string | null
    promoted: boolean | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    accountId: number
    content: number
    imageUrl: number
    hashtags: number
    targetUrl: number
    promoted: number
    createdAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    accountId?: true
    content?: true
    imageUrl?: true
    hashtags?: true
    targetUrl?: true
    promoted?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    accountId?: true
    content?: true
    imageUrl?: true
    hashtags?: true
    targetUrl?: true
    promoted?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    accountId?: true
    content?: true
    imageUrl?: true
    hashtags?: true
    targetUrl?: true
    promoted?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    accountId: string
    content: string
    imageUrl: string | null
    hashtags: string | null
    targetUrl: string | null
    promoted: boolean
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    content?: boolean
    imageUrl?: boolean
    hashtags?: boolean
    targetUrl?: boolean
    promoted?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    ScheduledPost?: boolean | Post$ScheduledPostArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    content?: boolean
    imageUrl?: boolean
    hashtags?: boolean
    targetUrl?: boolean
    promoted?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    content?: boolean
    imageUrl?: boolean
    hashtags?: boolean
    targetUrl?: boolean
    promoted?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    accountId?: boolean
    content?: boolean
    imageUrl?: boolean
    hashtags?: boolean
    targetUrl?: boolean
    promoted?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "content" | "imageUrl" | "hashtags" | "targetUrl" | "promoted" | "createdAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    ScheduledPost?: boolean | Post$ScheduledPostArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      ScheduledPost: Prisma.$ScheduledPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      content: string
      imageUrl: string | null
      hashtags: string | null
      targetUrl: string | null
      promoted: boolean
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ScheduledPost<T extends Post$ScheduledPostArgs<ExtArgs> = {}>(args?: Subset<T, Post$ScheduledPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly accountId: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String'>
    readonly hashtags: FieldRef<"Post", 'String'>
    readonly targetUrl: FieldRef<"Post", 'String'>
    readonly promoted: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.ScheduledPost
   */
  export type Post$ScheduledPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    where?: ScheduledPostWhereInput
    orderBy?: ScheduledPostOrderByWithRelationInput | ScheduledPostOrderByWithRelationInput[]
    cursor?: ScheduledPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledPostScalarFieldEnum | ScheduledPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model ContentSetting
   */

  export type AggregateContentSetting = {
    _count: ContentSettingCountAggregateOutputType | null
    _min: ContentSettingMinAggregateOutputType | null
    _max: ContentSettingMaxAggregateOutputType | null
  }

  export type ContentSettingMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    promptText: string | null
    promptImage: string | null
    promptHashtags: string | null
    imageSource: string | null
    targetUrl: string | null
    autoPost: boolean | null
    cronExpression: string | null
    promotedOnly: boolean | null
    useAiOnImage: boolean | null
  }

  export type ContentSettingMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    promptText: string | null
    promptImage: string | null
    promptHashtags: string | null
    imageSource: string | null
    targetUrl: string | null
    autoPost: boolean | null
    cronExpression: string | null
    promotedOnly: boolean | null
    useAiOnImage: boolean | null
  }

  export type ContentSettingCountAggregateOutputType = {
    id: number
    accountId: number
    promptText: number
    promptImage: number
    promptHashtags: number
    imageSource: number
    targetUrl: number
    autoPost: number
    cronExpression: number
    promotedOnly: number
    useAiOnImage: number
    _all: number
  }


  export type ContentSettingMinAggregateInputType = {
    id?: true
    accountId?: true
    promptText?: true
    promptImage?: true
    promptHashtags?: true
    imageSource?: true
    targetUrl?: true
    autoPost?: true
    cronExpression?: true
    promotedOnly?: true
    useAiOnImage?: true
  }

  export type ContentSettingMaxAggregateInputType = {
    id?: true
    accountId?: true
    promptText?: true
    promptImage?: true
    promptHashtags?: true
    imageSource?: true
    targetUrl?: true
    autoPost?: true
    cronExpression?: true
    promotedOnly?: true
    useAiOnImage?: true
  }

  export type ContentSettingCountAggregateInputType = {
    id?: true
    accountId?: true
    promptText?: true
    promptImage?: true
    promptHashtags?: true
    imageSource?: true
    targetUrl?: true
    autoPost?: true
    cronExpression?: true
    promotedOnly?: true
    useAiOnImage?: true
    _all?: true
  }

  export type ContentSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSetting to aggregate.
     */
    where?: ContentSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSettings to fetch.
     */
    orderBy?: ContentSettingOrderByWithRelationInput | ContentSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentSettings
    **/
    _count?: true | ContentSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentSettingMaxAggregateInputType
  }

  export type GetContentSettingAggregateType<T extends ContentSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateContentSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentSetting[P]>
      : GetScalarType<T[P], AggregateContentSetting[P]>
  }




  export type ContentSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentSettingWhereInput
    orderBy?: ContentSettingOrderByWithAggregationInput | ContentSettingOrderByWithAggregationInput[]
    by: ContentSettingScalarFieldEnum[] | ContentSettingScalarFieldEnum
    having?: ContentSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentSettingCountAggregateInputType | true
    _min?: ContentSettingMinAggregateInputType
    _max?: ContentSettingMaxAggregateInputType
  }

  export type ContentSettingGroupByOutputType = {
    id: string
    accountId: string
    promptText: string | null
    promptImage: string | null
    promptHashtags: string | null
    imageSource: string | null
    targetUrl: string | null
    autoPost: boolean | null
    cronExpression: string | null
    promotedOnly: boolean | null
    useAiOnImage: boolean | null
    _count: ContentSettingCountAggregateOutputType | null
    _min: ContentSettingMinAggregateOutputType | null
    _max: ContentSettingMaxAggregateOutputType | null
  }

  type GetContentSettingGroupByPayload<T extends ContentSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentSettingGroupByOutputType[P]>
            : GetScalarType<T[P], ContentSettingGroupByOutputType[P]>
        }
      >
    >


  export type ContentSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    promptText?: boolean
    promptImage?: boolean
    promptHashtags?: boolean
    imageSource?: boolean
    targetUrl?: boolean
    autoPost?: boolean
    cronExpression?: boolean
    promotedOnly?: boolean
    useAiOnImage?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSetting"]>

  export type ContentSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    promptText?: boolean
    promptImage?: boolean
    promptHashtags?: boolean
    imageSource?: boolean
    targetUrl?: boolean
    autoPost?: boolean
    cronExpression?: boolean
    promotedOnly?: boolean
    useAiOnImage?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSetting"]>

  export type ContentSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    promptText?: boolean
    promptImage?: boolean
    promptHashtags?: boolean
    imageSource?: boolean
    targetUrl?: boolean
    autoPost?: boolean
    cronExpression?: boolean
    promotedOnly?: boolean
    useAiOnImage?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSetting"]>

  export type ContentSettingSelectScalar = {
    id?: boolean
    accountId?: boolean
    promptText?: boolean
    promptImage?: boolean
    promptHashtags?: boolean
    imageSource?: boolean
    targetUrl?: boolean
    autoPost?: boolean
    cronExpression?: boolean
    promotedOnly?: boolean
    useAiOnImage?: boolean
  }

  export type ContentSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "promptText" | "promptImage" | "promptHashtags" | "imageSource" | "targetUrl" | "autoPost" | "cronExpression" | "promotedOnly" | "useAiOnImage", ExtArgs["result"]["contentSetting"]>
  export type ContentSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type ContentSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type ContentSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $ContentSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentSetting"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      promptText: string | null
      promptImage: string | null
      promptHashtags: string | null
      imageSource: string | null
      targetUrl: string | null
      autoPost: boolean | null
      cronExpression: string | null
      promotedOnly: boolean | null
      useAiOnImage: boolean | null
    }, ExtArgs["result"]["contentSetting"]>
    composites: {}
  }

  type ContentSettingGetPayload<S extends boolean | null | undefined | ContentSettingDefaultArgs> = $Result.GetResult<Prisma.$ContentSettingPayload, S>

  type ContentSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentSettingCountAggregateInputType | true
    }

  export interface ContentSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentSetting'], meta: { name: 'ContentSetting' } }
    /**
     * Find zero or one ContentSetting that matches the filter.
     * @param {ContentSettingFindUniqueArgs} args - Arguments to find a ContentSetting
     * @example
     * // Get one ContentSetting
     * const contentSetting = await prisma.contentSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentSettingFindUniqueArgs>(args: SelectSubset<T, ContentSettingFindUniqueArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentSettingFindUniqueOrThrowArgs} args - Arguments to find a ContentSetting
     * @example
     * // Get one ContentSetting
     * const contentSetting = await prisma.contentSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSettingFindFirstArgs} args - Arguments to find a ContentSetting
     * @example
     * // Get one ContentSetting
     * const contentSetting = await prisma.contentSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentSettingFindFirstArgs>(args?: SelectSubset<T, ContentSettingFindFirstArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSettingFindFirstOrThrowArgs} args - Arguments to find a ContentSetting
     * @example
     * // Get one ContentSetting
     * const contentSetting = await prisma.contentSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentSettings
     * const contentSettings = await prisma.contentSetting.findMany()
     * 
     * // Get first 10 ContentSettings
     * const contentSettings = await prisma.contentSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentSettingWithIdOnly = await prisma.contentSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentSettingFindManyArgs>(args?: SelectSubset<T, ContentSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentSetting.
     * @param {ContentSettingCreateArgs} args - Arguments to create a ContentSetting.
     * @example
     * // Create one ContentSetting
     * const ContentSetting = await prisma.contentSetting.create({
     *   data: {
     *     // ... data to create a ContentSetting
     *   }
     * })
     * 
     */
    create<T extends ContentSettingCreateArgs>(args: SelectSubset<T, ContentSettingCreateArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentSettings.
     * @param {ContentSettingCreateManyArgs} args - Arguments to create many ContentSettings.
     * @example
     * // Create many ContentSettings
     * const contentSetting = await prisma.contentSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentSettingCreateManyArgs>(args?: SelectSubset<T, ContentSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentSettings and returns the data saved in the database.
     * @param {ContentSettingCreateManyAndReturnArgs} args - Arguments to create many ContentSettings.
     * @example
     * // Create many ContentSettings
     * const contentSetting = await prisma.contentSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentSettings and only return the `id`
     * const contentSettingWithIdOnly = await prisma.contentSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentSetting.
     * @param {ContentSettingDeleteArgs} args - Arguments to delete one ContentSetting.
     * @example
     * // Delete one ContentSetting
     * const ContentSetting = await prisma.contentSetting.delete({
     *   where: {
     *     // ... filter to delete one ContentSetting
     *   }
     * })
     * 
     */
    delete<T extends ContentSettingDeleteArgs>(args: SelectSubset<T, ContentSettingDeleteArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentSetting.
     * @param {ContentSettingUpdateArgs} args - Arguments to update one ContentSetting.
     * @example
     * // Update one ContentSetting
     * const contentSetting = await prisma.contentSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentSettingUpdateArgs>(args: SelectSubset<T, ContentSettingUpdateArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentSettings.
     * @param {ContentSettingDeleteManyArgs} args - Arguments to filter ContentSettings to delete.
     * @example
     * // Delete a few ContentSettings
     * const { count } = await prisma.contentSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentSettingDeleteManyArgs>(args?: SelectSubset<T, ContentSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentSettings
     * const contentSetting = await prisma.contentSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentSettingUpdateManyArgs>(args: SelectSubset<T, ContentSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSettings and returns the data updated in the database.
     * @param {ContentSettingUpdateManyAndReturnArgs} args - Arguments to update many ContentSettings.
     * @example
     * // Update many ContentSettings
     * const contentSetting = await prisma.contentSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentSettings and only return the `id`
     * const contentSettingWithIdOnly = await prisma.contentSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentSetting.
     * @param {ContentSettingUpsertArgs} args - Arguments to update or create a ContentSetting.
     * @example
     * // Update or create a ContentSetting
     * const contentSetting = await prisma.contentSetting.upsert({
     *   create: {
     *     // ... data to create a ContentSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentSetting we want to update
     *   }
     * })
     */
    upsert<T extends ContentSettingUpsertArgs>(args: SelectSubset<T, ContentSettingUpsertArgs<ExtArgs>>): Prisma__ContentSettingClient<$Result.GetResult<Prisma.$ContentSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSettingCountArgs} args - Arguments to filter ContentSettings to count.
     * @example
     * // Count the number of ContentSettings
     * const count = await prisma.contentSetting.count({
     *   where: {
     *     // ... the filter for the ContentSettings we want to count
     *   }
     * })
    **/
    count<T extends ContentSettingCountArgs>(
      args?: Subset<T, ContentSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentSettingAggregateArgs>(args: Subset<T, ContentSettingAggregateArgs>): Prisma.PrismaPromise<GetContentSettingAggregateType<T>>

    /**
     * Group by ContentSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentSettingGroupByArgs['orderBy'] }
        : { orderBy?: ContentSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentSetting model
   */
  readonly fields: ContentSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentSetting model
   */
  interface ContentSettingFieldRefs {
    readonly id: FieldRef<"ContentSetting", 'String'>
    readonly accountId: FieldRef<"ContentSetting", 'String'>
    readonly promptText: FieldRef<"ContentSetting", 'String'>
    readonly promptImage: FieldRef<"ContentSetting", 'String'>
    readonly promptHashtags: FieldRef<"ContentSetting", 'String'>
    readonly imageSource: FieldRef<"ContentSetting", 'String'>
    readonly targetUrl: FieldRef<"ContentSetting", 'String'>
    readonly autoPost: FieldRef<"ContentSetting", 'Boolean'>
    readonly cronExpression: FieldRef<"ContentSetting", 'String'>
    readonly promotedOnly: FieldRef<"ContentSetting", 'Boolean'>
    readonly useAiOnImage: FieldRef<"ContentSetting", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ContentSetting findUnique
   */
  export type ContentSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * Filter, which ContentSetting to fetch.
     */
    where: ContentSettingWhereUniqueInput
  }

  /**
   * ContentSetting findUniqueOrThrow
   */
  export type ContentSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * Filter, which ContentSetting to fetch.
     */
    where: ContentSettingWhereUniqueInput
  }

  /**
   * ContentSetting findFirst
   */
  export type ContentSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * Filter, which ContentSetting to fetch.
     */
    where?: ContentSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSettings to fetch.
     */
    orderBy?: ContentSettingOrderByWithRelationInput | ContentSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSettings.
     */
    cursor?: ContentSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSettings.
     */
    distinct?: ContentSettingScalarFieldEnum | ContentSettingScalarFieldEnum[]
  }

  /**
   * ContentSetting findFirstOrThrow
   */
  export type ContentSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * Filter, which ContentSetting to fetch.
     */
    where?: ContentSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSettings to fetch.
     */
    orderBy?: ContentSettingOrderByWithRelationInput | ContentSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSettings.
     */
    cursor?: ContentSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSettings.
     */
    distinct?: ContentSettingScalarFieldEnum | ContentSettingScalarFieldEnum[]
  }

  /**
   * ContentSetting findMany
   */
  export type ContentSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * Filter, which ContentSettings to fetch.
     */
    where?: ContentSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSettings to fetch.
     */
    orderBy?: ContentSettingOrderByWithRelationInput | ContentSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentSettings.
     */
    cursor?: ContentSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSettings.
     */
    skip?: number
    distinct?: ContentSettingScalarFieldEnum | ContentSettingScalarFieldEnum[]
  }

  /**
   * ContentSetting create
   */
  export type ContentSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentSetting.
     */
    data: XOR<ContentSettingCreateInput, ContentSettingUncheckedCreateInput>
  }

  /**
   * ContentSetting createMany
   */
  export type ContentSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentSettings.
     */
    data: ContentSettingCreateManyInput | ContentSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentSetting createManyAndReturn
   */
  export type ContentSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * The data used to create many ContentSettings.
     */
    data: ContentSettingCreateManyInput | ContentSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentSetting update
   */
  export type ContentSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentSetting.
     */
    data: XOR<ContentSettingUpdateInput, ContentSettingUncheckedUpdateInput>
    /**
     * Choose, which ContentSetting to update.
     */
    where: ContentSettingWhereUniqueInput
  }

  /**
   * ContentSetting updateMany
   */
  export type ContentSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentSettings.
     */
    data: XOR<ContentSettingUpdateManyMutationInput, ContentSettingUncheckedUpdateManyInput>
    /**
     * Filter which ContentSettings to update
     */
    where?: ContentSettingWhereInput
    /**
     * Limit how many ContentSettings to update.
     */
    limit?: number
  }

  /**
   * ContentSetting updateManyAndReturn
   */
  export type ContentSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * The data used to update ContentSettings.
     */
    data: XOR<ContentSettingUpdateManyMutationInput, ContentSettingUncheckedUpdateManyInput>
    /**
     * Filter which ContentSettings to update
     */
    where?: ContentSettingWhereInput
    /**
     * Limit how many ContentSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentSetting upsert
   */
  export type ContentSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentSetting to update in case it exists.
     */
    where: ContentSettingWhereUniqueInput
    /**
     * In case the ContentSetting found by the `where` argument doesn't exist, create a new ContentSetting with this data.
     */
    create: XOR<ContentSettingCreateInput, ContentSettingUncheckedCreateInput>
    /**
     * In case the ContentSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentSettingUpdateInput, ContentSettingUncheckedUpdateInput>
  }

  /**
   * ContentSetting delete
   */
  export type ContentSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
    /**
     * Filter which ContentSetting to delete.
     */
    where: ContentSettingWhereUniqueInput
  }

  /**
   * ContentSetting deleteMany
   */
  export type ContentSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSettings to delete
     */
    where?: ContentSettingWhereInput
    /**
     * Limit how many ContentSettings to delete.
     */
    limit?: number
  }

  /**
   * ContentSetting without action
   */
  export type ContentSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSetting
     */
    select?: ContentSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSetting
     */
    omit?: ContentSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSettingInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledPost
   */

  export type AggregateScheduledPost = {
    _count: ScheduledPostCountAggregateOutputType | null
    _min: ScheduledPostMinAggregateOutputType | null
    _max: ScheduledPostMaxAggregateOutputType | null
  }

  export type ScheduledPostMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    scheduledAt: Date | null
    status: string | null
    createdAt: Date | null
    postId: string | null
  }

  export type ScheduledPostMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    scheduledAt: Date | null
    status: string | null
    createdAt: Date | null
    postId: string | null
  }

  export type ScheduledPostCountAggregateOutputType = {
    id: number
    accountId: number
    scheduledAt: number
    status: number
    createdAt: number
    postId: number
    _all: number
  }


  export type ScheduledPostMinAggregateInputType = {
    id?: true
    accountId?: true
    scheduledAt?: true
    status?: true
    createdAt?: true
    postId?: true
  }

  export type ScheduledPostMaxAggregateInputType = {
    id?: true
    accountId?: true
    scheduledAt?: true
    status?: true
    createdAt?: true
    postId?: true
  }

  export type ScheduledPostCountAggregateInputType = {
    id?: true
    accountId?: true
    scheduledAt?: true
    status?: true
    createdAt?: true
    postId?: true
    _all?: true
  }

  export type ScheduledPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledPost to aggregate.
     */
    where?: ScheduledPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledPosts to fetch.
     */
    orderBy?: ScheduledPostOrderByWithRelationInput | ScheduledPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledPosts
    **/
    _count?: true | ScheduledPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledPostMaxAggregateInputType
  }

  export type GetScheduledPostAggregateType<T extends ScheduledPostAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledPost[P]>
      : GetScalarType<T[P], AggregateScheduledPost[P]>
  }




  export type ScheduledPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledPostWhereInput
    orderBy?: ScheduledPostOrderByWithAggregationInput | ScheduledPostOrderByWithAggregationInput[]
    by: ScheduledPostScalarFieldEnum[] | ScheduledPostScalarFieldEnum
    having?: ScheduledPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledPostCountAggregateInputType | true
    _min?: ScheduledPostMinAggregateInputType
    _max?: ScheduledPostMaxAggregateInputType
  }

  export type ScheduledPostGroupByOutputType = {
    id: string
    accountId: string
    scheduledAt: Date
    status: string
    createdAt: Date
    postId: string | null
    _count: ScheduledPostCountAggregateOutputType | null
    _min: ScheduledPostMinAggregateOutputType | null
    _max: ScheduledPostMaxAggregateOutputType | null
  }

  type GetScheduledPostGroupByPayload<T extends ScheduledPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledPostGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledPostGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    postId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    post?: boolean | ScheduledPost$postArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledPost"]>

  export type ScheduledPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    postId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    post?: boolean | ScheduledPost$postArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledPost"]>

  export type ScheduledPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    postId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    post?: boolean | ScheduledPost$postArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledPost"]>

  export type ScheduledPostSelectScalar = {
    id?: boolean
    accountId?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    postId?: boolean
  }

  export type ScheduledPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "scheduledAt" | "status" | "createdAt" | "postId", ExtArgs["result"]["scheduledPost"]>
  export type ScheduledPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    post?: boolean | ScheduledPost$postArgs<ExtArgs>
  }
  export type ScheduledPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    post?: boolean | ScheduledPost$postArgs<ExtArgs>
  }
  export type ScheduledPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    post?: boolean | ScheduledPost$postArgs<ExtArgs>
  }

  export type $ScheduledPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledPost"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      scheduledAt: Date
      status: string
      createdAt: Date
      postId: string | null
    }, ExtArgs["result"]["scheduledPost"]>
    composites: {}
  }

  type ScheduledPostGetPayload<S extends boolean | null | undefined | ScheduledPostDefaultArgs> = $Result.GetResult<Prisma.$ScheduledPostPayload, S>

  type ScheduledPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledPostCountAggregateInputType | true
    }

  export interface ScheduledPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledPost'], meta: { name: 'ScheduledPost' } }
    /**
     * Find zero or one ScheduledPost that matches the filter.
     * @param {ScheduledPostFindUniqueArgs} args - Arguments to find a ScheduledPost
     * @example
     * // Get one ScheduledPost
     * const scheduledPost = await prisma.scheduledPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledPostFindUniqueArgs>(args: SelectSubset<T, ScheduledPostFindUniqueArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledPostFindUniqueOrThrowArgs} args - Arguments to find a ScheduledPost
     * @example
     * // Get one ScheduledPost
     * const scheduledPost = await prisma.scheduledPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledPostFindFirstArgs} args - Arguments to find a ScheduledPost
     * @example
     * // Get one ScheduledPost
     * const scheduledPost = await prisma.scheduledPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledPostFindFirstArgs>(args?: SelectSubset<T, ScheduledPostFindFirstArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledPostFindFirstOrThrowArgs} args - Arguments to find a ScheduledPost
     * @example
     * // Get one ScheduledPost
     * const scheduledPost = await prisma.scheduledPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledPosts
     * const scheduledPosts = await prisma.scheduledPost.findMany()
     * 
     * // Get first 10 ScheduledPosts
     * const scheduledPosts = await prisma.scheduledPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledPostWithIdOnly = await prisma.scheduledPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledPostFindManyArgs>(args?: SelectSubset<T, ScheduledPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledPost.
     * @param {ScheduledPostCreateArgs} args - Arguments to create a ScheduledPost.
     * @example
     * // Create one ScheduledPost
     * const ScheduledPost = await prisma.scheduledPost.create({
     *   data: {
     *     // ... data to create a ScheduledPost
     *   }
     * })
     * 
     */
    create<T extends ScheduledPostCreateArgs>(args: SelectSubset<T, ScheduledPostCreateArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledPosts.
     * @param {ScheduledPostCreateManyArgs} args - Arguments to create many ScheduledPosts.
     * @example
     * // Create many ScheduledPosts
     * const scheduledPost = await prisma.scheduledPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledPostCreateManyArgs>(args?: SelectSubset<T, ScheduledPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledPosts and returns the data saved in the database.
     * @param {ScheduledPostCreateManyAndReturnArgs} args - Arguments to create many ScheduledPosts.
     * @example
     * // Create many ScheduledPosts
     * const scheduledPost = await prisma.scheduledPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledPosts and only return the `id`
     * const scheduledPostWithIdOnly = await prisma.scheduledPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledPostCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledPost.
     * @param {ScheduledPostDeleteArgs} args - Arguments to delete one ScheduledPost.
     * @example
     * // Delete one ScheduledPost
     * const ScheduledPost = await prisma.scheduledPost.delete({
     *   where: {
     *     // ... filter to delete one ScheduledPost
     *   }
     * })
     * 
     */
    delete<T extends ScheduledPostDeleteArgs>(args: SelectSubset<T, ScheduledPostDeleteArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledPost.
     * @param {ScheduledPostUpdateArgs} args - Arguments to update one ScheduledPost.
     * @example
     * // Update one ScheduledPost
     * const scheduledPost = await prisma.scheduledPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledPostUpdateArgs>(args: SelectSubset<T, ScheduledPostUpdateArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledPosts.
     * @param {ScheduledPostDeleteManyArgs} args - Arguments to filter ScheduledPosts to delete.
     * @example
     * // Delete a few ScheduledPosts
     * const { count } = await prisma.scheduledPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledPostDeleteManyArgs>(args?: SelectSubset<T, ScheduledPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledPosts
     * const scheduledPost = await prisma.scheduledPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledPostUpdateManyArgs>(args: SelectSubset<T, ScheduledPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledPosts and returns the data updated in the database.
     * @param {ScheduledPostUpdateManyAndReturnArgs} args - Arguments to update many ScheduledPosts.
     * @example
     * // Update many ScheduledPosts
     * const scheduledPost = await prisma.scheduledPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledPosts and only return the `id`
     * const scheduledPostWithIdOnly = await prisma.scheduledPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduledPostUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledPost.
     * @param {ScheduledPostUpsertArgs} args - Arguments to update or create a ScheduledPost.
     * @example
     * // Update or create a ScheduledPost
     * const scheduledPost = await prisma.scheduledPost.upsert({
     *   create: {
     *     // ... data to create a ScheduledPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledPost we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledPostUpsertArgs>(args: SelectSubset<T, ScheduledPostUpsertArgs<ExtArgs>>): Prisma__ScheduledPostClient<$Result.GetResult<Prisma.$ScheduledPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledPostCountArgs} args - Arguments to filter ScheduledPosts to count.
     * @example
     * // Count the number of ScheduledPosts
     * const count = await prisma.scheduledPost.count({
     *   where: {
     *     // ... the filter for the ScheduledPosts we want to count
     *   }
     * })
    **/
    count<T extends ScheduledPostCountArgs>(
      args?: Subset<T, ScheduledPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduledPostAggregateArgs>(args: Subset<T, ScheduledPostAggregateArgs>): Prisma.PrismaPromise<GetScheduledPostAggregateType<T>>

    /**
     * Group by ScheduledPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduledPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledPostGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduledPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledPost model
   */
  readonly fields: ScheduledPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends ScheduledPost$postArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledPost$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduledPost model
   */
  interface ScheduledPostFieldRefs {
    readonly id: FieldRef<"ScheduledPost", 'String'>
    readonly accountId: FieldRef<"ScheduledPost", 'String'>
    readonly scheduledAt: FieldRef<"ScheduledPost", 'DateTime'>
    readonly status: FieldRef<"ScheduledPost", 'String'>
    readonly createdAt: FieldRef<"ScheduledPost", 'DateTime'>
    readonly postId: FieldRef<"ScheduledPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledPost findUnique
   */
  export type ScheduledPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledPost to fetch.
     */
    where: ScheduledPostWhereUniqueInput
  }

  /**
   * ScheduledPost findUniqueOrThrow
   */
  export type ScheduledPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledPost to fetch.
     */
    where: ScheduledPostWhereUniqueInput
  }

  /**
   * ScheduledPost findFirst
   */
  export type ScheduledPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledPost to fetch.
     */
    where?: ScheduledPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledPosts to fetch.
     */
    orderBy?: ScheduledPostOrderByWithRelationInput | ScheduledPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledPosts.
     */
    cursor?: ScheduledPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledPosts.
     */
    distinct?: ScheduledPostScalarFieldEnum | ScheduledPostScalarFieldEnum[]
  }

  /**
   * ScheduledPost findFirstOrThrow
   */
  export type ScheduledPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledPost to fetch.
     */
    where?: ScheduledPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledPosts to fetch.
     */
    orderBy?: ScheduledPostOrderByWithRelationInput | ScheduledPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledPosts.
     */
    cursor?: ScheduledPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledPosts.
     */
    distinct?: ScheduledPostScalarFieldEnum | ScheduledPostScalarFieldEnum[]
  }

  /**
   * ScheduledPost findMany
   */
  export type ScheduledPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledPosts to fetch.
     */
    where?: ScheduledPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledPosts to fetch.
     */
    orderBy?: ScheduledPostOrderByWithRelationInput | ScheduledPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledPosts.
     */
    cursor?: ScheduledPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledPosts.
     */
    skip?: number
    distinct?: ScheduledPostScalarFieldEnum | ScheduledPostScalarFieldEnum[]
  }

  /**
   * ScheduledPost create
   */
  export type ScheduledPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledPost.
     */
    data: XOR<ScheduledPostCreateInput, ScheduledPostUncheckedCreateInput>
  }

  /**
   * ScheduledPost createMany
   */
  export type ScheduledPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledPosts.
     */
    data: ScheduledPostCreateManyInput | ScheduledPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduledPost createManyAndReturn
   */
  export type ScheduledPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledPosts.
     */
    data: ScheduledPostCreateManyInput | ScheduledPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledPost update
   */
  export type ScheduledPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledPost.
     */
    data: XOR<ScheduledPostUpdateInput, ScheduledPostUncheckedUpdateInput>
    /**
     * Choose, which ScheduledPost to update.
     */
    where: ScheduledPostWhereUniqueInput
  }

  /**
   * ScheduledPost updateMany
   */
  export type ScheduledPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledPosts.
     */
    data: XOR<ScheduledPostUpdateManyMutationInput, ScheduledPostUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledPosts to update
     */
    where?: ScheduledPostWhereInput
    /**
     * Limit how many ScheduledPosts to update.
     */
    limit?: number
  }

  /**
   * ScheduledPost updateManyAndReturn
   */
  export type ScheduledPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledPosts.
     */
    data: XOR<ScheduledPostUpdateManyMutationInput, ScheduledPostUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledPosts to update
     */
    where?: ScheduledPostWhereInput
    /**
     * Limit how many ScheduledPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledPost upsert
   */
  export type ScheduledPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledPost to update in case it exists.
     */
    where: ScheduledPostWhereUniqueInput
    /**
     * In case the ScheduledPost found by the `where` argument doesn't exist, create a new ScheduledPost with this data.
     */
    create: XOR<ScheduledPostCreateInput, ScheduledPostUncheckedCreateInput>
    /**
     * In case the ScheduledPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledPostUpdateInput, ScheduledPostUncheckedUpdateInput>
  }

  /**
   * ScheduledPost delete
   */
  export type ScheduledPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
    /**
     * Filter which ScheduledPost to delete.
     */
    where: ScheduledPostWhereUniqueInput
  }

  /**
   * ScheduledPost deleteMany
   */
  export type ScheduledPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledPosts to delete
     */
    where?: ScheduledPostWhereInput
    /**
     * Limit how many ScheduledPosts to delete.
     */
    limit?: number
  }

  /**
   * ScheduledPost.post
   */
  export type ScheduledPost$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * ScheduledPost without action
   */
  export type ScheduledPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledPost
     */
    select?: ScheduledPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledPost
     */
    omit?: ScheduledPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    login: 'login',
    password: 'password',
    proxy: 'proxy',
    method: 'method',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    content: 'content',
    imageUrl: 'imageUrl',
    hashtags: 'hashtags',
    targetUrl: 'targetUrl',
    promoted: 'promoted',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ContentSettingScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    promptText: 'promptText',
    promptImage: 'promptImage',
    promptHashtags: 'promptHashtags',
    imageSource: 'imageSource',
    targetUrl: 'targetUrl',
    autoPost: 'autoPost',
    cronExpression: 'cronExpression',
    promotedOnly: 'promotedOnly',
    useAiOnImage: 'useAiOnImage'
  };

  export type ContentSettingScalarFieldEnum = (typeof ContentSettingScalarFieldEnum)[keyof typeof ContentSettingScalarFieldEnum]


  export const ScheduledPostScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    scheduledAt: 'scheduledAt',
    status: 'status',
    createdAt: 'createdAt',
    postId: 'postId'
  };

  export type ScheduledPostScalarFieldEnum = (typeof ScheduledPostScalarFieldEnum)[keyof typeof ScheduledPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    login?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    proxy?: StringNullableFilter<"Account"> | string | null
    method?: IntFilter<"Account"> | number
    userAgent?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    posts?: PostListRelationFilter
    contentSettings?: XOR<ContentSettingNullableScalarRelationFilter, ContentSettingWhereInput> | null
    ScheduledPost?: ScheduledPostListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    proxy?: SortOrderInput | SortOrder
    method?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    contentSettings?: ContentSettingOrderByWithRelationInput
    ScheduledPost?: ScheduledPostOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    login?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    proxy?: StringNullableFilter<"Account"> | string | null
    method?: IntFilter<"Account"> | number
    userAgent?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    posts?: PostListRelationFilter
    contentSettings?: XOR<ContentSettingNullableScalarRelationFilter, ContentSettingWhereInput> | null
    ScheduledPost?: ScheduledPostListRelationFilter
  }, "id" | "login">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    proxy?: SortOrderInput | SortOrder
    method?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    login?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    proxy?: StringNullableWithAggregatesFilter<"Account"> | string | null
    method?: IntWithAggregatesFilter<"Account"> | number
    userAgent?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    accountId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    hashtags?: StringNullableFilter<"Post"> | string | null
    targetUrl?: StringNullableFilter<"Post"> | string | null
    promoted?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    ScheduledPost?: ScheduledPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    hashtags?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    promoted?: SortOrder
    createdAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    ScheduledPost?: ScheduledPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    accountId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    hashtags?: StringNullableFilter<"Post"> | string | null
    targetUrl?: StringNullableFilter<"Post"> | string | null
    promoted?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    ScheduledPost?: ScheduledPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    hashtags?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    promoted?: SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    accountId?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    hashtags?: StringNullableWithAggregatesFilter<"Post"> | string | null
    targetUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    promoted?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type ContentSettingWhereInput = {
    AND?: ContentSettingWhereInput | ContentSettingWhereInput[]
    OR?: ContentSettingWhereInput[]
    NOT?: ContentSettingWhereInput | ContentSettingWhereInput[]
    id?: StringFilter<"ContentSetting"> | string
    accountId?: StringFilter<"ContentSetting"> | string
    promptText?: StringNullableFilter<"ContentSetting"> | string | null
    promptImage?: StringNullableFilter<"ContentSetting"> | string | null
    promptHashtags?: StringNullableFilter<"ContentSetting"> | string | null
    imageSource?: StringNullableFilter<"ContentSetting"> | string | null
    targetUrl?: StringNullableFilter<"ContentSetting"> | string | null
    autoPost?: BoolNullableFilter<"ContentSetting"> | boolean | null
    cronExpression?: StringNullableFilter<"ContentSetting"> | string | null
    promotedOnly?: BoolNullableFilter<"ContentSetting"> | boolean | null
    useAiOnImage?: BoolNullableFilter<"ContentSetting"> | boolean | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type ContentSettingOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    promptText?: SortOrderInput | SortOrder
    promptImage?: SortOrderInput | SortOrder
    promptHashtags?: SortOrderInput | SortOrder
    imageSource?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    autoPost?: SortOrderInput | SortOrder
    cronExpression?: SortOrderInput | SortOrder
    promotedOnly?: SortOrderInput | SortOrder
    useAiOnImage?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type ContentSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId?: string
    AND?: ContentSettingWhereInput | ContentSettingWhereInput[]
    OR?: ContentSettingWhereInput[]
    NOT?: ContentSettingWhereInput | ContentSettingWhereInput[]
    promptText?: StringNullableFilter<"ContentSetting"> | string | null
    promptImage?: StringNullableFilter<"ContentSetting"> | string | null
    promptHashtags?: StringNullableFilter<"ContentSetting"> | string | null
    imageSource?: StringNullableFilter<"ContentSetting"> | string | null
    targetUrl?: StringNullableFilter<"ContentSetting"> | string | null
    autoPost?: BoolNullableFilter<"ContentSetting"> | boolean | null
    cronExpression?: StringNullableFilter<"ContentSetting"> | string | null
    promotedOnly?: BoolNullableFilter<"ContentSetting"> | boolean | null
    useAiOnImage?: BoolNullableFilter<"ContentSetting"> | boolean | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "accountId">

  export type ContentSettingOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    promptText?: SortOrderInput | SortOrder
    promptImage?: SortOrderInput | SortOrder
    promptHashtags?: SortOrderInput | SortOrder
    imageSource?: SortOrderInput | SortOrder
    targetUrl?: SortOrderInput | SortOrder
    autoPost?: SortOrderInput | SortOrder
    cronExpression?: SortOrderInput | SortOrder
    promotedOnly?: SortOrderInput | SortOrder
    useAiOnImage?: SortOrderInput | SortOrder
    _count?: ContentSettingCountOrderByAggregateInput
    _max?: ContentSettingMaxOrderByAggregateInput
    _min?: ContentSettingMinOrderByAggregateInput
  }

  export type ContentSettingScalarWhereWithAggregatesInput = {
    AND?: ContentSettingScalarWhereWithAggregatesInput | ContentSettingScalarWhereWithAggregatesInput[]
    OR?: ContentSettingScalarWhereWithAggregatesInput[]
    NOT?: ContentSettingScalarWhereWithAggregatesInput | ContentSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentSetting"> | string
    accountId?: StringWithAggregatesFilter<"ContentSetting"> | string
    promptText?: StringNullableWithAggregatesFilter<"ContentSetting"> | string | null
    promptImage?: StringNullableWithAggregatesFilter<"ContentSetting"> | string | null
    promptHashtags?: StringNullableWithAggregatesFilter<"ContentSetting"> | string | null
    imageSource?: StringNullableWithAggregatesFilter<"ContentSetting"> | string | null
    targetUrl?: StringNullableWithAggregatesFilter<"ContentSetting"> | string | null
    autoPost?: BoolNullableWithAggregatesFilter<"ContentSetting"> | boolean | null
    cronExpression?: StringNullableWithAggregatesFilter<"ContentSetting"> | string | null
    promotedOnly?: BoolNullableWithAggregatesFilter<"ContentSetting"> | boolean | null
    useAiOnImage?: BoolNullableWithAggregatesFilter<"ContentSetting"> | boolean | null
  }

  export type ScheduledPostWhereInput = {
    AND?: ScheduledPostWhereInput | ScheduledPostWhereInput[]
    OR?: ScheduledPostWhereInput[]
    NOT?: ScheduledPostWhereInput | ScheduledPostWhereInput[]
    id?: StringFilter<"ScheduledPost"> | string
    accountId?: StringFilter<"ScheduledPost"> | string
    scheduledAt?: DateTimeFilter<"ScheduledPost"> | Date | string
    status?: StringFilter<"ScheduledPost"> | string
    createdAt?: DateTimeFilter<"ScheduledPost"> | Date | string
    postId?: StringNullableFilter<"ScheduledPost"> | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type ScheduledPostOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type ScheduledPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledPostWhereInput | ScheduledPostWhereInput[]
    OR?: ScheduledPostWhereInput[]
    NOT?: ScheduledPostWhereInput | ScheduledPostWhereInput[]
    accountId?: StringFilter<"ScheduledPost"> | string
    scheduledAt?: DateTimeFilter<"ScheduledPost"> | Date | string
    status?: StringFilter<"ScheduledPost"> | string
    createdAt?: DateTimeFilter<"ScheduledPost"> | Date | string
    postId?: StringNullableFilter<"ScheduledPost"> | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type ScheduledPostOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrderInput | SortOrder
    _count?: ScheduledPostCountOrderByAggregateInput
    _max?: ScheduledPostMaxOrderByAggregateInput
    _min?: ScheduledPostMinOrderByAggregateInput
  }

  export type ScheduledPostScalarWhereWithAggregatesInput = {
    AND?: ScheduledPostScalarWhereWithAggregatesInput | ScheduledPostScalarWhereWithAggregatesInput[]
    OR?: ScheduledPostScalarWhereWithAggregatesInput[]
    NOT?: ScheduledPostScalarWhereWithAggregatesInput | ScheduledPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledPost"> | string
    accountId?: StringWithAggregatesFilter<"ScheduledPost"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"ScheduledPost"> | Date | string
    status?: StringWithAggregatesFilter<"ScheduledPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledPost"> | Date | string
    postId?: StringNullableWithAggregatesFilter<"ScheduledPost"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutAccountInput
    contentSettings?: ContentSettingCreateNestedOneWithoutAccountInput
    ScheduledPost?: ScheduledPostCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAccountInput
    contentSettings?: ContentSettingUncheckedCreateNestedOneWithoutAccountInput
    ScheduledPost?: ScheduledPostUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAccountNestedInput
    contentSettings?: ContentSettingUpdateOneWithoutAccountNestedInput
    ScheduledPost?: ScheduledPostUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAccountNestedInput
    contentSettings?: ContentSettingUncheckedUpdateOneWithoutAccountNestedInput
    ScheduledPost?: ScheduledPostUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutPostsInput
    ScheduledPost?: ScheduledPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    accountId: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
    ScheduledPost?: ScheduledPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutPostsNestedInput
    ScheduledPost?: ScheduledPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduledPost?: ScheduledPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    accountId: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentSettingCreateInput = {
    id?: string
    promptText?: string | null
    promptImage?: string | null
    promptHashtags?: string | null
    imageSource?: string | null
    targetUrl?: string | null
    autoPost?: boolean | null
    cronExpression?: string | null
    promotedOnly?: boolean | null
    useAiOnImage?: boolean | null
    account: AccountCreateNestedOneWithoutContentSettingsInput
  }

  export type ContentSettingUncheckedCreateInput = {
    id?: string
    accountId: string
    promptText?: string | null
    promptImage?: string | null
    promptHashtags?: string | null
    imageSource?: string | null
    targetUrl?: string | null
    autoPost?: boolean | null
    cronExpression?: string | null
    promotedOnly?: boolean | null
    useAiOnImage?: boolean | null
  }

  export type ContentSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    promptImage?: NullableStringFieldUpdateOperationsInput | string | null
    promptHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    promotedOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    useAiOnImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    account?: AccountUpdateOneRequiredWithoutContentSettingsNestedInput
  }

  export type ContentSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    promptImage?: NullableStringFieldUpdateOperationsInput | string | null
    promptHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    promotedOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    useAiOnImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContentSettingCreateManyInput = {
    id?: string
    accountId: string
    promptText?: string | null
    promptImage?: string | null
    promptHashtags?: string | null
    imageSource?: string | null
    targetUrl?: string | null
    autoPost?: boolean | null
    cronExpression?: string | null
    promotedOnly?: boolean | null
    useAiOnImage?: boolean | null
  }

  export type ContentSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    promptImage?: NullableStringFieldUpdateOperationsInput | string | null
    promptHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    promotedOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    useAiOnImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContentSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    promptImage?: NullableStringFieldUpdateOperationsInput | string | null
    promptHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    promotedOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    useAiOnImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ScheduledPostCreateInput = {
    id?: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutScheduledPostInput
    post?: PostCreateNestedOneWithoutScheduledPostInput
  }

  export type ScheduledPostUncheckedCreateInput = {
    id?: string
    accountId: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type ScheduledPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutScheduledPostNestedInput
    post?: PostUpdateOneWithoutScheduledPostNestedInput
  }

  export type ScheduledPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledPostCreateManyInput = {
    id?: string
    accountId: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type ScheduledPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ContentSettingNullableScalarRelationFilter = {
    is?: ContentSettingWhereInput | null
    isNot?: ContentSettingWhereInput | null
  }

  export type ScheduledPostListRelationFilter = {
    every?: ScheduledPostWhereInput
    some?: ScheduledPostWhereInput
    none?: ScheduledPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduledPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    proxy?: SortOrder
    method?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    method?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    proxy?: SortOrder
    method?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    proxy?: SortOrder
    method?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    method?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    hashtags?: SortOrder
    targetUrl?: SortOrder
    promoted?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    hashtags?: SortOrder
    targetUrl?: SortOrder
    promoted?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    hashtags?: SortOrder
    targetUrl?: SortOrder
    promoted?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ContentSettingCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    promptText?: SortOrder
    promptImage?: SortOrder
    promptHashtags?: SortOrder
    imageSource?: SortOrder
    targetUrl?: SortOrder
    autoPost?: SortOrder
    cronExpression?: SortOrder
    promotedOnly?: SortOrder
    useAiOnImage?: SortOrder
  }

  export type ContentSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    promptText?: SortOrder
    promptImage?: SortOrder
    promptHashtags?: SortOrder
    imageSource?: SortOrder
    targetUrl?: SortOrder
    autoPost?: SortOrder
    cronExpression?: SortOrder
    promotedOnly?: SortOrder
    useAiOnImage?: SortOrder
  }

  export type ContentSettingMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    promptText?: SortOrder
    promptImage?: SortOrder
    promptHashtags?: SortOrder
    imageSource?: SortOrder
    targetUrl?: SortOrder
    autoPost?: SortOrder
    cronExpression?: SortOrder
    promotedOnly?: SortOrder
    useAiOnImage?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type ScheduledPostCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type ScheduledPostMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type ScheduledPostMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type PostCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ContentSettingCreateNestedOneWithoutAccountInput = {
    create?: XOR<ContentSettingCreateWithoutAccountInput, ContentSettingUncheckedCreateWithoutAccountInput>
    connectOrCreate?: ContentSettingCreateOrConnectWithoutAccountInput
    connect?: ContentSettingWhereUniqueInput
  }

  export type ScheduledPostCreateNestedManyWithoutAccountInput = {
    create?: XOR<ScheduledPostCreateWithoutAccountInput, ScheduledPostUncheckedCreateWithoutAccountInput> | ScheduledPostCreateWithoutAccountInput[] | ScheduledPostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutAccountInput | ScheduledPostCreateOrConnectWithoutAccountInput[]
    createMany?: ScheduledPostCreateManyAccountInputEnvelope
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ContentSettingUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<ContentSettingCreateWithoutAccountInput, ContentSettingUncheckedCreateWithoutAccountInput>
    connectOrCreate?: ContentSettingCreateOrConnectWithoutAccountInput
    connect?: ContentSettingWhereUniqueInput
  }

  export type ScheduledPostUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ScheduledPostCreateWithoutAccountInput, ScheduledPostUncheckedCreateWithoutAccountInput> | ScheduledPostCreateWithoutAccountInput[] | ScheduledPostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutAccountInput | ScheduledPostCreateOrConnectWithoutAccountInput[]
    createMany?: ScheduledPostCreateManyAccountInputEnvelope
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAccountInput | PostUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAccountInput | PostUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAccountInput | PostUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ContentSettingUpdateOneWithoutAccountNestedInput = {
    create?: XOR<ContentSettingCreateWithoutAccountInput, ContentSettingUncheckedCreateWithoutAccountInput>
    connectOrCreate?: ContentSettingCreateOrConnectWithoutAccountInput
    upsert?: ContentSettingUpsertWithoutAccountInput
    disconnect?: ContentSettingWhereInput | boolean
    delete?: ContentSettingWhereInput | boolean
    connect?: ContentSettingWhereUniqueInput
    update?: XOR<XOR<ContentSettingUpdateToOneWithWhereWithoutAccountInput, ContentSettingUpdateWithoutAccountInput>, ContentSettingUncheckedUpdateWithoutAccountInput>
  }

  export type ScheduledPostUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ScheduledPostCreateWithoutAccountInput, ScheduledPostUncheckedCreateWithoutAccountInput> | ScheduledPostCreateWithoutAccountInput[] | ScheduledPostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutAccountInput | ScheduledPostCreateOrConnectWithoutAccountInput[]
    upsert?: ScheduledPostUpsertWithWhereUniqueWithoutAccountInput | ScheduledPostUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ScheduledPostCreateManyAccountInputEnvelope
    set?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    disconnect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    delete?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    update?: ScheduledPostUpdateWithWhereUniqueWithoutAccountInput | ScheduledPostUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ScheduledPostUpdateManyWithWhereWithoutAccountInput | ScheduledPostUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ScheduledPostScalarWhereInput | ScheduledPostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAccountInput | PostUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAccountInput | PostUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAccountInput | PostUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ContentSettingUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<ContentSettingCreateWithoutAccountInput, ContentSettingUncheckedCreateWithoutAccountInput>
    connectOrCreate?: ContentSettingCreateOrConnectWithoutAccountInput
    upsert?: ContentSettingUpsertWithoutAccountInput
    disconnect?: ContentSettingWhereInput | boolean
    delete?: ContentSettingWhereInput | boolean
    connect?: ContentSettingWhereUniqueInput
    update?: XOR<XOR<ContentSettingUpdateToOneWithWhereWithoutAccountInput, ContentSettingUpdateWithoutAccountInput>, ContentSettingUncheckedUpdateWithoutAccountInput>
  }

  export type ScheduledPostUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ScheduledPostCreateWithoutAccountInput, ScheduledPostUncheckedCreateWithoutAccountInput> | ScheduledPostCreateWithoutAccountInput[] | ScheduledPostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutAccountInput | ScheduledPostCreateOrConnectWithoutAccountInput[]
    upsert?: ScheduledPostUpsertWithWhereUniqueWithoutAccountInput | ScheduledPostUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ScheduledPostCreateManyAccountInputEnvelope
    set?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    disconnect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    delete?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    update?: ScheduledPostUpdateWithWhereUniqueWithoutAccountInput | ScheduledPostUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ScheduledPostUpdateManyWithWhereWithoutAccountInput | ScheduledPostUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ScheduledPostScalarWhereInput | ScheduledPostScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutPostsInput = {
    create?: XOR<AccountCreateWithoutPostsInput, AccountUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPostsInput
    connect?: AccountWhereUniqueInput
  }

  export type ScheduledPostCreateNestedManyWithoutPostInput = {
    create?: XOR<ScheduledPostCreateWithoutPostInput, ScheduledPostUncheckedCreateWithoutPostInput> | ScheduledPostCreateWithoutPostInput[] | ScheduledPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutPostInput | ScheduledPostCreateOrConnectWithoutPostInput[]
    createMany?: ScheduledPostCreateManyPostInputEnvelope
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
  }

  export type ScheduledPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ScheduledPostCreateWithoutPostInput, ScheduledPostUncheckedCreateWithoutPostInput> | ScheduledPostCreateWithoutPostInput[] | ScheduledPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutPostInput | ScheduledPostCreateOrConnectWithoutPostInput[]
    createMany?: ScheduledPostCreateManyPostInputEnvelope
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<AccountCreateWithoutPostsInput, AccountUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPostsInput
    upsert?: AccountUpsertWithoutPostsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPostsInput, AccountUpdateWithoutPostsInput>, AccountUncheckedUpdateWithoutPostsInput>
  }

  export type ScheduledPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<ScheduledPostCreateWithoutPostInput, ScheduledPostUncheckedCreateWithoutPostInput> | ScheduledPostCreateWithoutPostInput[] | ScheduledPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutPostInput | ScheduledPostCreateOrConnectWithoutPostInput[]
    upsert?: ScheduledPostUpsertWithWhereUniqueWithoutPostInput | ScheduledPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ScheduledPostCreateManyPostInputEnvelope
    set?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    disconnect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    delete?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    update?: ScheduledPostUpdateWithWhereUniqueWithoutPostInput | ScheduledPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ScheduledPostUpdateManyWithWhereWithoutPostInput | ScheduledPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ScheduledPostScalarWhereInput | ScheduledPostScalarWhereInput[]
  }

  export type ScheduledPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ScheduledPostCreateWithoutPostInput, ScheduledPostUncheckedCreateWithoutPostInput> | ScheduledPostCreateWithoutPostInput[] | ScheduledPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ScheduledPostCreateOrConnectWithoutPostInput | ScheduledPostCreateOrConnectWithoutPostInput[]
    upsert?: ScheduledPostUpsertWithWhereUniqueWithoutPostInput | ScheduledPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ScheduledPostCreateManyPostInputEnvelope
    set?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    disconnect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    delete?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    connect?: ScheduledPostWhereUniqueInput | ScheduledPostWhereUniqueInput[]
    update?: ScheduledPostUpdateWithWhereUniqueWithoutPostInput | ScheduledPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ScheduledPostUpdateManyWithWhereWithoutPostInput | ScheduledPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ScheduledPostScalarWhereInput | ScheduledPostScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutContentSettingsInput = {
    create?: XOR<AccountCreateWithoutContentSettingsInput, AccountUncheckedCreateWithoutContentSettingsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutContentSettingsInput
    connect?: AccountWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AccountUpdateOneRequiredWithoutContentSettingsNestedInput = {
    create?: XOR<AccountCreateWithoutContentSettingsInput, AccountUncheckedCreateWithoutContentSettingsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutContentSettingsInput
    upsert?: AccountUpsertWithoutContentSettingsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutContentSettingsInput, AccountUpdateWithoutContentSettingsInput>, AccountUncheckedUpdateWithoutContentSettingsInput>
  }

  export type AccountCreateNestedOneWithoutScheduledPostInput = {
    create?: XOR<AccountCreateWithoutScheduledPostInput, AccountUncheckedCreateWithoutScheduledPostInput>
    connectOrCreate?: AccountCreateOrConnectWithoutScheduledPostInput
    connect?: AccountWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutScheduledPostInput = {
    create?: XOR<PostCreateWithoutScheduledPostInput, PostUncheckedCreateWithoutScheduledPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutScheduledPostInput
    connect?: PostWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutScheduledPostNestedInput = {
    create?: XOR<AccountCreateWithoutScheduledPostInput, AccountUncheckedCreateWithoutScheduledPostInput>
    connectOrCreate?: AccountCreateOrConnectWithoutScheduledPostInput
    upsert?: AccountUpsertWithoutScheduledPostInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutScheduledPostInput, AccountUpdateWithoutScheduledPostInput>, AccountUncheckedUpdateWithoutScheduledPostInput>
  }

  export type PostUpdateOneWithoutScheduledPostNestedInput = {
    create?: XOR<PostCreateWithoutScheduledPostInput, PostUncheckedCreateWithoutScheduledPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutScheduledPostInput
    upsert?: PostUpsertWithoutScheduledPostInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutScheduledPostInput, PostUpdateWithoutScheduledPostInput>, PostUncheckedUpdateWithoutScheduledPostInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PostCreateWithoutAccountInput = {
    id?: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
    ScheduledPost?: ScheduledPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAccountInput = {
    id?: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
    ScheduledPost?: ScheduledPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAccountInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput>
  }

  export type PostCreateManyAccountInputEnvelope = {
    data: PostCreateManyAccountInput | PostCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type ContentSettingCreateWithoutAccountInput = {
    id?: string
    promptText?: string | null
    promptImage?: string | null
    promptHashtags?: string | null
    imageSource?: string | null
    targetUrl?: string | null
    autoPost?: boolean | null
    cronExpression?: string | null
    promotedOnly?: boolean | null
    useAiOnImage?: boolean | null
  }

  export type ContentSettingUncheckedCreateWithoutAccountInput = {
    id?: string
    promptText?: string | null
    promptImage?: string | null
    promptHashtags?: string | null
    imageSource?: string | null
    targetUrl?: string | null
    autoPost?: boolean | null
    cronExpression?: string | null
    promotedOnly?: boolean | null
    useAiOnImage?: boolean | null
  }

  export type ContentSettingCreateOrConnectWithoutAccountInput = {
    where: ContentSettingWhereUniqueInput
    create: XOR<ContentSettingCreateWithoutAccountInput, ContentSettingUncheckedCreateWithoutAccountInput>
  }

  export type ScheduledPostCreateWithoutAccountInput = {
    id?: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutScheduledPostInput
  }

  export type ScheduledPostUncheckedCreateWithoutAccountInput = {
    id?: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type ScheduledPostCreateOrConnectWithoutAccountInput = {
    where: ScheduledPostWhereUniqueInput
    create: XOR<ScheduledPostCreateWithoutAccountInput, ScheduledPostUncheckedCreateWithoutAccountInput>
  }

  export type ScheduledPostCreateManyAccountInputEnvelope = {
    data: ScheduledPostCreateManyAccountInput | ScheduledPostCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAccountInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAccountInput, PostUncheckedUpdateWithoutAccountInput>
    create: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAccountInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAccountInput, PostUncheckedUpdateWithoutAccountInput>
  }

  export type PostUpdateManyWithWhereWithoutAccountInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAccountInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    accountId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    hashtags?: StringNullableFilter<"Post"> | string | null
    targetUrl?: StringNullableFilter<"Post"> | string | null
    promoted?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type ContentSettingUpsertWithoutAccountInput = {
    update: XOR<ContentSettingUpdateWithoutAccountInput, ContentSettingUncheckedUpdateWithoutAccountInput>
    create: XOR<ContentSettingCreateWithoutAccountInput, ContentSettingUncheckedCreateWithoutAccountInput>
    where?: ContentSettingWhereInput
  }

  export type ContentSettingUpdateToOneWithWhereWithoutAccountInput = {
    where?: ContentSettingWhereInput
    data: XOR<ContentSettingUpdateWithoutAccountInput, ContentSettingUncheckedUpdateWithoutAccountInput>
  }

  export type ContentSettingUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    promptImage?: NullableStringFieldUpdateOperationsInput | string | null
    promptHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    promotedOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    useAiOnImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContentSettingUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    promptImage?: NullableStringFieldUpdateOperationsInput | string | null
    promptHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    promotedOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    useAiOnImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ScheduledPostUpsertWithWhereUniqueWithoutAccountInput = {
    where: ScheduledPostWhereUniqueInput
    update: XOR<ScheduledPostUpdateWithoutAccountInput, ScheduledPostUncheckedUpdateWithoutAccountInput>
    create: XOR<ScheduledPostCreateWithoutAccountInput, ScheduledPostUncheckedCreateWithoutAccountInput>
  }

  export type ScheduledPostUpdateWithWhereUniqueWithoutAccountInput = {
    where: ScheduledPostWhereUniqueInput
    data: XOR<ScheduledPostUpdateWithoutAccountInput, ScheduledPostUncheckedUpdateWithoutAccountInput>
  }

  export type ScheduledPostUpdateManyWithWhereWithoutAccountInput = {
    where: ScheduledPostScalarWhereInput
    data: XOR<ScheduledPostUpdateManyMutationInput, ScheduledPostUncheckedUpdateManyWithoutAccountInput>
  }

  export type ScheduledPostScalarWhereInput = {
    AND?: ScheduledPostScalarWhereInput | ScheduledPostScalarWhereInput[]
    OR?: ScheduledPostScalarWhereInput[]
    NOT?: ScheduledPostScalarWhereInput | ScheduledPostScalarWhereInput[]
    id?: StringFilter<"ScheduledPost"> | string
    accountId?: StringFilter<"ScheduledPost"> | string
    scheduledAt?: DateTimeFilter<"ScheduledPost"> | Date | string
    status?: StringFilter<"ScheduledPost"> | string
    createdAt?: DateTimeFilter<"ScheduledPost"> | Date | string
    postId?: StringNullableFilter<"ScheduledPost"> | string | null
  }

  export type AccountCreateWithoutPostsInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    contentSettings?: ContentSettingCreateNestedOneWithoutAccountInput
    ScheduledPost?: ScheduledPostCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPostsInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    contentSettings?: ContentSettingUncheckedCreateNestedOneWithoutAccountInput
    ScheduledPost?: ScheduledPostUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutPostsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPostsInput, AccountUncheckedCreateWithoutPostsInput>
  }

  export type ScheduledPostCreateWithoutPostInput = {
    id?: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutScheduledPostInput
  }

  export type ScheduledPostUncheckedCreateWithoutPostInput = {
    id?: string
    accountId: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
  }

  export type ScheduledPostCreateOrConnectWithoutPostInput = {
    where: ScheduledPostWhereUniqueInput
    create: XOR<ScheduledPostCreateWithoutPostInput, ScheduledPostUncheckedCreateWithoutPostInput>
  }

  export type ScheduledPostCreateManyPostInputEnvelope = {
    data: ScheduledPostCreateManyPostInput | ScheduledPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutPostsInput = {
    update: XOR<AccountUpdateWithoutPostsInput, AccountUncheckedUpdateWithoutPostsInput>
    create: XOR<AccountCreateWithoutPostsInput, AccountUncheckedCreateWithoutPostsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPostsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPostsInput, AccountUncheckedUpdateWithoutPostsInput>
  }

  export type AccountUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentSettings?: ContentSettingUpdateOneWithoutAccountNestedInput
    ScheduledPost?: ScheduledPostUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentSettings?: ContentSettingUncheckedUpdateOneWithoutAccountNestedInput
    ScheduledPost?: ScheduledPostUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ScheduledPostUpsertWithWhereUniqueWithoutPostInput = {
    where: ScheduledPostWhereUniqueInput
    update: XOR<ScheduledPostUpdateWithoutPostInput, ScheduledPostUncheckedUpdateWithoutPostInput>
    create: XOR<ScheduledPostCreateWithoutPostInput, ScheduledPostUncheckedCreateWithoutPostInput>
  }

  export type ScheduledPostUpdateWithWhereUniqueWithoutPostInput = {
    where: ScheduledPostWhereUniqueInput
    data: XOR<ScheduledPostUpdateWithoutPostInput, ScheduledPostUncheckedUpdateWithoutPostInput>
  }

  export type ScheduledPostUpdateManyWithWhereWithoutPostInput = {
    where: ScheduledPostScalarWhereInput
    data: XOR<ScheduledPostUpdateManyMutationInput, ScheduledPostUncheckedUpdateManyWithoutPostInput>
  }

  export type AccountCreateWithoutContentSettingsInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutAccountInput
    ScheduledPost?: ScheduledPostCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutContentSettingsInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAccountInput
    ScheduledPost?: ScheduledPostUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutContentSettingsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutContentSettingsInput, AccountUncheckedCreateWithoutContentSettingsInput>
  }

  export type AccountUpsertWithoutContentSettingsInput = {
    update: XOR<AccountUpdateWithoutContentSettingsInput, AccountUncheckedUpdateWithoutContentSettingsInput>
    create: XOR<AccountCreateWithoutContentSettingsInput, AccountUncheckedCreateWithoutContentSettingsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutContentSettingsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutContentSettingsInput, AccountUncheckedUpdateWithoutContentSettingsInput>
  }

  export type AccountUpdateWithoutContentSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAccountNestedInput
    ScheduledPost?: ScheduledPostUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutContentSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAccountNestedInput
    ScheduledPost?: ScheduledPostUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutScheduledPostInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutAccountInput
    contentSettings?: ContentSettingCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutScheduledPostInput = {
    id?: string
    login: string
    password: string
    proxy?: string | null
    method: number
    userAgent: string
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAccountInput
    contentSettings?: ContentSettingUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutScheduledPostInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutScheduledPostInput, AccountUncheckedCreateWithoutScheduledPostInput>
  }

  export type PostCreateWithoutScheduledPostInput = {
    id?: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutScheduledPostInput = {
    id?: string
    accountId: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
  }

  export type PostCreateOrConnectWithoutScheduledPostInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutScheduledPostInput, PostUncheckedCreateWithoutScheduledPostInput>
  }

  export type AccountUpsertWithoutScheduledPostInput = {
    update: XOR<AccountUpdateWithoutScheduledPostInput, AccountUncheckedUpdateWithoutScheduledPostInput>
    create: XOR<AccountCreateWithoutScheduledPostInput, AccountUncheckedCreateWithoutScheduledPostInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutScheduledPostInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutScheduledPostInput, AccountUncheckedUpdateWithoutScheduledPostInput>
  }

  export type AccountUpdateWithoutScheduledPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAccountNestedInput
    contentSettings?: ContentSettingUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutScheduledPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proxy?: NullableStringFieldUpdateOperationsInput | string | null
    method?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAccountNestedInput
    contentSettings?: ContentSettingUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type PostUpsertWithoutScheduledPostInput = {
    update: XOR<PostUpdateWithoutScheduledPostInput, PostUncheckedUpdateWithoutScheduledPostInput>
    create: XOR<PostCreateWithoutScheduledPostInput, PostUncheckedCreateWithoutScheduledPostInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutScheduledPostInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutScheduledPostInput, PostUncheckedUpdateWithoutScheduledPostInput>
  }

  export type PostUpdateWithoutScheduledPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutScheduledPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyAccountInput = {
    id?: string
    content: string
    imageUrl?: string | null
    hashtags?: string | null
    targetUrl?: string | null
    promoted?: boolean
    createdAt?: Date | string
  }

  export type ScheduledPostCreateManyAccountInput = {
    id?: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type PostUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduledPost?: ScheduledPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduledPost?: ScheduledPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    targetUrl?: NullableStringFieldUpdateOperationsInput | string | null
    promoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledPostUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutScheduledPostNestedInput
  }

  export type ScheduledPostUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledPostUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledPostCreateManyPostInput = {
    id?: string
    accountId: string
    scheduledAt: Date | string
    status: string
    createdAt?: Date | string
  }

  export type ScheduledPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutScheduledPostNestedInput
  }

  export type ScheduledPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}