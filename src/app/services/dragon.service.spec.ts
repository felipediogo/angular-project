import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { DragonService } from './dragon.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('Dragon Service', () => {
  let service: DragonService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DragonService]
    });

    injector = getTestBed();
    service = injector.get(DragonService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([DragonService], (service: DragonService) => {
    expect(service).toBeTruthy();
  }));

  it('test getDragons(size)', () => {
    const dragons = {
      "items": [
        {
          "_id": "5b2c0eb08969530011473f6f",
          "name": "Tiamat",
          "type": "Hydra",
          "created_at": "2018-06-21T20:46:40.532Z",
          "slug": "5b2c0eb08969530011473f6f",
          "__v": 0,
          "histories": []
        }
      ],
      "_metadata": {
        "page": 0,
        "per_page": 1,
        "page_count": 1,
        "total_count": 52
      }
    };

    service.getDragons(1).subscribe(response => {
      expect(response).toBe(dragons);
    });

    const req = httpMock.expectOne(`${service.API_URL}?size=${1}`);
    expect(req.request.method).toBe("GET");
    req.flush(dragons);
  });

  it('test getDragon(slug)', () => {
    const dragon = {
      "_id": "5b2c0eb08969530011473f6f",
      "name": "Tiamat",
      "type": "Hydra",
      "created_at": "2018-06-21T20:46:40.532Z",
      "slug": "5b2c0eb08969530011473f6f",
      "__v": 0,
      "histories": []
    };

    service.getDragon(dragon.slug).subscribe(response => {
      expect(response).toBe(dragon);
    });

    const req = httpMock.expectOne(`${service.API_URL}/${dragon.slug}`);
    expect(req.request.method).toBe("GET");
    req.flush(dragon);

  });

  it('test saveDragon(dragon) - NEW', () => {
    const dragon = {
      "_id": "5b2c0eb08969530011473f6f",
      "name": "Tiamat",
      "type": "Hydra",
      "created_at": "2018-06-21T20:46:40.532Z",
      "slug": "",
      "__v": 0,
      "histories": ''
    };

    service.saveDragon(dragon).subscribe(response => {
      expect(response).toBe(dragon);
    });

    httpMock.expectOne({
      url: service.API_URL,
      method: 'POST'
    }).flush(dragon);
  });

  it('test saveDragon(dragon) - UPDATE', () => {
    const dragon = {
      "_id": "5b2c0eb08969530011473f6f",
      "name": "Tiamat",
      "type": "Hydra",
      "created_at": "2018-06-21T20:46:40.532Z",
      "slug": "5b2c0eb08969530011473f6f",
      "__v": 0,
      "histories": ''
    };

    const putResponse = {
      "n": 1,
      "nModified": 1,
      "opTime": {
        "ts": "6632380840280064001",
        "t": 7
      },
      "electionId": "7fffffff0000000000000007",
      "ok": 1,
      "operationTime": "6632380840280064001",
      "$clusterTime": {
        "clusterTime": "6632380840280064001",
        "signature": {
          "hash": "oYAjaB1UD+7vxa8J6C/2RXZnIM8=",
          "keyId": "6580804394793566210"
        }
      }
    };

    service.saveDragon(dragon).subscribe(response => {
      expect(response).toBe(putResponse);
    });

    httpMock.expectOne({
      url: `${service.API_URL}/${dragon.slug}`,
      method: 'PUT'
    }).flush(putResponse);
  });

});
