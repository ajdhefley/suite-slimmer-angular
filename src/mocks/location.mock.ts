export class LocationMock extends Location {
    ancestorOrigins: DOMStringList;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString = jest.fn();
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    assign = jest.fn();
    reload = jest.fn();
    replace = jest.fn();
}