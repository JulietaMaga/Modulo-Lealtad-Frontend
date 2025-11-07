import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'colibrihub-shared-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 text-center">
      <h2>Cerrando sesión...</h2>
    </div>
  `
})
export class Logout {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.logout();
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.route.queryParamMap.subscribe(params => {
        const returnUrl = params.get('redirect') || '';
        window.location.assign(`https://${returnUrl}`);
      });
    });
  }
}
