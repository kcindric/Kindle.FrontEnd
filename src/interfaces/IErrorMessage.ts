export interface IErrorMessage {
  attemptedValue: string;
  customState: any;
  errorCode: string;
  errorMessage: string;
  formattedMessageArguments: Array<any>;
  formattedMessagePlaceholderValues: {
    PropertyName: string;
    PropertyValue: string;
  };
  propertyName: string;
  severity: number;
}
