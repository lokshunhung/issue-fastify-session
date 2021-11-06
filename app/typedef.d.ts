declare module 'connect-redis' {
    type SessionStore<T> = import('@fastify/session').default.SessionStore & { client: T };
    var connectRedis: {
        (sessionModule: any): {
            new <T>(options: {
                client: T;
                host?: string | undefined;
                port?: number | undefined;
                socket?: string | undefined;
                url?: string | undefined;
                ttl?:
                    | number
                    | string
                    | ((store: SessionStore<T>, sess: import('fastify').Session, sid: string) => number)
                    | undefined;
                disableTTL?: boolean | undefined;
                disableTouch?: boolean | undefined;
                db?: number | undefined;
                pass?: string | undefined;
                prefix?: string | undefined;
                unref?: boolean | undefined;
                serializer?:
                    | { stringify: Function; parse: Function }
                    | JSON
                    | undefined;
                logErrors?: boolean | ((error: string) => void) | undefined;
                scanCount?: number | undefined;
            }): SessionStore<T>;
        };
    };
    export = connectRedis;
}
