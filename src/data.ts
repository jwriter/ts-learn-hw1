export class Data{
    constructor(
        public img: string,
        public address: string,
        public phone: number, // дополнительно задание pipe для форматирования
        public weather: Weather,
        public social_info:Social,
        public type: string) {}
}

export class Weather{
    constructor(
        public title: string,
        public icon: string,
        public water: number,
        public temperature: number
    ){}
}

export class Social{
    constructor(
        public title: string,
        public img: string,
        public followers: number,
        public following: number
    ){}
}