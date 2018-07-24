import app from './app.module';

describe('Thread Service test', ()=>{
    let httpBackend,
        threadService,
        response;

    beforeEach(()=>{angular.mock.module("app")});

    beforeEach(inject(($httpBackend, ThreadService)=> {
        threadService = ThreadService;
        httpBackend = $httpBackend;
        httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts/1').respond([
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        ]);
    }));

    it('return one thread', ()=>{
        threadService.getThread().then((res)=>{response = res.data});
        httpBackend.flush();
        expect(response.length).toEqual(1);
        expect(response[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    })
})