import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourofherosComponent } from './tourofheros.component';

describe('TourofherosComponent', () => {
  let component: TourofherosComponent;
  let fixture: ComponentFixture<TourofherosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourofherosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourofherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
