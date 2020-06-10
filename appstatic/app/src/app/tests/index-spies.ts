import { of } from 'rxjs';

export const translateServiceSpy = jasmine.createSpyObj('TranslateService', ['instant', 'get', 'addLangs', 'setDefaultLang', 'use', 'setTranslation']);
export const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open', 'close', 'afterClosed', 'beforeClosed', 'openDialogs']);