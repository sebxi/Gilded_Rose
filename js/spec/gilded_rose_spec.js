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

  //T5 Quality never negativ
  it("should not reduce quality below 0", function() {
    items = [ new Item("Normal Item", 0, 0) ];
    update_quality();
    expect(items[0].quality).toBe(0);
  });

  //T6 Aged Brie
  it("should increase quality of Aged Brie as it gets older", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].sell_in).toBe(1);      // SellIn sinkt um 1
    expect(items[0].quality).toBe(1);      // Qualität steigt um 1
  });

  //T7 Quality always <=50
  it("should not increase quality above 50", function() {
    items = [ new Item("Aged Brie", 5, 50) ];
    update_quality();
    expect(items[0].quality).toBe(50);
  });

  //T8 Sulfuras
  it("should never decrease sell_in or quality for Sulfuras", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].sell_in).toBe(0);     // sell_in bleibt gleich
    expect(items[0].quality).toBe(80);    // quality bleibt gleich
  });

//Testfälle 9
  //T9.1 Backstage passes normal
  it("should increase quality by 1 when sell_in > 10", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].quality).toBe(21);
  });

  //T9.2 Backstage passes < 10 days > 5 Days
  it("should increase quality by 2 when sell_in is 10 or less but more than 5", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
    update_quality();
    expect(items[0].quality).toBe(22);
  });

  //T9.3 Backstage passes < 5 Days > 0 Days
  it("should increase quality by 3 when sell_in is 5 or less but not negative", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ];
    update_quality();
    expect(items[0].quality).toBe(23);
  });

  //T9.4 Backstage passes < 0 Days
  it("should drop quality to 0 after the concert (sell_in < 0)", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ];
    update_quality();
    expect(items[0].quality).toBe(0);
  });
});
