import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppModule } from '../app.module';
import { ActivatedRoute, Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [HomeComponent],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: jasmine.createSpy('subscribe')
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o metodo goTo e abrir o link em uma nova aba', () => {
    let windowSpy = spyOn(window, 'open');
    let link = 'https://google.com';

    component.goTo(link);

    expect(windowSpy).toHaveBeenCalledWith(link, '_blank');
  });

  it('deve chamar o metodo goToProjects com o module de projetos', () => {
    const routerSpy = TestBed.inject(Router);
    const projectModule = 'angular';

    component.goToPorjects(projectModule);

    expect(routerSpy.navigate).toHaveBeenCalledWith([`/projetos/${projectModule}`]);
  });
});
