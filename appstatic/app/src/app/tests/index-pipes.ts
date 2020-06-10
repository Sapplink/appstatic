import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({ name: 'translate' })
export class CustomTranslatePipe implements PipeTransform {
    transform(value: string): string {
        return value
    }
}
export const CustomTranslateService = {
    instant: (value: any) => '',
    use: (language: string) => {},
    setDefaultLang: (language: string) => {},
    addLangs: (languages: string[]) => {}
};