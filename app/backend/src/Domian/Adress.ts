class Client {
    id: string | undefined;
    private  street: string;
    private number: number;
    private district: string;
    private city: string;
    private state: string;

    constructor(
     street: string,
     number: number,
     district: string,
     city: string,
     state: string,
    ) {
        this.street = street ,
        this.number = number,
        this.district = district,
        this.city = city,
        this.state = state
    }

    public setId (id: string) {
        this.id = id;
    }

    public setstreet (street: string) {
        this.street = street;
    }

    public getstreet () {
        return this.street;
    }

    public setnumber(number: number) {
        this.number = number;
    }

    public getnumber () {
        return this.number;
    }

    public setdistrict(district: string) {
        this.district = district;
    }

    public getdistrict () {
        return this.district;
    }

    public setcity (city: string) {
        this.city = city;
    }

    public getcity () {
        return this.city;
    }

    public setstate (state: string) {
        this.state = state;
    }

    public getstate () {
        return this.state;
    }
    }
    export default Client