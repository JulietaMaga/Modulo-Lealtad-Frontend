import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit {
  ngOnInit(): void {
    this.initializeSidebarToggle();
  }
  protected readonly title = signal('ModuloLealtad');

  // Se recomienda ejecutar este código una vez que el DOM esté completamente cargado.
// Si lo pones en el ngOnInit de un componente de Angular, asegúrate de que
// los elementos #toggleSidebar, #sidebar, y #overlay existan en la vista.
  initializeSidebarToggle(): void {
  const toggleButton = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  if (!toggleButton || !sidebar) {
    console.error('One or more sidebar elements not found in the DOM.');
    return;
  }

  // Función para alternar el estado del menú
  const toggleSidebar = () => {
    // Alterna la clase que oculta la barra lateral (-translate-x-full)
    sidebar.classList.toggle('-translate-x-full');
    // Alterna la visibilidad del overlay
    //overlay.classList.toggle('hidden');

    // Alterna el atributo aria-expanded para accesibilidad
    const isExpanded = sidebar.classList.contains('-translate-x-full') ? 'false' : 'true';
    toggleButton.setAttribute('aria-expanded', isExpanded);
  };

  // 1. Evento para abrir/cerrar el menú al hacer clic en el botón
  toggleButton.addEventListener('click', toggleSidebar);

  // 2. Evento para cerrar el menú al hacer clic en el overlay (fondo oscuro)
  //overlay.addEventListener('click', toggleSidebar);

  // Opcional: Cerrar el menú automáticamente si la ventana se agranda a un tamaño de escritorio
  // Esto es un 'extra' para asegurar que el estado sea correcto al cambiar el tamaño de la ventana
  const mediaQuery = window.matchMedia('(min-width: 768px)'); // md: en Tailwind CSS

  const handleTabletChange = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      // Si es tamaño de escritorio (md: o más grande), asegura que el overlay esté oculto
      // y que la barra lateral no tenga la clase de ocultar en móvil.
      //if (!overlay.classList.contains('hidden')) {
      //  overlay.classList.add('hidden');
      //}
      if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
      }
    } else {
      // Si vuelve a móvil, y la barra lateral está abierta (no tiene -translate-x-full), oculta el overlay
      // Esto es para asegurar que al volver a móvil, el estado sea el inicial.
      //if (!sidebar.classList.contains('-translate-x-full') && !overlay.classList.contains('hidden')) {
         //overlay.classList.remove('hidden');
      }
    }
  };

 // handleTabletChange(mediaQuery); // Ejecuta al cargar
  //mediaQuery.addEventListener('change', handleTabletChange); // Escucha cambios
}



