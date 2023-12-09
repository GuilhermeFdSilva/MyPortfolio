import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ProjectsComponent],
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
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o ProjectsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o componente corretamente', () => {
    const activatedRoute = TestBed.inject(ActivatedRoute);

    component.ngOnInit()

    expect(activatedRoute.paramMap.subscribe).toHaveBeenCalled();
  });

  it('deve chamar o metodo goToDetails e abrir os detalhes do projeto', () => {
    const routerSpy = TestBed.inject(Router);

    component.goToDetails(1);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['detalhes/1']);
  });
});
