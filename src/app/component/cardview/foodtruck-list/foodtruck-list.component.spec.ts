import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardviewComponent } from './foodtruck-list.component';

describe('CardviewComponent', () => {
  let component: CardviewComponent;
  let fixture: ComponentFixture<CardviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
