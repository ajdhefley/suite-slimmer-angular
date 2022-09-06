export class HistoryMock {
    length: number;
    //scrollRestoration: ScrollRestoration;
    state: any;
    back = jest.fn();
    forward = jest.fn();
    go = jest.fn();
    pushState = jest.fn();
    replaceState = jest.fn();
}