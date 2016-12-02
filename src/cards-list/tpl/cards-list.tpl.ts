export const template = `
<card *ngFor="let city of weatherData" [city]="city" ></card>
`;
