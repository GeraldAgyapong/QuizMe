// Import necessary testing utilities from Angular
import { TestBed } from '@angular/core/testing';

// Import the service being tested
import { AuthService } from './auth.service';

// Describe block for the AuthService test suite
describe('AuthService', () => {
  let service: AuthService; // Reference to the AuthService instance

  // Setup function to run before each test
  beforeEach(() => {
    // Configure the testing module without any specific configuration
    TestBed.configureTestingModule({});

    // Inject the AuthService into the test bed to create an instance of the service
    service = TestBed.inject(AuthService);
  });

  // Test case: Check if the service is created
  it('should be created', () => {
    // Assertion: Check if the service instance exists (truthy)
    expect(service).toBeTruthy();
  });
});
