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
  statusTitulo: boolean = false;
  statusTexto: boolean = false;
  statusImagen: boolean = false;
  statusFecha: boolean = false;

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
    this.status = false;
    this.statusTitulo = false;
    this.statusTexto = false;
    this.statusImagen = false;
    this.statusFecha = false;

    if (!event.titulo.trim()) {
      this.status = true;
      this.statusTitulo = true;
    }
    if (!event.imagen.trim()) {
      this.status = true;
      this.statusImagen = true;
    }
    if (!event.texto.trim()) {
      this.status = true;
      this.statusTexto = true;
    }

    const urlImagen = /^(http|https):\/\/.+\..+/;
    if (!urlImagen.test(event.imagen)) {
      this.status = true;
      this.statusImagen = true;
    }
    if (!event.fecha) {
      this.status = true;
      this.statusFecha = true;
    } else {
      const fechaActual = new Date();
      const fechaMin = 1925;
      const fechaElegida = new Date(event.fecha);

      if (fechaElegida > fechaActual || fechaElegida.getFullYear() < fechaMin) {
        this.status = true;
        this.statusFecha = true;
      }
    }

    if (this.status) {
      return;
    }

    this.noticias = [...this.noticias, event];

    this.nuevaNoticia = {
      titulo: '',
      imagen: '',
      texto: '',
      fecha: null,
    };
  }
}
