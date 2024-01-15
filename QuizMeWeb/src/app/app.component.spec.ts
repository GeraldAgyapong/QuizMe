// Import necessary testing utilities from Angular
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule for routing-related testing

// Import the component being tested
import { AppComponent } from './app.component';

// Describe block for the AppComponent test suite
describe('AppComponent', () => {
  beforeEach(async () => {
    // Configure the testing module with necessary imports and declarations
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // Import RouterTestingModule for testing components that use router directives
      ],
      declarations: [
        AppComponent // Declare the component being tested
      ],
    }).compileComponents(); // Compile all the components declared in the testing module
  });

  // Test case: Check if the AppComponent is created
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Create a component fixture
    const app = fixture.componentInstance; // Get the instance of the component
    expect(app).toBeTruthy(); // Assertion: Check if the component instance exists (truthy)
  });

  // Test case: Check if the title property of AppComponent is 'quiz-me'
  it(`should have as title 'quiz-me'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Create a component fixture
    const app = fixture.componentInstance; // Get the instance of the component
    expect(app.title).toEqual('quiz-me'); // Assertion: Check if the title property matches 'quiz-me'
  });

  // Test case: Check if the title is rendered in the HTML template
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Create a component fixture
    fixture.detectChanges(); // Trigger change detection to render the component
    const compiled = fixture.nativeElement as HTMLElement; // Get the rendered HTML element
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, quiz-me'); // Assertion: Check if 'Hello, quiz-me' is contained in the h1 element's text content
  });
});
