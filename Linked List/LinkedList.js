console.log('<started>')

function LinkedList(){
    let Node = function(element){
        this.element=element;
        this.next=null;
    }

    // this.head= new Node('head');
    // this.append= function (element) {};
    // this.insert= function (position, element) {};
    // this.removeAt= function (position) {};
    // this.remove= function (element) {};
    // this.indexOf= function (element) {};
    // this.isEmpty= function () {};
    // this.size= function () {};
    // this.display=function () {};
    let length=0;
    
    this.head= new Node('head');
    this.append= function (element) {
        let node= new Node(element);
        let currentNode;

        if (head===null){ // first node on list
            head=node;
        }
        else {
            currentNode=head;
            //loop the list until find the last item
            while (node.next){
                currentNode=currentNode.next;
            }
            //once we have last item, assign next node to make the link
            currentNode.next=node; 
        }
        length++

    };
    this.insert= function (position, element) {};
    this.removeAt= function (position) {};
    this.remove= function (element) {};
    this.indexOf= function (element) {};
    this.isEmpty= function () {};
    this.size= function () {};
    this.display=function () {};
}
