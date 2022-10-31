/**
 * The following properties are currently unsupported/unavailable:
 * 
 * - scrollRestoration
 **/
export class HistoryMock {
    length: number;
    state: any;

    back() { }
    forward() { }
    go() { }
    pushState() { }
    replaceState() { }
}