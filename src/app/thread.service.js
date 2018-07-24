class ThreadService {
    constructor($http){
        'ngInject';
        this.$http = $http;
    }
    getThread(){
        return this.$http.get('http://jsonplaceholder.typicode.com/posts/1');
    }
}

export default ThreadService;