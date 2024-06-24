/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `QR code parse error, error = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Error getting userMedia, error = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "The device doesn't support navigator.mediaDevices , only "
            + "supported cameraIdOrConfig in this case is deviceId parameter "
            + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        return "Camera streaming not supported by the browser.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Unable to query supported devices, unknown error.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Camera access is only supported in secure context like https "
            + "or localhost.";
    }

    public static scannerPaused(): string {
        return "Scanner paused";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Escaneando";
    }

    public static idleStatus(): string {
        return "Inativo";
    }

    public static errorStatus(): string {
        return "Erro";
    }

    public static permissionStatus(): string {
        return "Permissão";
    }

    public static noCameraFoundErrorStatus(): string {
        return "Nenhuma câmera encontrada";
    }

    public static lastMatch(decodedText: string): string {
        return `Última correspondência: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Scanner de Código";
    }

    public static cameraPermissionTitle(): string {
        return "Solicitar Permissões de Câmera";
    }

    public static cameraPermissionRequesting(): string {
        return "Solicitando permissões de câmera...";
    }

    public static noCameraFound(): string {
        return "Nenhuma câmera encontrada";
    }

    public static scanButtonStopScanningText(): string {
        return "Parar Escaneamento";
    }

    public static scanButtonStartScanningText(): string {
        return "Iniciar Escaneamento";
    }

    public static torchOnButton(): string {
        return "Ligar Lanterna";
    }

    public static torchOffButton(): string {
        return "Desligar Lanterna";
    }

    public static torchOnFailedMessage(): string {
        return "Falha ao ligar a lanterna";
    }

    public static torchOffFailedMessage(): string {
        return "Falha ao desligar a lanterna";
    }

    public static scanButtonScanningStarting(): string {
        return "Iniciando a câmera...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Escaneie um Arquivo de Imagem";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Escaneie usando a câmera diretamente";
    }

    public static selectCamera(): string {
        return "Selecionar Câmera";
    }

    public static fileSelectionChooseImage(): string {
        return "Escolher Imagem";
    }

    public static fileSelectionChooseAnother(): string {
        return "Escolher Outra";
    }

    public static fileSelectionNoImageSelected(): string {
        return "Nenhuma imagem selecionada";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "Câmera Anônima";
    }

    public static dragAndDropMessage(): string {
        return "Ou arraste uma imagem para escanear";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "Ou arraste uma imagem para escanear (outros arquivos não são suportados)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return "zoom";
    }

    public static loadingImage(): string {
        return "Loading image...";
    }

    public static cameraScanAltText(): string {
        return "Camera based scan";
    }

    public static fileScanAltText(): string {
        return "Fule based scan";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Powered by ";
    }

    public static reportIssues(): string {
        return "Report issues";
    }
}
