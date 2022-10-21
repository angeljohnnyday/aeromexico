import characters from '../json/hp-characters.json'
import gryffindor from '../json/hp-gryffindor.json'
import staff from '../json/hp-staff.json'
import students from '../json/hp-students.json'

export enum PathEnum {
    CHARACTERS = 'hp-characters',
    GRYFFINDOR = 'hp-gryffindor',
    STAFF = 'hp-staff',
    STUDENTS = 'hp-students'
}

export default function useJsonData(path: PathEnum) {
    switch (path) {
        case PathEnum.CHARACTERS:
            return characters;
        case PathEnum.GRYFFINDOR:
            return gryffindor;
        case PathEnum.STAFF:
            return staff;
        case PathEnum.STUDENTS:
            return students;
    }
}
