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
    
    canShare() { }
    getGamepads() { }
    requestMediaKeySystemAccess() { }
    sendBeacon() { }
    share() { }
    vibrate() { }
}