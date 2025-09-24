import { ConversationManager } from '../../src/services/ConversationManager';
import { createMockRedis, createMockLLMService } from '../mocks';

describe('ConversationManager', () => {
  let conversationManager: ConversationManager;
  let mockRedis: any;
  let mockLLMService: any;

  beforeEach(() => {
    mockRedis = createMockRedis();
    mockLLMService = createMockLLMService();
    conversationManager = new ConversationManager(mockRedis, mockLLMService);
  });

  it('should detect individual entity type correctly', async () => {
    mockLLMService.analyzeMessage.mockResolvedValue({
      entityType: 'individual',
      confidence: 0.95
    });

    const response = await conversationManager.processMessage(
      'test-session',
      'I want to open a personal account'
    );

    expect(response.nextStep).toBe('currency_selection');
  });

  // ... more tests
});
