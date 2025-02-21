import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  @Input() contenidoNoticias: INoticia[] = [];
  noticias: INoticia[] = [];
  status: boolean = false;

  nuevaNoticia: INoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: null,
  };

  ngOnInit() {
    this.noticias = this.contenidoNoticias;
  }

  agregarNoticia(event: INoticia) {
    if (!event.titulo.trim() || !event.imagen.trim() || !event.texto.trim()) {
      this.status = true;
      return;
    }

    const urlImagen = /^(http|https):\/\/.+\..+/;
    if (!urlImagen.test(event.imagen)) {
      this.status = true;
      return;
    }
    if (!event.fecha) {
      this.status = true;
      return;
    }

    const fechaActual = new Date();
    const fechaMin = 1925;
    const fechaElegida = new Date(event.fecha);

    if (fechaElegida > fechaActual || fechaElegida.getFullYear() < fechaMin) {
      this.status = true;
      return;
    }

    this.status = false;
    this.noticias = [...this.noticias, event];

    this.nuevaNoticia = {
      titulo: '',
      imagen: '',
      texto: '',
      fecha: null,
    };
  }
}
