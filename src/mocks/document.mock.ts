import { LocationMock } from './location.mock';

export class DocumentMock {
    URL: string;
    alinkColor: string;
    all: HTMLAllCollection;
    anchors: HTMLCollectionOf<HTMLAnchorElement>;
    applets: HTMLCollection;
    bgColor: string;
    body: HTMLElement;
    characterSet: string;
    charset: string;
    compatMode: string;
    contentType: string;
    cookie: string;
    currentScript: HTMLOrSVGScriptElement | null;
    defaultView: (WindowProxy & typeof globalThis) | null;
    designMode: string;
    dir: string;
    doctype: DocumentType | null;
    documentElement: HTMLElement;
    documentURI: string;
    domain: string;
    embeds: HTMLCollectionOf<HTMLEmbedElement>;
    fgColor: string;
    forms: HTMLCollectionOf<HTMLFormElement>;
    fullscreen: boolean;
    fullscreenEnabled: boolean;
    head: HTMLHeadElement;
    hidden: boolean;
    images: HTMLCollectionOf<HTMLImageElement>;
    implementation: DOMImplementation;
    inputEncoding: string;
    lastModified: string;
    linkColor: string;
    links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    ownerDocument: null;
    pictureInPictureEnabled: boolean;
    plugins: HTMLCollectionOf<HTMLEmbedElement>;
    readyState: DocumentReadyState;
    referrer: string;
    rootElement: SVGSVGElement | null;
    scripts: HTMLCollectionOf<HTMLScriptElement>;
    scrollingElement: Element | null;
    timeline: DocumentTimeline;
    title: string;
    visibilityState: DocumentVisibilityState;
    vlinkColor: string;

    location: LocationMock;

    onfullscreenchange: ((this: DocumentMock, ev: Event) => any) | null;
    onfullscreenerror: ((this: DocumentMock, ev: Event) => any) | null;
    onpointerlockchange: ((this: DocumentMock, ev: Event) => any) | null;
    onpointerlockerror: ((this: DocumentMock, ev: Event) => any) | null;
    onreadystatechange: ((this: DocumentMock, ev: Event) => any) | null;
    onvisibilitychange: ((this: DocumentMock, ev: Event) => any) | null;

    adoptNode() { }
    captureEvents() { }
    caretRangeFromPoint() { }
    clear() { }
    close() { }
    createAttribute() { }
    createAttributeNS() { }
    createCDATASection() { }
    createComment() { }
    createDocumentFragment() { }
    createElement() { }
    createElementNS() { }
    createEvent() { }
    createNodeIterator() { }
    createProcessingInstruction() { }
    createRange() { }
    createTextNode() { }
    createTreeWalker() { }
    execCommand() { }
    exitFullscreen() { }
    exitPictureInPicture() { }
    exitPointerLock() { }
    getElementById() { }
    getElementsByClassName() { }
    getElementsByName() { }
    getElementsByTagName() { }
    getElementsByTagNameNS() { }
    getSelection() { }
    hasFocus() { }
    hasStorageAccess() { }
    importNode() { }
    open() { }
    queryCommandEnabled() { }
    queryCommandIndeterm() { }
    queryCommandState() { }
    queryCommandSupported() { }
    queryCommandValue() { }
    releaseEvents() { }
    requestStorageAccess() { }
    write() { }
    writeln() { }
    addEventListener() { }
    removeEventListener() { }
}