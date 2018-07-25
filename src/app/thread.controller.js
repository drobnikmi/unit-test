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
    removeDuplicatedWords(sentence){
        if(typeof sentence !== 'string') throw new Error('Please provide string param');
        if(sentence === '') throw new Error('String should have at least one char');
        if(!sentence.includes(' ')) return sentence;
        const sentenceArray = sentence.replace(/\s+/g, ' ').trim().split(' ');
        // for(let sentence of sentenceArray) {
        //     if(destinationArray.indexOf(sentence) === -1){
        //         destinationArray.push(sentence);
        //     }
        // }
        // return destinationArray.join(' '); 

        // for(let sentence of sentenceArray) {
        //     if(!destinationArray.includes(sentence)){
        //         destinationArray.push(sentence);
        //     }
        // }
        // return destinationArray.join(' ');

        // return Array.from(new Set(sentenceArray)).join(' ');
        return [...new Set(sentenceArray)].join(' ');
        
    }
}

export default ThreadController;
