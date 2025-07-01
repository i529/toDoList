import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToDoListComponent } from './component-to-do-list.component';

describe('ComponentToDoListComponent', () => {
  let component: ComponentToDoListComponent;
  let fixture: ComponentFixture<ComponentToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentToDoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
