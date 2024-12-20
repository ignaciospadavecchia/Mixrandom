import { Component } from '@angular/core';
import { IPersona } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-lista-personas',
  imports: [],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {
  personas: IPersona[] = [
    {
      nombre: 'Domeniga',
      apellido: 'Kenwin',
      ciudad: 'Frontignan',
      email: 'dkenwin0@about.com',
      avatar: 'https://robohash.org/necessitatibusetsit.jpg?size=50x50&set=set1',
      sueldo: '€1321,10'
    },
    {
      nombre: 'Simeon',
      apellido: 'Cortese',
      ciudad: 'Añatuya',
      email: 'scortese1@netlog.com',
      avatar: 'https://robohash.org/inventorevoluptasdebitis.jpg?size=50x50&set=set1',
      sueldo: '€1045,28'
    },
    {
      nombre: 'Vally',
      apellido: 'Purslow',
      ciudad: 'Kallífytos',
      email: 'vpurslow2@reverbnation.com',
      avatar: 'https://robohash.org/impeditomnisqui.bmp?size=50x50&set=set1',
      sueldo: '€1866,32'
    },
    {
      nombre: 'Koral',
      apellido: 'Reichartz',
      ciudad: 'Adolfo Lopez Mateos',
      email: 'kreichartz3@unc.edu',
      avatar: 'https://robohash.org/solutaeumet.bmp?size=50x50&set=set1',
      sueldo: '€1558,29'
    },
    {
      nombre: 'Sinclair',
      apellido: 'Longdon',
      ciudad: 'Severo-Yeniseyskiy',
      email: 'slongdon4@upenn.edu',
      avatar: 'https://robohash.org/asperioressitnemo.bmp?size=50x50&set=set1',
      sueldo: '€1772,08'
    },
    {
      nombre: 'Camilla',
      apellido: 'Hutchin',
      ciudad: 'Montongtebolak',
      email: 'chutchin5@discuz.net',
      avatar: 'https://robohash.org/suntbeataevelit.bmp?size=50x50&set=set1',
      sueldo: '€1571,25'
    },
    {
      nombre: 'Sol',
      apellido: 'Johncey',
      ciudad: 'Qiaodi',
      email: 'sjohncey6@mac.com',
      avatar: 'https://robohash.org/occaecatinemoinventore.bmp?size=50x50&set=set1',
      sueldo: '€1840,59'
    },
    {
      nombre: 'Berkley',
      apellido: 'Hubery',
      ciudad: 'Two Hills',
      email: 'bhubery7@de.vu',
      avatar: 'https://robohash.org/consequunturanimicumque.png?size=50x50&set=set1',
      sueldo: '€1485,88'
    },
    {
      nombre: 'Mahmoud',
      apellido: 'Hammerberger',
      ciudad: 'Hanggan',
      email: 'mhammerberger8@gmpg.org',
      avatar: 'https://robohash.org/ullamconsequunturut.bmp?size=50x50&set=set1',
      sueldo: '€1547,83'
    },
    {
      nombre: 'Putnam',
      apellido: 'Springham',
      ciudad: 'Logovskoye',
      email: 'pspringham9@wix.com',
      avatar: 'https://robohash.org/advitaeaut.bmp?size=50x50&set=set1',
      sueldo: '€1541,24'
    },
    {
      nombre: 'Dalston',
      apellido: 'Brammer',
      ciudad: 'Kanáli',
      email: 'dbrammera@opera.com',
      avatar: 'https://robohash.org/etadipiscimolestiae.png?size=50x50&set=set1',
      sueldo: '€1111,06'
    },
    {
      nombre: 'Ethelred',
      apellido: 'Cleere',
      ciudad: 'Neochóri',
      email: 'ecleereb@ovh.net',
      avatar: 'https://robohash.org/magnamassumendaquia.png?size=50x50&set=set1',
      sueldo: '€1663,61'
    },
    {
      nombre: 'Em',
      apellido: 'Polfer',
      ciudad: 'El Fahs',
      email: 'epolferc@liveinternet.ru',
      avatar: 'https://robohash.org/nonrepellatrerum.bmp?size=50x50&set=set1',
      sueldo: '€1521,01'
    },
    {
      nombre: 'Colin',
      apellido: 'Pellitt',
      ciudad: 'Lyublino',
      email: 'cpellittd@exblog.jp',
      avatar: 'https://robohash.org/omnisblanditiisconsequatur.jpg?size=50x50&set=set1',
      sueldo: '€1930,05'
    },
    {
      nombre: 'Lorelei',
      apellido: 'Gaddas',
      ciudad: 'Cergy-Pontoise',
      email: 'lgaddase@nih.gov',
      avatar: 'https://robohash.org/velaliquidsuscipit.png?size=50x50&set=set1',
      sueldo: '€1107,94'
    }
  ];

}
