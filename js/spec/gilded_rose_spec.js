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

  //T3 End Of Day
  it("should decrease sell_in and quality by 1 for a normal item at end of day", function() {
    items = [ new Item("Normal Item", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });
  
  //T4 Date passed
  it("should degrade quality by 2 when sell_in is below 0", function() {
    items = [ new Item("Normal Item", 0, 10) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(8); // -2 because sell_in < 0
  });
});
