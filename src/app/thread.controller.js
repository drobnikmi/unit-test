class ThreadController {
    constructor(ThreadService) {
        'ngInject';
        this.test = 'test';
        this.threadService = ThreadService;
        this.data = [];
    }
    getThread(){
        this.threadService.getThread().then((response)=>{this.data = response.data});
    }
    removeElement(index){
        this.data.splice(index,1);
    }
}

export default ThreadController;
