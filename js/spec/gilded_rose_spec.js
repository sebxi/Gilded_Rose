describe("Gilded Rose", function() {

  //T1 SellIn Value
  it("should store the correct sell_in value when item is created", function() {
    const item = new Item("Test Item", 10, 20);
    expect(item.sell_in).toEqual(10);
  });

  //T2 Quality Value
  it("should store the correct quality value when item is created", function() {
    const item = new Item("Test Item", 5, 30);
    expect(item.quality).toEqual(30);
  });

});
