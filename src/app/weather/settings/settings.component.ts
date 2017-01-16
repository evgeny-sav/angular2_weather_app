import {Component} from "@angular/core";

@Component({
  selector: 'settings',
  template: require('./settings.component.html')
})
export class SettingsComponent {
  tempCelsius: boolean = true;
  tempKelvin: boolean = false;
  tempFahrenheit: boolean = false;
  temperature:string;

  toggleTemp(temp: string) {
    this.temperature = temp;
    if (temp === 'c'){
      this.tempCelsius = true;
      this.tempKelvin = false;
      this.tempFahrenheit = false;
    } else if (temp === 'k') {
      this.tempCelsius = false;
      this.tempKelvin = true;
      this.tempFahrenheit = false;
    } else if (temp === 'f') {
      this.tempCelsius = false;
      this.tempKelvin = false;
      this.tempFahrenheit = true;
    }
  }
}
