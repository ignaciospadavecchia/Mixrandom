import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Cambiar el locale de la app. Cambiamos el idioma de la aplicación a nivel global
// Importar los idiomas deseados (por lo general será solo el castellano (es))
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
// Ahora los registramos
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es' },
    provideHttpClient()
  ]
};
