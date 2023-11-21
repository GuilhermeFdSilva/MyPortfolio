import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppModule } from '../app.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [HomeComponent]
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
  })
});
