import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRouterComponent } from './container-router.component';
import { AppModule } from '../app.module';

describe('ContainerRouterComponent', () => {
  let component: ContainerRouterComponent;
  let fixture: ComponentFixture<ContainerRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ContainerRouterComponent]
    });
    fixture = TestBed.createComponent(ContainerRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o ContainerRouterComponent', () => {
    expect(component).toBeTruthy();
  });
});
