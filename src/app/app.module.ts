import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatosService } from './servicios/datos.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { CursosComponent } from './cursos/cursos.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { DocenciaComponent } from './docencia/docencia.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbardashComponent } from './dashboard/navbardash/navbardash.component';
import { BotoneradashComponent } from './dashboard/botoneradash/botoneradash.component';
import { LoginComponent } from './modales/login/login.component';
import { EditordatosComponent } from './modales/editordatos/editordatos.component';
import { EditoracercaComponent } from './modales/editoracerca/editoracerca.component';
import { EditorexperienciaComponent } from './modales/editorexperiencia/editorexperiencia.component';
import { EditorformacionacademicaComponent } from './modales/editorformacionacademica/editorformacionacademica.component';
import { EditorcursosComponent } from './modales/editorcursos/editorcursos.component';
import { EditorcertificadosComponent } from './modales/editorcertificados/editorcertificados.component';
import { EditordocenteComponent } from './modales/editordocente/editordocente.component';
import { EditorhardComponent } from './modales/editorhard/editorhard.component';
import { EditorsoftComponent } from './modales/editorsoft/editorsoft.component';
import { EditoridiomasComponent } from './modales/editoridiomas/editoridiomas.component';
import { LogoutComponent } from './modales/logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    CursosComponent,
    CertificadosComponent,
    DocenciaComponent,
    SkillsComponent,
    FooterComponent,
    DashboardComponent,
    NavbardashComponent,
    BotoneradashComponent,
    LoginComponent,
    EditordatosComponent,
    EditoracercaComponent,
    EditorexperienciaComponent,
    EditorformacionacademicaComponent,
    EditorcursosComponent,
    EditorcertificadosComponent,
    EditordocenteComponent,
    EditorhardComponent,
    EditorsoftComponent,
    EditoridiomasComponent,
    LogoutComponent,
    ErrorComponent,
    
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],

  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
