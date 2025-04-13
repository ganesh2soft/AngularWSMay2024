export class FilteredItems {
    productId: number;
    itemsOrdered: number;
    unitPrice: number;
    totalCost: number;
  
    constructor(productId: number, itemsOrdered: number, unitPrice: number, totalCost: number) {
      this.productId = productId;
      this.itemsOrdered = itemsOrdered;
      this.unitPrice = unitPrice;
      this.totalCost = totalCost;
    }
  }
  