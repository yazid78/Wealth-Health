export interface Employee {
    firstname: string,
    lastname: string,
    dateofbirth: string,
    startdate: string,
    department: string,
    street: string,
    city: string,
    state: string,
    zipCode: string
}
export interface AppState {
    show: boolean;
    employee: Employee[]
}