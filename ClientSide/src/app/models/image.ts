import { Url } from '../services/url';

export class Image {
    id: number;
    name: string;
    url: Url;
    isBlur: boolean;
    isClosedEye: boolean;
    isDark: boolean;
    isCutFace: boolean;
    isGroom: boolean;
    isLight: boolean;
    isInside: boolean;
    hasChildren: boolean;
    hasYoung: boolean;
    hasAdults: boolean;
    numPerson: number;
    isInRecycleBin: boolean;
}
