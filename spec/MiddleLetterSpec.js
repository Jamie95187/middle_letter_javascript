describe("MiddleLetter", function(){
  var middleLetter;

  beforeEach(function(){
    middleLetter = new MiddleLetter();
  });

  it("should return 'A'", function(){
    expect(middleLetter.findMiddle('A')).toEqual('A');
  })

  it("should return 'of'", function(){
    expect(middleLetter.findMiddle('of')).toEqual('of');
  })
})

// get_middle("test") # => "es"
// get_middle("testing") # => "t"
// get_middle("middle") # => "dd"
// get_middle("A") # => "A"
// get_middle("of") # => "of"