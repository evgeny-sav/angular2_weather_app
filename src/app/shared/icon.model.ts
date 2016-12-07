export class Icon {
  description: string;
  icon: string;
  id: number;
  main: string;

  constructor(
    description: string,
    icon: string,
    id: number,
    main: string
  ) {
    this.description = description;
    this.icon = icon;
    this.id = id;
    this.main = main;
  }
}
