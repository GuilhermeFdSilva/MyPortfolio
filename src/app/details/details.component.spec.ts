import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { AppModule } from '../app.module';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [DetailsComponent]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o DetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o metodo goTo e abrir o link em uma nova aba', () => {
    const windowSpy = spyOn(window, 'open');
    const linkTest = 'https://google.com';

    component.goTo(linkTest);

    expect(windowSpy).toHaveBeenCalledWith(linkTest, '_blank');
  });
});
