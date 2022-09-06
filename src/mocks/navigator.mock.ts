export class NavigatorMock {
    clipboard: Clipboard;
    credentials: CredentialsContainer;
    doNotTrack: string | null;
    geolocation: Geolocation;
    maxTouchPoints: number;
    mediaCapabilities: MediaCapabilities;
    mediaDevices: MediaDevices;
    mediaSession: MediaSession;
    permissions: Permissions;
    serviceWorker: ServiceWorkerContainer;
    canShare = jest.fn();
    getGamepads = jest.fn();
    requestMediaKeySystemAccess = jest.fn();
    sendBeacon = jest.fn();
    share = jest.fn();
    vibrate = jest.fn();
}