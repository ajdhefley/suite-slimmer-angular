import { BarPropMock } from './BarProp.mock';
import { DocumentMock } from './Document.mock';
import { LocationMock } from './Location.mock';
import { NavigatorMock } from './Navigator.mock';
import { ScreenMock } from './Screen.mock';

/**
 * The following properties are currently unsupported/unavailable:
 * 
 * - speechSynthesis
 * - visualViewport
 * - customElements
 * - external
 * - frameElement
 **/
export class WindowMock {
    document: DocumentMock;
    history: History;
    navigator: NavigatorMock;
    clientInformation: NavigatorMock;
    event: Event;

    name: string;
    closed: boolean;
    opener: any;

    orientation: number;
    outerHeight: number;
    outerWidth: number;
    pageXOffset: number;
    pageYOffset: number;
    devicePixelRatio: number;
    innerHeight: number;
    innerWidth: number;
    length: number;

    screen: ScreenMock;
    screenLeft: number;
    screenTop: number;
    screenX: number;
    screenY: number;
    
    status: string;
    statusbar: BarPropMock;
    personalbar: BarPropMock;
    locationbar: BarPropMock;
    menubar: BarPropMock;
    toolbar: BarPropMock;
    scrollbars: BarPropMock;
    scrollX: number;
    scrollY: number;

    parent = this;
    self = this;
    top = this;
    frames = this;
    [index: number]: WindowMock;

    location: LocationMock;

    ondevicemotion: ((this: WindowMock, ev: any) => any);
    ondeviceorientation: ((this: WindowMock, ev: any) => any);
    onorientationchange: ((this: WindowMock, ev: any) => any);

    alert() { }
    blur() { }
    cancelIdleCallback() { }
    captureEvents() { }
    close() { }
    confirm() { }
    focus() { }
    getComputedStyle() { }
    getSelection() { }
    matchMedia() { }
    moveBy() { }
    moveTo() { }
    open() { }
    postMessage() { }
    print() { }
    prompt() { }
    releaseEvents() { }
    requestIdleCallback() { }
    resizeBy() { }
    resizeTo() { }
    scroll() { }
    scrollBy() { }
    scrollTo() { }
    stop() { }
    addEventListener() { }
    removeEventListener() { }
}