describe("Gilded Rose", function() {

  it("should store the correct sell_in value when item is created", function() {
    const item = new Item("Test Item", 10, 20);
    expect(item.sell_in).toEqual(10);
  });

});
