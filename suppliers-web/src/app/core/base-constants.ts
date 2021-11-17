// ----------------- security ------------

export const AUTH_HEADER = 'authorization';
export const AUTH_HEADER_BEARER_PREFIX = 'Bearer ';
export const AUTH_HEADER_SEPARATOR = ':';
export const COOKIE_TOKEN = 'XSRF-TOKEN';
export const AUTH_HEADER_CONTENT_TYPE = 'Content-Type';
export const AUTH_HEADER_APPLICATION = 'application/x-www-form-urlencoded';
export const GRANT_TYPE_PASSW = 'password';
export const COOKIE_AUTH = 'SCHOOL_AUTH';
export const TOKEN_AUTH_USERNAME = 'ikodigoschool';
export const TOKEN_AUTH_PASSWORD = 'ikodi2021codex';
export const RETRIES = 2;


export const EMAIL_MASK = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+(\.[A-Za-z_\-\.]{1,6})+$/;
export const DELAY_TIME = 100;
export const TABLE_SIZE = 20;
export const NOTIFY_TIME = 1000;

export const ERROR_MESSAGES = {
    required: 'Dato requerido.',
    min: 'Valor por debajo de la cantidad mínima.',
    max: 'Valor por encima de la cantidad máxima.',
    number: 'El valor debe ser numérico.',
    pattern: 'Formato inválido.',
    minlength: 'Longitud mínima no permitida.',
    ngbDate: 'Fecha inválida.',
    minValue: 'El valor debe ser mayor a {0}.',
    maxValue: 'El valor debe ser menor a {0}.',
    equalValue: 'El valor debe ser igual a {0}.',
    tableRequired: 'La tabla requiere un registro.',
    typeFile: 'El archivo {0} corresponde al/los tipo(s) no permitido(s) ({1}).',
    maxFileSize: 'El archivo {0} sobrepasa el tamaño permitido ({1} {2}).',
    maxFileQuantity: 'Se intenta superar el limite establecido de archivos permitidos ({0})',
    maxFilesSizeForMail: 'Los archivos adjuntos exceden el tamaño máximo permitido.',
    internalError: 'Ha ocurrido un error, por favor comunícate con el administrador.',
    minDate: 'La fecha ingresada no puede ser menor a la fecha anterior.',
    minDateToday: 'La fecha ingresada no puede ser menor a la actual.',
    maxDateToday: 'La fecha ingresada no puede ser mayor a la actual.',
    patternMail: 'Ingrese una dirección de correo válida.',
    invalidEmail: 'Correo(s) inválido(s) ({0}).'
};

export const MESSAGES = {
    sure: '¿Estás seguro?',
    confirmation: 'Se guardará la información.',
    changeStatusConfirmation: 'Se cambiará el estado del registro seleccionado.',
    expired: 'La sesión ha expirado.',
    unauthorized: 'No autorizado.',
    unableToConnect: 'No se pudo conectar al servidor.',
    confirmButtonText: '¡Sí, aceptar!',
    cancelButtonText: '¡No, cancelar!',
    success: 'Información guardada exitosamente.',
    statusChanged: 'El estado se cambió con éxito.',
    payerNotFoundForBranchOffice: 'Cliente no existe para esa sucursal.',
    generatingReport: 'El reporte se está generando...',
    generatingForm: 'El formulario se está generando...',
    reportReady: 'El reporte se ha generado, revise sus descargas.',
    addressMainRequired: 'Debe tener al menos una direccion principal',
    generateLetterConfirmation: 'Se generará la carta.',
    removeRecord: 'El registro ha sido eliminado',
    confirmSelectOption: 'Por favor, seleccione una opción',
    policyButtonText: 'Póliza',
    insuredObjectButtonText: 'Objeto Asegurado',
    insuranceObject: 'Objeto del Seguro',
    cancelSaveButtonText: '¡No, guardar!',
    saveButtonText: 'Guardar',
    acceptButtonText: 'Aceptar',
    sendingMails: 'Se estan enviando los correos...',
    mrAndMrsTreatment: 'Sr/a.'
};

export enum Role {
    All = 'All',
    Admin = 'Admin',
    Teacher = 'Teacher',
    Student = 'Student',
  }

