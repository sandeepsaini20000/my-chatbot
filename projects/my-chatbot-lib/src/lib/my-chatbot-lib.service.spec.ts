import { TestBed } from '@angular/core/testing';

import { MyChatbotLibService } from './my-chatbot-lib.service';

describe('MyChatbotLibService', () => {
  let service: MyChatbotLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyChatbotLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
