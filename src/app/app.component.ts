import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { INoticia } from './interfaces/inoticia.interface';

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  arrayNoticias: INoticia[] = [
    {
      titulo:
        'Descubrimiento de un nuevo planeta habitable a 120 años luz de la Tierra',
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/PlanetaSH%286%29.jpg/300px-PlanetaSH%286%29.jpg',
      texto:
        "Un equipo de astrónomos de la NASA ha anunciado el descubrimiento de un nuevo exoplaneta en la zona habitable de su estrella, ubicado a aproximadamente 120 años luz de la Tierra. El planeta, denominado Kepler-452c, posee una atmósfera densa y temperaturas moderadas que podrían permitir la existencia de agua en estado líquido. Según los investigadores, este hallazgo representa un avance significativo en la búsqueda de vida extraterrestre. 'Este es uno de los planetas más prometedores que hemos encontrado hasta ahora', comentó la astrofísica Jane Carter, líder del equipo de investigación. Los científicos planean realizar estudios más detallados con telescopios de última generación para analizar su composición y posibles signos de actividad biológica.",
      fecha: new Date('2025-02-19'),
    },
    {
      titulo:
        'Revolucionario avance en inteligencia artificial transforma la medicina',
      imagen:
        'https://mexico.unir.net/wp-content/uploads/sites/6/2021/10/medicina_ia_shutterstock_618326639.jpg',
      texto:
        "Un grupo de investigadores del Instituto de Tecnología de Massachusetts (MIT) ha desarrollado una inteligencia artificial capaz de diagnosticar enfermedades con una precisión sin precedentes. El modelo, denominado MedAI, ha sido entrenado con millones de registros médicos y puede detectar afecciones como el cáncer de pulmón y enfermedades cardiovasculares en cuestión de segundos. 'Este avance podría cambiar la manera en que los médicos diagnostican y tratan a los pacientes', afirmó el doctor Michael Edwards, uno de los desarrolladores del proyecto. La tecnología ya ha sido probada en varios hospitales con resultados prometedores, y se espera que en los próximos años se implemente a nivel global. Sin embargo, algunos expertos advierten sobre la necesidad de regular su uso para evitar errores o sesgos en los diagnósticos.",
      fecha: new Date('2025-02-18'),
    },
  ];
}
