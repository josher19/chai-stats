if (!chai) {
  var chai = require('chai')
    , stats = require('..');
  chai.use(stats);
}

var should = chai.should()
  , expect = chai.expect
  , assert = chai.assert;

function err(fn, msg) {
  try {
    fn();
    throw new chai.AssertionError({ message: 'Expected an error' });
  } catch (err) {
    assert.equal(err.message, msg);
  }
}

describe('Chai Almost Equal', function () {

  describe('almostEqual', function() {
  
    it('assert almost equal', function() {
      assert.almostEqual(3.1416, 3.14159, 3);
      assert.almostEqual(3.1416, 3, 0);
    })
    
/* 

    // RED LIGHT: will need refactor code to get Green Light

    it('expect almost equal', function() {
      expect(3.1416).to.almost.equal(3.14159, 3);
    })

    it('expect almost eql', function() {
      expect({ pi: 3.1416 }).to.almost.eql({ pi: 3.14159 }, 3);
    })

    it('should be almost equal', function() {
      Math.PI.should.almost.equal(3.1416, 3);
      Math.PI.should.almost.equal(3.1416, 0);
    })
*/

    it('should not be almost equal', function() {
      err(function () {
        assert.almostEqual(3.1416, 3.14159, 6); 
      }, "expected 3.1416 to equal 3.14159 up to 6 decimal places"); 
    
      err(function () {
        assert.almostEqual(3.1416, 3.14159); 
      }, "expected 3.1416 to equal 3.14159 up to 7 decimal places"); 
    })
    
  });

  describe('deepAlmostEqual', function() {
      
    it('should be (deep) almost equal', function() {
      assert.deepAlmostEqual({pi: 3.1416}, {pi: 3.14159}, 3);
    });

    it('should not be (deep) almost equal', function() {        
        err(function () {
            assert.deepAlmostEqual({pi: 3.1416}, {pi: 3.14159}, 6); 
        }, "expected { pi: 3.1416 } to equal { pi: 3.14159 } up to 6 decimal places"); 
    
        err(function () {
            assert.deepAlmostEqual({pi: 3.1416}, {pi: 3.14159}); 
        }, "expected { pi: 3.1416 } to equal { pi: 3.14159 } up to 7 decimal places"); 
    });

  });
});
