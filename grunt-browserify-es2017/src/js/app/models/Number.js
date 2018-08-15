export class Number
{
    constructor()
    {
        this._number = Number.getRandomInt(1, 10);
    }

    get number()
    {
        return this._number;
    }

    add(number)
    {
        return this.number + number.number;
    }

    static getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
