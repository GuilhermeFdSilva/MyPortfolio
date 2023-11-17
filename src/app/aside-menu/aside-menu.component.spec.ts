import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuComponent } from './aside-menu.component';
import { AppModule } from '../app.module';

describe('AsideMenuComponent', () => {
  let component: AsideMenuComponent;
  let fixture: ComponentFixture<AsideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [AsideMenuComponent]
    });
    fixture = TestBed.createComponent(AsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o AsideMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('variavel "visible" deve inicializar como false', () => {
    expect(component.visible).toBeFalse();
  });

  it('deve chamar os metodos toggleMenu e changeOpacity', () => {
    spyOn(component, 'changeDisplay');

    component.toggleMenu();

    expect(component.visible).toBeTrue();
    expect(component.changeDisplay).toHaveBeenCalled();
    
    component.toggleMenu();
    
    expect(component.visible).toBeFalse();
    expect(component.changeDisplay).toHaveBeenCalled();
  });

  it('deve chamar o metodo closeMenu com "visible" true e false', () => {
    component.closeMenu();

    expect(component.visible).toBeFalse();

    component.toggleMenu();
    component.closeMenu();

    expect(component.visible).toBeFalse();
  });

  it('deve chamar o metodo goTo e abrir o link em uma nova aba', () => {
    const windowSpy = spyOn(window, 'open');
    const linkTest = 'https://google.com';

    component.goTo(linkTest);

    expect(windowSpy).toHaveBeenCalledWith(linkTest, '_blank');
  });
});
