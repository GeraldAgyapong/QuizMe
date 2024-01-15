// Import necessary testing utilities from Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component being tested
import { PlayComponent } from './play.component';

// Describe block for the PlayComponent test suite
describe('PlayComponent', () => {
  let component: PlayComponent; // Reference to the PlayComponent instance
  let fixture: ComponentFixture<PlayComponent>; // Fixture to create and access the component

  // Setup function to run before each test
  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [PlayComponent] // Declare the component being tested
    }).compileComponents(); // Compile the component

    // Create a fixture for the PlayComponent
    fixture = TestBed.createComponent(PlayComponent);
    // Retrieve the instance of the component
    component = fixture.componentInstance;
    // Trigger change detection to initialize the component
    fixture.detectChanges();
  });

  // Test case: Check if the component is created
  it('should create', () => {
    // Assertion: Check if the component instance exists (truthy)
    expect(component).toBeTruthy();
  });
});
