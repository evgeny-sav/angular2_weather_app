export const template = `
<div id="loader-box" class="text-center" [class.hidden]="!isLoading"><div class="loader"></div></div>
<card *ngFor="let city of weatherData" [city]="city" ></card>
`;
