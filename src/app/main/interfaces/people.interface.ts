export interface People {
    id:         string;
    name:       string;
    gender?:    Nder;
    age:        string;
    eye_color:  string;
    hair_color: string;
    films:      string[];
    species:    string;
    url:        string;
    gander?:    Nder;
}
export enum Nder {
    Female = "Female",
    Male = "Male",
    Na = "NA",
}