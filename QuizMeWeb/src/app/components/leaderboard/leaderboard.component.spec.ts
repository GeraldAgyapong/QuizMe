import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderboardComponent } from './leaderboard.component';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  beforeEach(async () => {
    // Configure TestBed to set up testing module
    await TestBed.configureTestingModule({
      declarations: [LeaderboardComponent] // Declare the component to be tested
    }).compileComponents(); // Compile component's template and CSS

    // Create an instance of the component and its associated test fixture
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;

    // Detect changes in the component (trigger change detection)
    fixture.detectChanges();
  });

  it('should create', () => {
    // Test if the component instance was successfully created
    expect(component).toBeTruthy();
  });
});
