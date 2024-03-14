class ItemsInfo {


    constructor() {


        this.iteminfo = {};
    }

    addItem(id, name, val) {
        if (val == 0) {
            this.iteminfo[id] = name;
        }
        else {
            let code = id - 1;
            let itemNameBuilder = name.split('');
            let counter = 0;


            for (let i = 4; i <= 8; i++) {
                counter++;
                itemNameBuilder[1] = i.toString();
                this.iteminfo[code + counter] = itemNameBuilder.join('');

                for (let j = 1; j <= 4; j++) {
                    counter++;
                    name = itemNameBuilder.join('') + "@" + j;
                    this.iteminfo[code + counter] = name;
                }
            }
        }

    }

    addAllItems(itemIds){
        itemIds.forEach((item,i) => {
            this.iteminfo[i+1] = item; 
        });
    }


    initItems() {
        if(itemIds !== null){
            this.addAllItems(itemIds.split(","));
        }else {
            console.log("ItemsIds.txt yuklenmedi");
        }
        
    }
}

