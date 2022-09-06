import { BarPropMock } from './bar-prop.mock';
import { DocumentMock } from './document.mock';
import { LocationMock } from './location.mock';
import { NavigatorMock } from './navigator.mock';

export class WindowMock {
    clientInformation: NavigatorMock;
    closed: boolean;
    //customElements: CustomElementRegistry;
    devicePixelRatio: number;
    document: DocumentMock;
    event: Event | undefined;
    //external: External;
    //frameElement: Element | null;
    frames = this;
    history: History;
    innerHeight: number;
    innerWidth: number;
    length: number;
    get location(): LocationMock {
        return new LocationMock();
    }
    set location(href: string | LocationMock) {

    }
    locationbar: BarPropMock;
    menubar: BarPropMock;
    name: string;
    navigator: NavigatorMock;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    opener: any;
    orientation: number;
    outerHeight: number;
    outerWidth: number;
    pageXOffset: number;
    pageYOffset: number;
    //parent: WindowProxy;
    personalbar: BarPropMock;
    //screen: Screen;
    screenLeft: number;
    screenTop: number;
    screenX: number;
    screenY: number;
    scrollX: number;
    scrollY: number;
    scrollbars: BarPropMock;
    self = this
    //speechSynthesis: SpeechSynthesis;
    status: string;
    statusbar: BarPropMock;
    toolbar: BarPropMock;
    //top: WindowProxy | null;
    //visualViewport: VisualViewport | null;
    alert = jest.fn();
    blur = jest.fn();
    cancelIdleCallback = jest.fn();
    captureEvents = jest.fn();
    close = jest.fn();
    confirm = jest.fn();
    focus = jest.fn();
    getComputedStyle = jest.fn();
    getSelection = jest.fn();
    matchMedia = jest.fn();
    moveBy = jest.fn();
    moveTo = jest.fn();
    open = jest.fn();
    postMessage = jest.fn();
    print = jest.fn();
    prompt = jest.fn();
    releaseEvents = jest.fn();
    requestIdleCallback = jest.fn();
    resizeBy = jest.fn();
    resizeTo = jest.fn();
    scroll = jest.fn();
    scrollBy = jest.fn();
    scrollTo = jest.fn();
    stop = jest.fn();
    addEventListener = jest.fn();
    removeEventListener = jest.fn();
    [index: number]: WindowMock;
}