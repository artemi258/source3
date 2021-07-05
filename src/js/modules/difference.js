export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.newOfficer.querySelectorAll(this.items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTrigger(officer, officerCount, officerItems) {
        officer.querySelector('.plus').addEventListener('click', () => {
            if (officerCount ===  officerItems.length - 2) {
                officerItems[ officerItems.length - 1].remove();
            }
            officerItems[officerCount].style.display = 'flex';
            officerCount++;
        });
    }

    hideItems(officerItems) {
        officerItems.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTrigger(this.oldOfficer, this.oldCounter, this.oldItems);
        this.bindTrigger(this.newOfficer, this.newCounter, this.newItems);
    }
}