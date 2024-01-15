// Import necessary testing utilities from Angular
import { TestBed } from '@angular/core/testing';

// Import the service being tested
import { DatabaseService } from './database.service';

// Describe block for the DatabaseService test suite
describe('DatabaseService', () => {
  let service: DatabaseService; // Reference to the DatabaseService instance

  // Setup function to run before each test
  beforeEach(() => {
    // Configure the testing module without any specific configuration
    TestBed.configureTestingModule({});

    // Inject the DatabaseService into the test bed to create an instance of the service
    service = TestBed.inject(DatabaseService);
  });

  // Test case: Check if the service is created
  it('should be created', () => {
    // Assertion: Check if the service instance exists (truthy)
    expect(service).toBeTruthy();
  });
});
