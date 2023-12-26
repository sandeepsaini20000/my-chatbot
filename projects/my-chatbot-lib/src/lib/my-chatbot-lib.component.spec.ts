import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChatbotLibComponent } from './my-chatbot-lib.component';

describe('MyChatbotLibComponent', () => {
  let component: MyChatbotLibComponent;
  let fixture: ComponentFixture<MyChatbotLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyChatbotLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyChatbotLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
