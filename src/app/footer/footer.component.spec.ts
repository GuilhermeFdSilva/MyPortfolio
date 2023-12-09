import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { AppModule } from '../app.module';
import { ActivatedRoute, Router } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [FooterComponent],
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
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o FooterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o metodo goTo e abrir o link em uma nova aba', () => {
    const windowSpy = spyOn(window, 'open');
    const linkTeste = 'https://google.com';

    component.goTo(linkTeste);

    expect(windowSpy).toHaveBeenCalledWith(linkTeste, '_blank');
  });

  it('deve chamar o metodo goToProject e mudar para o componente com de acordo com id', () => {
    const routerSpy = TestBed.inject(Router);
    const projectId = '1';

    component.goToProject(projectId);

    expect(routerSpy.navigate).toHaveBeenCalledWith([`/projetos/${projectId}`]);
  });
});
