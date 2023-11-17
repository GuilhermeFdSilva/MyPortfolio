import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { AppModule } from '../app.module';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [FooterComponent]
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
});
