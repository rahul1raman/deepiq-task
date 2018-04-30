import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
    { path: '', redirectTo: '/gallery', pathMatch: 'full'},
    {
      path: 'details',
      component: CardComponent,
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
