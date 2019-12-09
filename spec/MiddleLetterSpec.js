describe("MiddleLetter", function(){
  var middleLetter;

  beforeEach(function(){
    middleLetter = new MiddleLetter();
  });

  it("should return 'A'", function(){
    expect(middleLetter.findMiddle('A')).toEqual('A');
  });

  it("should return 'of'", function(){
    expect(middleLetter.findMiddle('of')).toEqual('of');
  });

  it("should return 'a'", function(){
    expect(middleLetter.findMiddle('car')).toEqual('a');
  });

  it("should return 'o'", function(){
    expect(middleLetter.findMiddle('dog')).toEqual('o');
  });

  it("should return 'k'", function(){
    expect(middleLetter.findMiddle('sky')).toEqual('k');
  });

});

// get_middle("test") # => "es"
// get_middle("testing") # => "t"
// get_middle("middle") # => "dd"
// get_middle("A") # => "A"
// get_middle("of") # => "of"
