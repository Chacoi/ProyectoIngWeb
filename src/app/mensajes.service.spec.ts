import { TestBed } from '@angular/core/testing';

import { MensajeService } from './mensajes.service';

describe('MensajesService', () => {
  let service: MensajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
