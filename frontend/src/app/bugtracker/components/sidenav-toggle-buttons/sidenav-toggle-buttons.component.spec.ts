import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { SidenavToggleButtonsComponent } from './sidenav-toggle-buttons.component';

/**
 * An ActivateRoute test double with a `firstChild` observable.
 * Use the `setFirstChild()` method to replace the `firstChild` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  private urlsubject = new ReplaySubject<UrlSegment[]>();

  constructor(initialParams?: string) {
    this.setFirstChild(initialParams);
  }

  /** The mock firstChild observable */
  firstChild = { url: this.urlsubject.asObservable() };

  /** Set the firstChild observable's next value */
  setFirstChild(url: string = '') {
    let seg = [new UrlSegment(url, {})];
    this.urlsubject = new ReplaySubject<UrlSegment[]>();
    this.urlsubject.next(seg);
    this.firstChild = { url: this.urlsubject.asObservable() };
  }
}

describe('SidenavToggleButtonsComponent', () => {
  let component: SidenavToggleButtonsComponent;
  let fixture: ComponentFixture<SidenavToggleButtonsComponent>;
  let router: Router;
  let activeRouteStub: ActivatedRouteStub;
  let activeroute: ActivatedRoute;

  beforeEach(async () => {
    activeRouteStub = new ActivatedRouteStub('123456');

    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: SidenavToggleButtonsComponent,
            children: [
              { path: 'login', component: SidenavToggleButtonsComponent },
              { path: 'notlogin', component: SidenavToggleButtonsComponent },
              { path: '**', component: SidenavToggleButtonsComponent },
            ],
          },
        ]),
      ],
      declarations: [SidenavToggleButtonsComponent],
      providers: [
        // { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activeRouteStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    // activeroute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(SidenavToggleButtonsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with blank route', () => {
    const expectedPath = '/';
    const [actualPath] = router.url;
    expect(actualPath).toBe(expectedPath, 'starts with blank path');
  });

  it('should start with blank value for property: selectedVal', () => {
    expect(component.selectedVal).toBe('');
  });

  it('should set selectedval to activeroute.firstchild parameter', fakeAsync(() => {
    activeRouteStub.setFirstChild('/testurl');
    tick();
    fixture.detectChanges();
    expect(component.selectedVal).toBe('/testurl');
  }));

  it('should navigate to the parameter given to onValChange()', fakeAsync(() => {
    component.onValChange('test');
    tick();
    fixture.detectChanges();
    expect(router.url).toBe('/bugtracker/test');
  }));

  // the only other test i can think of is adding the material harness and testing 
  // on click navigation for the button toggle group.
  // #TODO: ADD TEST
});
