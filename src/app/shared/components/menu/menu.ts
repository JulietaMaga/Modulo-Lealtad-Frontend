import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from 'colibrihub-shared-services';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

   constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute
  ) {}
   logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.route.queryParamMap.subscribe((params) => {
          const returnUrl = params.get('redirect');
          
          if (returnUrl) {
            if (returnUrl.includes('localhost')) {
              window.location.href = `http://${returnUrl}`;
            } else {
              window.location.href = `https://${returnUrl}`;
            }
          } else {
            window.location.href = '/';
          }
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
      
  }
}

