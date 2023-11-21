import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRouterComponent } from './container-router.component';

describe('ContainerRouterComponent', () => {
  let component: ContainerRouterComponent;
  let fixture: ComponentFixture<ContainerRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerRouterComponent]
    });
    fixture = TestBed.createComponent(ContainerRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
