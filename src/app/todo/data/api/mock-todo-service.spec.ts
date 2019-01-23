import { MockTodoService } from './mock-todo-service';

describe('MockTodoService', () => {
  it('should create an instance', () => {
    expect(new MockTodoService()).toBeTruthy();
  });
});
