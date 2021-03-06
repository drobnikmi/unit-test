import app from './app.module';
import ThreadController from './thread.controller';
import ThreadService from './thread.service';

fdescribe('Thread Controller test', () => {
  let httpBackend,
    threadService,
    response = [
      {
        userId: 1,
        id: 1,
        title: 'title 1',
        body:
          'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        userId: 2,
        id: 2,
        title: 'title 2',
        body: 'body 2'
      }
    ],
    controller;

  beforeEach(() => {
    angular.mock.module('app');
    inject(($httpBackend, ThreadService, $controller) => {
      controller = $controller('ThreadController');
      threadService = ThreadService;
      httpBackend = $httpBackend;
      httpBackend
        .expectGET('http://jsonplaceholder.typicode.com/posts/1')
        .respond(response);
    });
  });

  describe('getThread method', () => {
    beforeEach(() => {
      controller.getThread();
      httpBackend.flush();
    });
    it('should return response', () => {
      expect(controller.data).toEqual(response);
    });

    it('should title of first element match string', () => {
      expect(controller.data[0].title).toBe('title 1');
    });

    it('should response data length be greater than 0', () => {
      expect(controller.data.length).toBeGreaterThan(0);
    });
  });

  describe('removeElement method', () => {
    beforeEach(() => {
      controller.getThread();
      httpBackend.flush();
    });

    it('should remove element from array', () => {
      controller.removeElement(1);
      expect(controller.data.length).toEqual(1);
    });

    it('should title be match to title 1', () => {
      controller.removeElement(1);
      expect(controller.data[0].title).toBe('title 1');
    });

    it('should title be match to title 2', () => {
      controller.removeElement(0);
      expect(controller.data[0].title).toBe('title 2');
    });
  });

  describe('removeDuplicatedWords', () => {
    it('should throw error if args is not string', () => {
        expect(() => {
          controller.removeDuplicatedWords(1);
        }).toThrow(new Error('Please provide string param'));
    });
  
    it('should throw error if string is empty', () => {
        expect(() => {
            controller.removeDuplicatedWords('');
        }).toThrow(new Error('String should have at least one char'));
    });

    it('should return same value if given  string has a single word', () => {
        expect(controller.removeDuplicatedWords('single')).toBe('single');
    });

    it('should return the same single word if both words are the same', () => {
        expect(controller.removeDuplicatedWords('single    single ')).toBe('single');
    });

    it('should remove duplicated words from array', () => {
        let sentence = 'alpha beta beta gamma gamma gamma delta   alpha beta    beta gamma gamma gamma delta ';
        let destinationSentence = 'alpha beta gamma delta';
        expect(controller.removeDuplicatedWords(sentence)).toBe(destinationSentence);
    });
  });
});
